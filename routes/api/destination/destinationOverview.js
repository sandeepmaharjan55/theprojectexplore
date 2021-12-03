const router = require("express").Router();
const passport = require("passport");
const auth = passport.authenticate("jwt", {
  session: false,
});
const { isAdmin } = require("../../../middlewares/checkRole");
const DestinationOverview = require("../../../models/destination/destination_overview");
var mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// @route:  GET api/destinationoverview/list
// @desc:   get list of destination overview
// @access: auth

router.get("/list", auth, async (req, res) => {
  try {
    let result = await DestinationOverview.find(
      {
        flag: true,
      }
      // "createdDate images videos description mediaType"
    )
      .sort({ createdDate: -1 })
      .lean();

    return res.json({
      status: true,
      message: "Destinations overview successfully fetched",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Bad request",
    });
  }
});

// @route:  POST api/destinationoverview/store
// @desc:   store destination overview
// @access: auth
router.post("/store", auth, async (req, res) => {
  try {
    const isExists = await DestinationOverview.findOne({
      destination: req.body.destinationId,
      flag: true,
    });

    if (isExists)
      return res.status(404).json({
        status: false,
        message: "Destination Already Exist",
      });
    else {
      var documentBody = {};
      if (req.body.destinationId)
        documentBody.destination = req.body.destinationId;
      if (req.body.temperature) documentBody.temperature = req.body.temperature;
      if (req.body.tempUnit) documentBody.tempUnit = req.body.tempUnit;
      if (req.body.cons) documentBody.cons = req.body.cons;
      if (req.body.pros) documentBody.pros = req.body.pros;
      if (req.body.languages) documentBody.languages = req.body.languages;
      if (req.body.religions) documentBody.religions = req.body.religions;
      if (req.body.landscapes) documentBody.landscapes = req.body.landscapes;
      if (req.body.tags) documentBody.tags = req.body.tags;
      if (req.body.internet) documentBody.internet = req.body.internet;
      if (req.body.fun) documentBody.fun = req.body.fun;
      if (req.body.airQuality) documentBody.airQuality = req.body.airQuality;
      if (req.body.humidity) documentBody.humidity = req.body.humidity;
      if (req.body.lackOfCrime) documentBody.lackOfCrime = req.body.lackOfCrime;
      const documentModel = new DestinationOverview(documentBody);
      let savedDocument = await documentModel.save();
      if (savedDocument)
        res.json({
          status: true,
          message: "Destination Overview successfully created",
          data: savedDocument,
        });
      else
        res.status(406).json({
          status: false,
          message: "Sorry! Cannot create now.",
          data: {},
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Bad request", data: error });
  }
});

module.exports = router;
