const router = require("express").Router();
const passport = require("passport");
const auth = passport.authenticate("jwt", {
  session: false,
});
const { isAdmin } = require("../../../middlewares/checkRole");
const Destination = require("../../../models/destination/destination");
var mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// @route:  GET api/destination/list
// @desc:   get list of destination with detail
// @access: auth

router.get("/list", auth, async (req, res) => {
  try {
    let result = await Destination.find(
      {
        flag: true,
      }
      // "createdDate images videos description mediaType"
    )
      .sort({ createdDate: -1 })
      .lean();

    return res.json({
      status: true,
      message: "Destinations successfully fetched",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Bad request",
    });
  }
});

// @route:  POST api/destination/store
// @desc:   store destination
// @access: auth
router.post("/store", auth, async (req, res) => {
  try {
    var documentBody = {};
    if (req.body.name) documentBody.name = req.body.name;
    if (req.body.subName) documentBody.subName = req.body.subName;
    if (req.body.desC) documentBody.desC = req.body.desC;
    if (req.body.isRecommended)
      documentBody.isRecommended = req.body.isRecommended;
    if (req.body.type) documentBody.type = req.body.type;
    if (req.body.difficulty) documentBody.difficulty = req.body.difficulty;
    if (req.body.minDays) documentBody.minDays = req.body.minDays;
    if (req.body.bestSeasons) documentBody.bestSeasons = req.body.bestSeasons;
    if (req.body.accomodation)
      documentBody.accomodation = req.body.accomodation;
    if (req.body.maxAltitude) documentBody.maxAltitude = req.body.maxAltitude;
    const documentModel = new Destination(documentBody);
    let savedDocument = await documentModel.save();

    if (savedDocument)
      res.json({
        status: true,
        message: "Destination successfully created",
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
