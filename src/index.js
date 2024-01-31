document.addEventListener("DOMContentLoaded", () => {
  const addTask = document.querySelector(".add-task-button");
  const closeTask = document.querySelector(".close-task");
  const modalContainer = document.querySelector(".modal-container");

  addTask.addEventListener("click", () => {
    modalContainer.classList.add("show");
  });

  closeTask.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });
});
