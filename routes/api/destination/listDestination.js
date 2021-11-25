const router = require("express").Router();
const passport = require("passport");
const auth = passport.authenticate("jwt", {
  session: false,
});
const { isArtist } = require("../../../middlewares/checkRole");
const Place = require("../../../models/destination/place");
var mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

///api/destination/listDestination/list
router.get("/list", async (req, res) => {
  try {
    let result = await Place.find(
      {
        flag: true,
      },
      "createdDate images videos description mediaType"
    )
      .sort({ createdDate: -1 })
      .lean();

    return res.json({
      status: true,
      message: "Artist commission successfully fetched",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Bad request",
    });
  }
});
module.exports = router;
