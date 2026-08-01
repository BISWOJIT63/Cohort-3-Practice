let dashboard = document.querySelector(".dashboard");
let dashLink = document.querySelector("#dash-link");

function updateClock() {
  const now = new Date();
  const timeEl = document.getElementById("clockTime");
  const dateEl = document.getElementById("clockDate");
  let dashboard = document.querySelector(".dashboard");

  timeEl.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  dateEl.textContent = now.toLocaleDateString([], {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
updateClock();
setInterval(updateClock, 1000 * 30);

const quotes = [
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  {
    text: "Small daily improvements are the key to staggering long-term results.",
    author: "Unknown",
  },
  {
    text: "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln",
  },
];
document.getElementById("quoteRefreshBtn").addEventListener("click", () => {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.querySelector(".quote-text").innerHTML =
    `${q.text}<span class="author">— ${q.author}</span>`;
});

let theme = document.querySelector(".theme");
let sidebar = document.querySelector(".sidebar");
let input = document.querySelector("input");

let isDark = false;
theme.addEventListener("click", () => {
  isDark = !isDark;
  if (isDark) {
    theme.innerHTML = `<i class="ri-sun-fill ri-lg"></i>`;
  } else {
    theme.innerHTML = `<i class="fa-solid fa-moon fa-lg"></i>`;
  }
  document.body.classList.toggle("dark");
  sidebar.classList.toggle("dark");
  input.classList.toggle("dark");
  document.querySelector("h1").classList.toggle("dark");
  document.querySelector(".quote-text").classList.toggle("dark");
  document.querySelector(".todo-app").classList.toggle("dark");
  document.querySelector(".daily-goals").classList.toggle("dark");
  document.querySelector(".goal-delete").classList.toggle("dark");
  document.querySelector(".goal-item").classList.toggle("dark");
  document.querySelector(".goal-input").classList.toggle("dark");
});
let todoApp = document.querySelector(".todo-app");
todoApp.style.display = "none";
let todoCard = document.querySelector(".todo");
todoCard.addEventListener("click", () => {
  todoApp.style.display = "flex";
  dashboard.style.display = "none";
});
let todoForm = document.querySelector(".todo-add");
let todoLists = document.querySelector(".todo-lists");
let todoArr = JSON.parse(localStorage.getItem("todoArr")) || [];

let todoUi = () => {
  todoLists.innerHTML = "";

  todoArr.forEach((element) => {
    todoLists.innerHTML += `<div class="todo-list" data-id="${element.id}">
    <div class="left">
       <input
    class="important"
    type="checkbox"
    ${element.important ? "checked" : ""}>
        <h3 class="tt ${element.completed ? "completed" : ""}">
    ${element.task}
</h3>
      </div>
      <div class="right">
        <i class="fa-solid fa-check complete"></i>
        <i class="fa-solid fa-pen-to-square edit"></i>
        <i class="fa-regular fa-trash-can delete"></i>
      </div>
  </div>`;
  });
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let todoItem = {
    task: e.target[0].value,
    id: Date.now(),
    completed: false,
    important: false,
  };
  todoArr.push(todoItem);
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
  todoUi();
  todoForm.reset();
});
let todoInp = document.querySelector(".todo-inp");

todoLists.addEventListener("click", (e) => {
  let list = e.target.closest(".todo-list");
  if (!list) return;

  let tar = e.target;
  let id = Number(list.dataset.id);

  let curTodo = todoArr.find((elem) => elem.id === id);

  if (tar.classList.contains("important")) {
    curTodo.important = tar.checked;
  } else if (tar.classList.contains("complete")) {
    curTodo.completed = !curTodo.completed;
  } else if (tar.classList.contains("delete")) {
    todoArr = todoArr.filter((elem) => elem.id !== id);
  } else if (tar.classList.contains("edit")) {
    todoInp.value = curTodo.task;
    todoArr = todoArr.filter((elem) => elem.id !== id);
  }

  localStorage.setItem("todoArr", JSON.stringify(todoArr));
  todoUi();
});
todoUi();
//planner

let planner = document.querySelector(".planner");
planner.style.display = "none";
let plannerCard = document.querySelector(".planner-card");
plannerCard.addEventListener("click", () => {
  planner.style.display = "block";
  dashboard.style.display = "none";
});
let planForm = document.querySelector(".task-form");
let addPlan = document.querySelector(".plan-add-btn");
let planBg = document.querySelector(".plan-bg");
addPlan.addEventListener("click", () => {
  planForm.style.display = "block";
  planBg.style.display = "block";
});

let planArr = JSON.parse(localStorage.getItem("planArr")) || [];
function createTask({
  plan,
  planDescription,
  startTime,
  endTime,
  priority,
  color,
}) {
  const hourHeight = 80;

  let start = startTime.split(":").map(Number);
  let end = endTime.split(":").map(Number);

  let startHour = start[0];
  let startMin = start[1];

  let endHour = end[0];
  let endMin = end[1];

  let slot = document.querySelector(`[data-hour="${startHour}"]`);

  if (!slot) return;
  let task = document.createElement("div");

  task.className = `task ${color}`;

  task.innerHTML = `
        <h2>${plan}</h2>
        <h4>${planDescription}</h4>
        <p>${startTime} - ${endTime}</p>
    `;

  let duration = endHour * 60 + endMin - (startHour * 60 + startMin);

  task.style.top = `${(startMin / 60) * hourHeight}px`;
  task.style.height = `${(duration / 60) * hourHeight}px`;

  slot.append(task);
}
let addPlanUi = () => {
  document.querySelectorAll(".task").forEach((task) => task.remove());

  planArr.forEach((plan) => {
    createTask(plan);
  });
};
addPlanUi();
planForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let plan = e.target[0].value;
  let planDescription = e.target[1].value;
  let startTime = e.target[2].value;
  let endTime = e.target[3].value;
  let priority = e.target[4].value;
  let color = "";

  if (priority === "High Priority") {
    color = "orange";
  } else if (priority === "Medium Priority") {
    color = "green";
  } else {
    color = "purple";
  }
  let planOb = {
    plan,
    planDescription,
    startTime,
    endTime,
    priority,
    color,
  };
  planArr.push(planOb);
  localStorage.setItem("planArr", JSON.stringify(planArr));
  addPlanUi();
  planForm.style.display = "none";
  planBg.style.display = "none";
  planForm.reset();
});

let pomododoroSection = document.querySelector(".pomodoro-section");
pomododoroSection.style.display = "none";
let pTimerCard = document.querySelector(".p-timer");
pTimerCard.addEventListener("click", () => {
  pomododoroSection.style.display = "flex";
  dashboard.style.display = "none";
});
let timerContent = document.querySelector(".timer-content");
let play = document.querySelector(".play");
let isRunning = false;
let curTime = document.querySelector("#cur-time");
let curSit = document.querySelector("#cur-sit");
let time = {
  focus: 25 * 60,
  break: 5 * 60,
};
let totalSecond = time.focus;
let currentMode = "focus";
let interval = null;
let updateDisplay = () => {
  let min = Math.floor(totalSecond / 60);
  let sec = totalSecond % 60;
  let displayMin = min < 10 ? "0" + min : min;
  let displaySec = sec < 10 ? "0" + sec : sec;
  curTime.innerText = `${displayMin}:${displaySec}`;
  curSit.innerText = currentMode.toUpperCase();
};

updateDisplay();

let startTimer = () => {
  clearInterval(interval);
  interval = setInterval(() => {
    totalSecond--;
    if (totalSecond < 0) {
      if (currentMode === "focus") {
        currentMode = "break";
        totalSecond = time.break;
      } else {
        currentMode = "focus";
        totalSecond = time.focus;
      }
    }
    updateDisplay();
  }, 1000);
};

play.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    play.innerHTML = `<i class="ri-pause-fill play"></i>`;
    startTimer();
  } else {
    isRunning = false;
    play.innerHTML = `<i class="ri-play-fill play"></i>`;
    clearInterval(interval);
  }
});
let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  clearInterval(interval);
  time = {
    focus: 25 * 60,
    break: 5 * 60,
  };
  totalSecond = time.focus;
  currentMode = "focus";
  interval = null;
  play.innerHTML = `<i class="ri-play-fill play"></i>`;

  updateDisplay();
});

// daily goals section
let goalArr = JSON.parse(localStorage.getItem("goalArr")) || [];
let dailyGoals = document.querySelector(".daily-goals");
let goalsCard = document.querySelector(".goals");
goalsCard.addEventListener("click", () => {
  dailyGoals.style.display = "block";
  dashboard.style.display = "none";
});

let goalList = document.querySelector(".goal-list");
let updateGoal = () => {
  goalList.innerHTML = "";
  goalArr.forEach((elem) => {
    goalList.innerHTML += `<div class="goal-item" data-id="${elem.id}">

                    <button class="goal-check">
                        <i class="ri-checkbox-blank-circle-line"></i>
                    </button>

                    <p>${elem.goal}</p>

                    <button class="goal-delete">
                        <i class="ri-delete-bin-6-line"></i>
                    </button>

                </div>`;
  });
};
updateGoal();
goalList.addEventListener("click", (e) => {
  const item = e.target.closest(".goal-item");
  if (!item) return;

  const id = Number(item.dataset.id);

  console.log(id);

  if (e.target.closest(".goal-delete")) {
    goalArr = goalArr.filter((elem) => elem.id !== id);

    console.log(goalArr);

    localStorage.setItem("goalArr", JSON.stringify(goalArr));
    updateGoal();
  }
});

let goalForm = document.querySelector(".goal-form");
goalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let goal = e.target[0].value;
  let id = Date.now();
  let goalObj = {
    id,
    goal,
    important: false,
  };
  goalArr.push(goalObj);
  localStorage.setItem("goalArr", JSON.stringify(goalArr));
  updateGoal();
  goalForm.reset();
});
//last code
dashLink.addEventListener("click", () => {
  dashboard.style.display = "block";
  todoApp.style.display = "none";
  planner.style.display = "none";
  pomododoroSection.style.display = "none";
  dailyGoals.style.display = "none";
});
todoApp.style.display = "none";
planBg.style.display = "none";
planForm.style.display = "none";
dailyGoals.style.display = "none";
