const { v4: uuidv4 } = require("uuid");
const formatDate = require("../../public/assets/formatDate");

class Task {
  constructor(title, content) {
    this.id = uuidv4();
    this.title = title;
    this.content = content;
    this.isCompleted = false;
    this.createdAt = formatDate(new Date());
    this.updatedAt = formatDate(new Date());
  }
}

module.exports = Task;
