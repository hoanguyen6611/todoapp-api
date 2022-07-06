const { User } = require("../models/model");

const userController = {
  //GET ALL USER
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //DELETE USER
  deleteUser: async (req, res) => {
    try {
        await User.findById(req.params.id);
        res.status(200).json("Delete successfully")
    } catch (error) {
        res.status(500).json(error);
    }
  }
};
module.exports = userController;
