const router = require("express").Router();
const passport = require("passport");
const auth = passport.authenticate("jwt", {
  session: false,
});
const { isAdmin } = require("../../../middlewares/checkRole");
const DestinationGallery = require("../../../models/destination/destination_gallery");
var mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

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
    )
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
    const isExists = await DestinationGallery.findOne({
      destination: req.body.destinationId,
      flag: true,
    });
    if (isExists)
      return res.status(404).json({
        status: false,
        message: "Destination gallery already exist",
      });
    else {
      var documentBody = {};
      if (req.body.destinationId)
        documentBody.destination = req.body.destinationId;
      if (req.body.title) documentBody.title = req.body.title;
      if (req.body.location) documentBody.location = req.body.location;
      if (req.body.mediaType) documentBody.mediaType = req.body.mediaType;
      if (req.body.tags) documentBody.tags = req.body.tags;
      if (req.body.type) documentBody.type = req.body.type;
      if (req.body.status) documentBody.status = req.body.status;
      if (documentBody.mediaType === "image") {
        documentBody.fileUrl = [];
        const file = req.files.fileUrl;
        const systemImageUrl = `${__dirname}/../../../public/files/destination/gallery/images/${
          Date.now() + "-" + file.name
        }`;
        const imageUrlToSave = `public/files/destination/gallery/images/${
          Date.now() + "-" + file.name
        }`;
        // body.fileUrl = imageUrlToSave;
        documentBody.fileUrl.push(imageUrlToSave);
        file.mv(systemImageUrl, function (err) {
          if (err) {
            res.status(500).json({
              status: false,
              message: "Cannot upload the file",
              data: {},
            });
          } else {
            const newsfeedModel = new NewsFeed(documentBody);
            newsfeedModel.save().then((savedNewsfeed) => {
              res.status(200).json({
                status: true,
                message: "Newsfeed added Successfully",
                data: {},
              });
            });
          }
        });
      } else if (documentBody.mediaType === "video") {
        // console.log(documentBody);
        documentBody.fileUrl = [];
        const file = req.files.fileUrl;
        const systemVideoUrl = `${__dirname}/../../../public/files/destination/gallery/videos/${
          Date.now() + "-" + file.name
        }`;
        const videoUrlToSave = `public/files/destination/gallery/videos/${
          Date.now() + "-" + file.name
        }`;
        documentBody.fileUrl.push(videoUrlToSave);
        file.mv(systemVideoUrl, function (err) {
          if (err) {
            res.status(500).json({
              status: false,
              message: "Cannot upload the file",
              data: {},
            });
          } else {
            const destinationGalleryModel = new DestinationGallery(
              documentBody
            );
            destinationGalleryModel.save().then((savedDestinationGallery) => {
              res.status(200).json({
                status: true,
                message: "File added Successfully",
                data: {},
              });
            });
          }
        });
      } else {
        res.status(415).json({
          status: false,
          message: "Invalid media type",
          data: {},
        });
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Bad request", data: error });
  }
});

module.exports = router;
