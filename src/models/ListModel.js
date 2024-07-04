const db = require("../db");
const List = require("./List");

const ListModel = {
  getAllLists: () => {
    return db.lists;
  },

  getListById: (id) => {
    const list = db.lists.find((list) => list.id === id);
    return list;
  },

  createList: (list_title) => {
    const list = new List(list_title);
    return list;
  },

  saveList: (list) => {
    db.lists.unshift(list);
  },

  deleteList: (id) => {
    const listIndex = db.lists.findIndex((list) => list.id === id);
    db.lists.splice(listIndex, 1);
  },
};

module.exports = ListModel;
