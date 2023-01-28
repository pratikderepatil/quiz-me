const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
	{
		name: { type: String, required: true },
		correctanswercount: { type: Number },
		incorrectanswercount: { type: Number },
		totalscore: { type: Number },
		percentage: { type: Number },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const UserModel = model("user", UserSchema);

module.exports = UserModel;


