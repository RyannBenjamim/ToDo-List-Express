const { v4: uuidv4 } = require("uuid");
const formatDate = require("../../public/assets/formatDate");

class List {
  constructor(title) {
    this.id = uuidv4();
    this.title = title;
    this.tasks = [];
    this.createdAt = formatDate(new Date());
    this.updatedAt = formatDate(new Date());
  }
}

module.exports = List;
