const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const {
	ACCOUNT_TYPE_DEFAULT
} = require("../../config/key");
const {
	Schema
} = mongoose;
const _ = require("lodash");
const UserSchema = Schema({
	socialId: String,
	avatar: String,
	username: {
		type: String,
		// required: true,
		// unique: true,
		// trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		validate: {
			validator: validator.isEmail,
		},
	},
	phoneNumber: {
		type: Number,
		required: true,
		unique: true,
	},
	role: {
		type: String,
		default: "client", // user type: client,admin,artist
	},
	password: {
		type: String,
		minlength: 6,
		required: true,
	},
	address: String,
	latitude: {
		type: String,
		default: '',
	},
	longitude: {
		type: String,
		default: '',
	},
	city: {
		type: String,
		default: '',
	},
	country: {
		type: String,
		default: '',
	},
	name: {
		type: String,
		trim: true,
		required: true,
	},
	gender: {type: String,
		default: "",},
	joinDate: {
		type: Date,
		default: Date.now,
	},
	accountType: {
		type: String,
		default: ACCOUNT_TYPE_DEFAULT,
	},
	Bookmarks: [{
		type: Schema.Types.ObjectId,
		ref: "product"
	}],
	activeStatus: {
		type: Boolean,
		default: true,
	},
	flag: {
		type: Boolean,
		default: true,
	},
	resetLink: String,
	coverPicture: {
		type: [{
			type: String
		}],
		default: ["public/files/users/defaultCover/default_cover.png"]
	},
	profilePicture: {
		type: [{
			type: String
		}],
		default: ["public/files/users/defaultProfile/default_profile.png"]
	},
	facebookLink: {
		type: String,
	},
	instaLink: {
		type: String,
	},
	youTubeLink: {
		type: String,
	},
	subscriptionType: {
		type: String,
		default: "Basic",
	},
	qaPassed: {
		type: String,
		default: false,
	},
	currency: {
		type: String,
		default: "USD",
	},
	appointmentPrice: Number
});

UserSchema.pre("save", function (next) {
	let user = this;
	if (user.isModified("password")) {
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hashed) => {
				user.password = hashed;
				next();
			});
		});
	} else {
		next();
	}
});

module.exports = User = mongoose.model("user", UserSchema);