const ListModel = require("../models/ListModel");

const ListController = {
  // GET /lists
  show: (req, res) => {
    const lists = ListModel.getAllLists();

    res.render("lists", { lists });
  },

  // GET /lists/create
  create: (req, res) => {
    res.render("formNewList");
  },

  // POST /lists/create
  save: (req, res) => {
    const title = req.body.title;
    const list = ListModel.createList(title);
    ListModel.saveList(list);
    res.redirect("/lists");
  },

  // POST /lists/delete/id
  delete: (req, res) => {
    const { id } = req.params;
    ListModel.deleteList(id);
    res.redirect("/lists");
  },
};

module.exports = ListController;
