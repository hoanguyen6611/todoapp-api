const projectController = require("../controllers/projectController");

const router = require("express").Router();

//ADD PROJECT
router.post("/addProject", projectController.addProject);
//GET ALL PROJECTS
router.get("/allProjects", projectController.getAllProjects);
//GET AN PROJECT
router.get("/:id", projectController.getAnProject);
//UPDATE PROJECT
router.put("/:id", projectController.updateProject);
//DELETE PROJECT
router.delete("/:id", projectController.deleteProject)

module.exports = router;
