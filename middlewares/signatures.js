const UsersSignature = require("../models/Form/userSignatures");
const ObjectId = require("mongoose").Types.ObjectId;

const registerSignature = async (req, res, next) => {
	UsersSignature.findOne({ name: req.body.name }).then(
		async existingSignature => {
			if (existingSignature) {
				console.log("already exists");
			} else {
				const license = ObjectId(req.user.license);
				var documentBody = {};
				documentBody.name = req.body.name;
				if (req.body.date) documentBody.date = req.body.date;
				if (req.body.createdBy) documentBody.createdBy = req.body.createdBy;
				if (req.body.designation)
					documentBody.designation = req.body.designation;
				if (req.body.Company) documentBody.Company = req.body.Company;

				let errors = await validateSignature(req.body.name);
				if (!errors.success) return res.status(errors.statusCode);

				documentBody.license = license;

				const signatureModel = new UsersSignature(documentBody);
				signatureModel
					.save()
					.then(savedSig => {
						if (savedSig) {
							res.json({ success: true });
						} else res.json({ success: false });
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	);
};

async function validateSignature(name) {
	try {
		const sigFoundFromName = await UsersSignature.findOne({
			name,
			flag: true
		});
		if (sigFoundFromName)
			return {
				success: false,
				statusCode: 404,
				"errors.name": "UsersSignature Name already exists"
			};
		return {
			success: true
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
			statusCode: 404,
			error
		};
	}
}

module.exports = { registerSignature, validateSignature };
