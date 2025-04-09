class Task {
  constructor(id, title, description, color) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.color = color;
    this.completed = false;
    this.createdAt = new Date();
  }

  toggleComplete() {
    this.completed = !this.completed;
  }

  update(updates) {
    if (updates.title !== undefined) this.title = updates.title;
    if (updates.description !== undefined)
      this.description = updates.description;
    if (updates.color !== undefined) this.color = updates.color;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36);
  }

  addTask(title, description, color) {
    const task = new Task(this.generateId(), title, description, color);
    this.tasks.push(task);
    return task;
  }

  getTaskById(id) {
    return this.tasks.find((task) => task.id === id) || null;
  }

  updateTask(id, updates) {
    const task = this.getTaskById(id);
    if (task) {
      task.update(updates);
      return true;
    }
    return false;
  }

  removeTask(id) {
    const taskLength = this.tasks.length;
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks.length !== taskLength;
  }

  toggleTaskComplete(id) {
    const task = this.getTaskById(id);
    if (task) {
      task.toggleComplete();
      return true;
    }
    return false;
  }

  getAllTasks() {
    return this.tasks;
  }
}
