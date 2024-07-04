const express = require("express");
const ListController = require("./controllers/ListController");
const TaskController = require("./controllers/TaskController");

const router = express.Router();

// Rota da Home
router.get("/", (req, res) => {
  res.render("home");
});

// Rotas das listas
router.get("/lists", ListController.show);
router.get("/lists/create", ListController.create);
router.post("/lists/create", ListController.save);
router.post("/lists/delete/:id", ListController.delete);

// Rotas das tarefas
router.get("/lists/:id", TaskController.show);
router.get("/lists/:id/create", TaskController.create);
router.post("/lists/:id/create", TaskController.save);
router.get("/lists/:id/:idtask", TaskController.showTaskPage);
router.post("/lists/:id/:idtask/completed", TaskController.completed);
router.post("/lists/:id/:idtask/delete", TaskController.delete);
router.get("/lists/:id/:idtask/edit", TaskController.edit);
router.post("/lists/:id/:idtask/edit", TaskController.updated);

module.exports = router;
