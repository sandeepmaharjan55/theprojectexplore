const router = require("express").Router();
const passport = require("passport");
const auth = passport.authenticate("jwt", {
  session: false,
});
const { isAdmin } = require("../../../middlewares/checkRole");
const DestinationEvent = require("../../../models/destination/destination_event");
var mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// @route:  GET api/destinationevent/list
// @desc:   get list of destination event
// @access: auth

router.get("/list", auth, async (req, res) => {
  try {
    let result = await DestinationEvent.find(
      {
        flag: true,
      }
      // "createdDate images videos description mediaType"
    )
      .sort({ createdDate: -1 })
      .lean();

    return res.json({
      status: true,
      message: "Destinations event successfully fetched",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Bad request",
    });
  }
});

// @route:  POST api/destinationevent/store
// @desc:   store destination event
// @access: auth
router.post("/store", auth, async (req, res) => {
  try {
    var documentBody = {};
    if (req.body.destinationId)
      documentBody.destination = req.body.destinationId;
    if (req.body.title) documentBody.title = req.body.title;
    if (req.body.subTitle) documentBody.subTitle = req.body.subTitle;
    if (req.body.desC) documentBody.desC = req.body.desC;
    if (req.body.startDate) documentBody.startDate = req.body.startDate;
    if (req.body.endDate) documentBody.endDate = req.body.endDate;
    const documentModel = new DestinationEvent(documentBody);
    let savedDocument = await documentModel.save();
    if (savedDocument)
      res.json({
        status: true,
        message: "Destination event successfully created",
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
