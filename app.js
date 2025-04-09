document.addEventListener("DOMContentLoaded", function () {
  const addTaskButton = document.querySelector(".add-task");
  const taskContainer = document.getElementById("task-container");

  const modal = document.getElementById("task-modal");
  const modalTitle = document.getElementById("modal-title");
  const closeModal = document.querySelector(".close-modal");
  const taskForm = document.getElementById("task-form");
  const taskIdInput = document.getElementById("task-id");
  const taskTitleInput = document.getElementById("task-title");
  const taskDescriptionInput = document.getElementById("task-description");
  const taskColorInput = document.getElementById("task-color");

  const taskList = new TaskList();

  function openAddTaskModal() {
    modalTitle.textContent = "Ajouter une tâche";
    taskIdInput.value = "";
    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    taskColorInput.value = "green";
    modal.style.display = "block";
    taskTitleInput.focus();
  }

  function openEditTaskModal(taskId) {
    const task = taskList.getTaskById(taskId);

    if (task) {
      modalTitle.textContent = "Modifier la tâche";
      taskIdInput.value = task.id;
      taskTitleInput.value = task.title;
      taskDescriptionInput.value = task.description || "";
      taskColorInput.value = task.color;
      modal.style.display = "block";
      taskTitleInput.focus();
    }
  }

  function closeTaskModal() {
    modal.style.display = "none";
    taskForm.reset();
  }

  function renderTasks() {
    taskContainer.innerHTML = "";

    const tasks = taskList.getAllTasks();

    if (tasks.length === 0) {
      const emptyMessage = document.createElement("div");
      emptyMessage.className = "empty-message";
      emptyMessage.textContent = "Aucune tâche à afficher";
      taskContainer.appendChild(emptyMessage);
      return;
    }

    tasks.forEach((task) => {
      const taskCard = document.createElement("div");
      taskCard.className = `task-card ${task.color} ${task.completed ? "completed" : ""}`;
      taskCard.dataset.id = task.id;

      const taskHeader = document.createElement("div");
      taskHeader.className = "task-header";

      const taskTitle = document.createElement("h3");
      taskTitle.className = "task-title";
      taskTitle.textContent = task.title;

      const taskActions = document.createElement("div");
      taskActions.className = "task-actions";

      const editBtn = document.createElement("button");
      editBtn.className = "action-btn edit";
      editBtn.innerHTML = '<i class="fas fa-edit"></i>';
      editBtn.addEventListener("click", () => openEditTaskModal(task.id));

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "action-btn delete";
      deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
      deleteBtn.addEventListener("click", () => {
        taskList.removeTask(task.id);
        renderTasks();
      });

      taskActions.appendChild(editBtn);
      taskActions.appendChild(deleteBtn);

      taskHeader.appendChild(taskTitle);
      taskHeader.appendChild(taskActions);

      const taskDescription = document.createElement("p");
      taskDescription.className = "task-description";
      taskDescription.textContent = task.description || "Aucune description";

      const taskCheck = document.createElement("div");
      taskCheck.className = "task-check";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => {
        taskList.toggleTaskComplete(task.id);
        renderTasks();
      });

      const checkLabel = document.createElement("label");
      checkLabel.textContent = task.completed
        ? "Terminée"
        : "Marquer comme terminée";

      taskCheck.appendChild(checkbox);
      taskCheck.appendChild(checkLabel);

      taskCard.appendChild(taskHeader);
      taskCard.appendChild(taskDescription);
      taskCard.appendChild(taskCheck);

      taskContainer.appendChild(taskCard);
    });
  }

  function initEventListeners() {
    addTaskButton.addEventListener("click", openAddTaskModal);

    closeModal.addEventListener("click", closeTaskModal);
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeTaskModal();
      }
    });

    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = taskTitleInput.value.trim();
      if (!title) return;

      const description = taskDescriptionInput.value.trim();
      const color = taskColorInput.value;
      const taskId = taskIdInput.value;

      if (taskId) {
        taskList.updateTask(taskId, { title, description, color });
      } else {
        taskList.addTask(title, description, color);
      }

      closeTaskModal();
      renderTasks();
    });
  }

  function addDemoTasks() {
    taskList.addTask("Learn JS", "Understand the concepts of OOP", "green");
    taskList.addTask(
      "Create a todo list",
      "App to manage the html,css and the js",
      "blue"
    );
    taskList.addTask("Shopping", "Buy new telephone", "orange");
  }

  function init() {
    initEventListeners();
    addDemoTasks();
    renderTasks();
  }

  init();
});
