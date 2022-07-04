const { Todo, Project } = require("../models/model");

const todoController = {
  //ADD TODO
  addTodo: async (req, res) => {
    try {
      const newTodo = new Todo(req.body);
      const savedTodo = await newTodo.save();
      if (req.body.project) {
        const project = Project.findById(req.body.project);
        await project.updateOne({ $push: { todos: savedTodo._id } });
      }
      res.status(200).json(savedTodo);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //GET ALL TODOS
  getAllTodo: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //GET AN TODO
  getAnTodo: async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id).populate("project");
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //UPDATE A TODO
  updateTodo: async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);
      await todo.updateOne({ $set: req.body });
      res.status(200).json("Updated todo successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //DELETE AN TODO
  deleteTodo: async (req, res) => {
    try {
      await Project.updateMany(
        { todos: req.params.id },
        { $pull: { todos: req.params.id } }
      );
      await Todo.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted todo successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = todoController;
