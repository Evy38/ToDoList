let iconAdd = document.querySelector(".add-task");

iconAdd.innerHTML = "&#x2b;";

document.addEventListener("DOMContentLoaded", function () {
  const addTaskButton = document.querySelector(".add-task");
  const modal = document.getElementById("task-modal");
  const closeModal = document.querySelector(".close-modal");
  const taskForm = document.getElementById("task-form");

  addTaskButton.addEventListener("click", function () {
    modal.style.display = "block";
    document.getElementById("task-title").focus();
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    taskForm.reset();
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      taskForm.reset();
    }
  });

  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Formulaire soumis - À implémenter");

    modal.style.display = "none";
    taskForm.reset();
  });
});
