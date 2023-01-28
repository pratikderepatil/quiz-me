const express = require("express");
const UserModel = require("../models/user.model");

const app = express.Router();

app.post("/submit", async (req, res) => {
	const {
		name,
		correctanswercount,
		incorrectanswercount,
		totalscore,
		percentage,
	} = req.body;
	try {
		let newUser = new UserModel({
			name,
			correctanswercount,
			incorrectanswercount,
			totalscore,
			percentage,
		});
		await newUser.save();
		return res.status(201).send(newUser);
	} catch (e) {
		res.status(500).send({ message: e });
	}
});

module.exports = app;
