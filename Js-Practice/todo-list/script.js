let todoInput = document.querySelector("#todo-input");
let addBtn = document.querySelector("#add-btn");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", () => {
  let inpValue = todoInput.value.trim();
  if (inpValue !== "") {
    let li = document.createElement("li");
    li.className = "todo-item";

    li.innerHTML = `<label class="task-label">
                    <span class="task-text">${todoInput.value}</span>
                </label>
                <div id="mod-btn"><button class="edit-btn"><i class="ri-edit-line"></i></button>
                    <button class="delete-btn" id="task">×</button>
                </div>`;
    let deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
    let editBtn = li.querySelector(".edit-btn");
    let taskText = li.querySelector(".task-text");
    editBtn.addEventListener("click", () => {
      todoInput.value = taskText.textContent;
      li.remove();
    });
    ul.append(li);
    todoInput.value = "";
  }
});
