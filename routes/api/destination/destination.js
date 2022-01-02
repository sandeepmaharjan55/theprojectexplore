const router = require("express").Router();
const passport = require("passport");
const auth = passport.authenticate("jwt", {
  session: false,
});
const { isAdmin } = require("../../../middlewares/checkRole");
const Destination = require("../../../models/destination/destination");
var mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const generateFrontEndToken = require("../../../middlewares/frontendauth");
const jwt = require("jsonwebtoken");
const slugify = require('slugify');
const randomstring = require("randomstring");
// @route:  GET api/destination/list
// @desc:   get list of destination with detail
// @access: auth

router.get("/list", auth, isAdmin, async (req, res) => {
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

// @route:  GET api/destination/listnoauth
// @desc:   get list of destination with detail
// @access: public
router.get("/listnoauth",
// generateFrontEndToken,
async (req, res) => {
  // console.log("scrolling");
  try {
    // console.log(req.token);
    // var token = req.headers['x-access-token'];
    // const authHeader = req.headers.authorization;
    // const token = authHeader && authHeader.split(" ")[1];
    // console.log(token);
    // jwt.verify(token, process.env.FRONTEND_JWT_SECRET, function(err, decoded) {
    //   console.log("INSIDE VERIFY");
    //   if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
    //   res.status(200).send(decoded);
    // });

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    // console.log(page, limit);
				const startIndex = (page - 1) * limit;
				const endIndex = page * limit;
        const results = {};
    let tillLastDestinationData = await Destination.find(
      {
        flag: true,
      },
       "name subName desC type difficulty minDays bestSeasons accomodation maxAltitude slug"
    )
      .sort({ createdDate: -1 })
      .lean();
      results.data = tillLastDestinationData.slice(startIndex, endIndex);
    return res.json({
      status: true,
      message: "Destinations successfully fetched",
      ...results,
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
router.post("/store", auth, isAdmin, async (req, res) => {
  try {
    var documentBody = {};
    if (req.body.name){
      documentBody.name = req.body.name;
      documentBody.slug = slugify(req.body.name, {
        replacement: '-',  // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true,      // convert to lower case, defaults to `false`
        strict: false,     // strip special characters except replacement, defaults to `false`
        locale: 'vi',       // language code of the locale to use
        trim: true         // trim leading and trailing replacement chars, defaults to `true`
      }) + '-' + slugify(req.body.subName, {
        replacement: '-',  // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true,      // convert to lower case, defaults to `false`
        strict: false,     // strip special characters except replacement, defaults to `false`
        locale: 'vi',       // language code of the locale to use
        trim: true         // trim leading and trailing replacement chars, defaults to `true`
      })+ '-' + randomstring.generate(15);
      //console.log(documentBody.slug);
    }
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

// @route:  GET api/destination/delete
// @desc:   delete destination
// @access: auth

router.post(
	"/delete",
auth,
	async (req, res) => {
		try {
      // console.log("m here delete");
      // console.log(req);
			let udpatedDocument = await Destination.findOneAndUpdate({
				_id: ObjectId(req.body.id),
				flag: true,
			}, {
				$set: {
					flag: false
				}
			}, {
				new: true
			});
// console.log("sad");
			if (udpatedDocument) res.json({
				message: "Item successfully deleted"
			});
			else res.status(406).json({
				message: "Sorry! Cannot delete now."
			});
		} catch (error) {}
	}
);
module.exports = router;
