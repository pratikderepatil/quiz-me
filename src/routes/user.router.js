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

app.get("/", async (req, res) => {
	try {
		let users = await UserModel.find().sort({ percentage: -1 });
		res.send(users);
	} catch (err) {
		res.send(err);
	}
});

module.exports = app;
