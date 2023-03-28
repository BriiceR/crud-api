const router = require("express").Router();
const { getTodos, createTodo, updateTodo, deleteTodo } = require("./controllers/Todo");
router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});



router.post("/todos", createTodo);
router.get("/todos", getTodos);
router.put("/todos/:todoID", updateTodo);
router.delete("/todos/:todoID", deleteTodo);


module.exports = router;