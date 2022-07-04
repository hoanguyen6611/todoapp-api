const todoController = require("../controllers/todoController");

const router = require("express").Router();

//ADD TODO
router.post("/addPost", todoController.addTodo);
//GET ALL TODO
router.get("/allTodos", todoController.getAllTodo);
//GET AN TODO
router.get("/:id", todoController.getAnTodo);
//UPDATE AN TODO
router.put("/:id", todoController.updateTodo)
//DELETE AN TODO
router.delete("/:id", todoController.deleteTodo);
module.exports = router;
