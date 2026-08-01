let form = document.querySelector("form");
let taskCards = document.querySelector(".task-container");
let body = document.body;
let themeBtn = document.querySelector(".theme-btn");
let input = document.querySelector("input");
let category = document.querySelector(".category");
const lsd ;
let ui = (inp, cat) => {
  let taskCard = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = `${inp}`;

  let p = document.createElement("p");
  p.textContent = `${cat}`;
  let editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.setAttribute("data-edit", "edit");
  let completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.setAttribute("data-complete", "complete");

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.setAttribute("data-delete", "delete");

  let editIcon = document.createElement("i");
  editIcon.classList.add("ri-edit-line");
  let completeIcon = document.createElement("i");
  completeIcon.classList.add("ri-check-line");
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("ri-delete-bin-line");
  editBtn.append(editIcon);
  completeBtn.append(completeIcon);
  deleteBtn.append(deleteIcon);

  taskCard.classList.add("task-card");
  let action = document.createElement("div");
  action.classList.add("actions");
  action.append(editBtn);
  action.append(completeBtn);
  action.append(deleteBtn);

  taskCard.append(h3);
  taskCard.append(p);
  taskCard.append(action);
  taskCards.append(taskCard);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let inp = event.target[0].value;
  let cat = event.target[1].value;
  if (inp.trim() === "") {
    alert("please fill the details");
    return;
  }
  ui(inp,cat);
  form.reset();
});

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

taskCards.addEventListener("click", (e) => {
  let curBtn = e.target.closest("button");
  const card = curBtn.closest(".task-card");
  let h3 = card.querySelector("h3");
  let p = card.querySelector("p");
  if (curBtn.dataset.edit === "edit") {
    input.value = h3.textContent;
    category.value = p.textContent;
    taskCards.removeChild(card);
  }
  if (curBtn.dataset.complete === "complete") {
    card.classList.add("completed");
  }
  if (curBtn.dataset.delete === "delete") {
    taskCards.removeChild(card);
  }
});
