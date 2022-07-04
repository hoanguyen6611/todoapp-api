const { Todo, Project } = require("../models/model");

const projectController = {
  //ADD PROJECT
  addProject: async (req, res) => {
    try {
      const newProject = new Project(req.body);
      const savedProject = await newProject.save();
      res.status(200).json(savedProject);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //GET ALL PROJECTS
  getAllProjects: async (req, res) => {
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //GET AN PROJECT
  getAnProject: async (req, res) => {
    try {
      const project = await Project.findById(req.params.id).populate("todos");
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //UPDATE PROJECT
  updateProject: async (req, res) => {
    try {
      const project = await Project.findById(req.params.id);
      await project.updateOne({ $set: req.body });
      res.status(200).json("Updated project successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //DELETE PROJECT
  deleteProject: async (req, res) => {
    try {
      await Todo.updateMany({ project: req.params.id }, { project: null });
      await Project.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted project successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = projectController;
