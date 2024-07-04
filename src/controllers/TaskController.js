const TaskModel = require("../models/TaskModel");
const ListModel = require("../models/ListModel");

const TaskController = {
  // GET /lists/id
  show: (req, res) => {
    const list = ListModel.getListById(req.params.id);

    res.render("tasks", { list });
  },

  // GET /lists/id/create
  create: (req, res) => {
    const { id } = req.params;
    res.render("formNewTask", { id });
  },

  // POST /lists/id/create
  save: (req, res) => {
    const list = ListModel.getListById(req.params.id);
    const { title, content } = req.body;
    const task = TaskModel.createTask(title, content);
    TaskModel.saveTask(list, task);
    res.redirect(`/lists/${list.id}`);
  },

  // GET /lists/id/idtask
  showTaskPage: (req, res) => {
    const { id, idtask } = req.params;
    const list = ListModel.getListById(id);
    const task = TaskModel.getTaskById(idtask, list);

    res.render("task", { task, idlist: id });
  },

  // POST /lists/id/idtask/completed
  completed: (req, res) => {
    const { id, idtask } = req.params;
    const { redirect } = req.query;

    const list = ListModel.getListById(id);
    const task = TaskModel.getTaskById(idtask, list);
    TaskModel.completedTask(task);

    if (redirect === "specific-task") {
      res.redirect(`/lists/${id}/${idtask}`);
    } else {
      res.redirect(`/lists/${id}`);
    }
  },

  // POST /lists/id/idtask/delete
  delete: (req, res) => {
    const { id, idtask } = req.params;
    const list = ListModel.getListById(id);
    TaskModel.deleteTask(idtask, list);

    res.redirect(`/lists/${id}`);
  },

  // GET /lists/id/idtask/edit
  edit: (req, res) => {
    const { id, idtask } = req.params;
    const list = ListModel.getListById(id);
    const task = TaskModel.getTaskById(idtask, list);
    res.render("formEdit", { task, idlist: id });
  },

  // POST /lists/id/idtask/edit
  updated: (req, res) => {
    const { id, idtask } = req.params;
    const list = ListModel.getListById(id);

    const { title, content } = req.body;
    TaskModel.updatedTask(idtask, list, { title, content });

    res.redirect(`/lists/${id}/${idtask}`);
  },
};

module.exports = TaskController;
