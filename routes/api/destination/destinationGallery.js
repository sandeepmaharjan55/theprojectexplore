const router = require("express").Router();
const passport = require("passport");
const auth = passport.authenticate("jwt", {
  session: false,
});
const { isAdmin } = require("../../../middlewares/checkRole");
const DestinationGallery = require("../../../models/destination/destination_gallery");
var mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const { v4: uuidv4 } = require("uuid");

// @route:  GET api/destinationgallery/list
// @desc:   get list of destination gallery
// @access: auth

router.get("/list", auth, async (req, res) => {
  try {
    let result = await DestinationGallery.find(
      {
        flag: true,
      }
      // "createdDate images videos description mediaType"
    ).populate({
      path: "destination",
      match: {
        flag: true
      },
      select: "_id name",
    })
      .sort({ createdDate: -1 })
      .lean();

    return res.json({
      status: true,
      message: "Destination gallery successfully fetched",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Bad request",
    });
  }
});

// @route:  POST api/destinationgallery/store
// @desc:   store destination gallery
// @access: auth
router.post("/store", auth, async (req, res) => {
  try {
    var documentBody = {};
    if (req.body.destination) documentBody.destination = req.body.destination;
    if (req.body.title) documentBody.title = req.body.title;
    if (req.body.location) documentBody.location = req.body.location;
    if (req.body.tags) documentBody.tags = req.body.tags;
    if (req.body.type) documentBody.type = req.body.type;
    if (req.files) {
      documentBody.imageFileUrl = [];
      const file = (
        Array.isArray(req.files.imageFileUrl)
          ? req.files.imageFileUrl
          : [req.files.imageFileUrl]
      ).filter((e) => e);
      for (var i = 0; i < file.length; i++) {
        if (
          file[i].mimetype == "image/png" ||
          file[i].mimetype == "image/jpg" ||
          file[i].mimetype == "image/jpeg"
        ) {
          let randomUUID = uuidv4();
          const systemImageUrl = `${__dirname}/../../../public/files/destination/gallery/`+ req.body.type + `/${
            randomUUID + "-" + file[i].name.toLowerCase().split(" ").join("-")
          }`;
          const imageUrlToSave = `public/files/destination/gallery/`+ req.body.type + `/${
            randomUUID + "-" + file[i].name.toLowerCase().split(" ").join("-")
          }`;
          // body.fileUrl = imageUrlToSave;
          documentBody.imageFileUrl.push(imageUrlToSave);
          file[i].mv(systemImageUrl, function (err) {
            if (err) {
              res.status(500).json({
                status: false,
                message: "Cannot upload the file",
                data: {},
              });
            }
          });
        } else {
          console.log("invalid file type");
        }
      }
    }
    const documentModel = new DestinationGallery(documentBody);
    let savedDocument = await documentModel.save();
    if (savedDocument)
      res.json({
        status: true,
        message: "Destination Gallery successfully created",
        data: savedDocument,
      });
    else
      res.status(406).json({
        status: false,
        message: "Sorry! Cannot create now.",
        data: {},
      });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Bad request", data: error });
  }
});

module.exports = router;
