const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  farvorite: {
    type: Boolean,
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});
const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
    require: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
});
let Todo = mongoose.model("Todo", todoSchema);
let Project = mongoose.model("Project", projectSchema);
module.exports = { Todo, Project };
