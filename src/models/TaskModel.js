const Task = require("./Task");
const formatDate = require("../../public/assets/formatDate");

const TaskModel = {
  getTaskById: (id, list) => {
    const task = list.tasks.find((task) => task.id === id);
    return task;
  },

  createTask: (task_title, task_content) => {
    const task = new Task(task_title, task_content);
    return task;
  },

  saveTask: (list, task) => {
    list.tasks.unshift(task);
  },

  deleteTask: (id, list) => {
    const taskIndex = list.tasks.findIndex((task) => task.id === id);
    list.tasks.splice(taskIndex, 1);
  },

  completedTask: (task) => {
    task.isCompleted = !task.isCompleted;
  },

  updatedTask: (id, list, updatedTask) => {
    const index = list.tasks.findIndex((task) => task.id === id);

    list.tasks[index] = {
      ...list.tasks[index],
      ...updatedTask,
      updatedAt: formatDate(new Date()),
    };
  },
};

module.exports = TaskModel;
