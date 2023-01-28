const { Schema, model } = require("mongoose");

const QuestionsSchema = new Schema({});

const QuestionsModel = model("question", QuestionsSchema);

module.exports = QuestionsModel;
