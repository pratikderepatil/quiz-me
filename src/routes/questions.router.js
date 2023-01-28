const express = require("express");
const QuestionsModel = require("../models/questions.model");

const app = express.Router();

app.get("/", async (req, res) => {
	const { category, difficulty, noofquestions } = req.query;
	const questions = await QuestionsModel.find({ category, difficulty }).limit(
		noofquestions
	);
	res.send(questions);
});

module.exports = app;
