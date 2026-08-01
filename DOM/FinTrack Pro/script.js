let loginForm = document.querySelector(".login-box");
let loginScreen = document.querySelector(".login-screen");
let mainApp = document.querySelector(".container");
let profileMenu = document.querySelector(".profile-menu");
let profileIconMain = document.querySelector(".main-profile-icon");

let totalBal = 0;
let totalInc = 0;
let totalExp = 0;
let totalTrans = 0;

let tableArray = [
  {
    id: 1,
    description: "Salary",
    amount: 30000,
    date: "2026-07-21",
    type: "Income",
    why: "Monthly Salary",
  },
  {
    id: 2,
    description: "food",
    amount: 1500,
    date: "2026-07-21",
    type: "Expense",
    why: "chowmin",
  },
];
let expenseArray = [
  {
    id: 2,
    description: "food",
    amount: 1500,
    date: "2026-07-21",
    type: "Expense",
    why: "chowmin",
  },
];
let incomeArray = [
  {
    id: 1,
    description: "Salary",
    amount: 30000,
    date: "2026-07-21",
    type: "Income",
    why: "Monthly Salary",
  },
];
tableArray.forEach(item => {
    if (item.type === "Income") {
        totalBal += item.amount;
        totalInc += item.amount;
    } else {
        totalBal -= item.amount;
        totalExp += item.amount;
    }
});

totalTrans = tableArray.length;

let profileIcon = document.querySelector(".profile-icon");
let profileName = document.querySelector(".profile-name");
let setProfileIcon = (userName) => {
  mainApp.style.display = "block";
  profileName.innerText = userName;
  profileIcon.innerText = userName.charAt(0).toUpperCase();
};
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = e.target[0].value;
  let password = e.target[1].value;
  if (userName.trim() == "" || password.trim() == "") {
    alert("Plese fill the details");
    return;
  }
  loginScreen.style.display = "none";
  setProfileIcon(userName);
  loginForm.reset();
});

let logoutBtn = document.querySelector(".logout-btn");
logoutBtn.addEventListener("click", () => {
  loginScreen.style.display = "flex";
  mainApp.style.display = "none";
  profileName.innerText = "";
  profileIcon.innerText = "";
  profileMenu.classList.remove("show");

});

let tableBody = document.querySelector("tbody");
let updateTable = (arr) => {
  tableBody.innerHTML = "";
  arr.forEach((elem, idx) => {
    tableBody.innerHTML += `
<tr>
    <td>${elem.type}</td>
    <td>${elem.why}</td>
    <td>${new Date(elem.date).toLocaleDateString()}</td>

    ${
      elem.type === "Income"
        ? `<td class="green">+₹${elem.amount}</td>`
        : `<td class="red">-₹${elem.amount}</td>`
    }

    <td><button onClick="deleteFn(${elem.id})" class="delete">Delete</button></td>
</tr>
`;
  });
};
let incBtn = document.querySelector("#income-btn");
let expBtn = document.querySelector("#expence-btn");
let allBtn = document.querySelector("#all-btn");
let curFillter = "all";
incBtn.addEventListener("click", () => {
  console.log(incomeArray);
  filter("income");
});
expBtn.addEventListener("click", () => {
  console.log(expenseArray);
  filter("expense");
});
allBtn.addEventListener("click", () => {
  filter("all");
});
let filter = (btn) => {
  console.log(btn);
  curFillter = btn;
  if (btn === "income") {
    updateTable(incomeArray);
  } else if (btn === "expense") {
    updateTable(expenseArray);
  } else {
    updateTable(tableArray);
  }
};

function deleteFn(id) {
  const transaction = tableArray.find(item => item.id === id);

  if (transaction.type === "Income") {
    totalBal -= transaction.amount;
    totalInc -= transaction.amount;
  } else {
    totalBal += transaction.amount;
    totalExp -= transaction.amount;
  }

  totalTrans--;

  tableArray = tableArray.filter(item => item.id !== id);
  incomeArray = incomeArray.filter(item => item.id !== id);
  expenseArray = expenseArray.filter(item => item.id !== id);

  finance();

  if (curFillter === "income") {
    updateTable(incomeArray);
  } else if (curFillter === "expense") {
    updateTable(expenseArray);
  } else {
    updateTable(tableArray);
  }
  updateChart();
}
let transactionForm = document.querySelector(".popup");
let transactionScreen = document.querySelector(".modal");
let addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", () => {
  transactionScreen.style.display = "flex";
});
let cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
  transactionScreen.style.display = "none";
});


let finance = () => {
  let balance = document.querySelector("#balance");
  let income = document.querySelector("#income");
  let expense = document.querySelector("#expences");
  let transactions = document.querySelector("#transactions");

  balance.textContent = `₹${totalBal.toFixed(2)}`;
  income.textContent = `₹${totalInc.toFixed(2)}`;
  expense.textContent = `₹${totalExp.toFixed(2)}`;
  transactions.textContent = totalTrans;
};

finance();

transactionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let description = e.target[0].value;
  let amount = Number(e.target[1].value);
  let date = e.target[2].value;
  let type = e.target[3].value;
  let why = e.target[4].value;
  let obj = {
    id: Date.now(),
    description,
    amount,
    date,
    type,
    why,
  };
  if (type === "Income") {
    totalBal += amount;
    totalInc += amount;
    incomeArray.push(obj);
  } else {
    totalBal -= amount;
    totalExp += amount;
    expenseArray.push(obj);
  }
  totalTrans += 1;
  tableArray.push(obj);
  finance();
  updateTable(tableArray);
  transactionScreen.style.display = "none";
  transactionForm.reset();
  updateChart();
});
updateTable(tableArray);

let toggle = document.querySelector(".toggle");
let isDark = false;
toggle.addEventListener("click", () => {
  isDark = !isDark;
  console.log(isDark);
  if (isDark) {
    toggle.innerHTML = `<i class="ri-sun-fill"></i`;
  } else {
    toggle.innerHTML = `<i class="ri-moon-fill"></i`;
  }
   document.body.classList.toggle("dark");
});

let reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  if (confirm("Are you sure?")) {
    totalBal = 0;
    totalInc = 0;
    totalExp = 0;
    totalTrans = 0;
    tableArray = [];
    incomeArray = [];
    expenseArray = [];
    finance();
    updateTable(tableArray);
  } else {
    return;
  }
  updateChart();
});
let setSec = document.querySelector(".set-sec");
let setBtn = document.querySelector(".set-btn");
setBtn.addEventListener("click", () => {
  setSec.style.display = "flex";
});
let close = document.querySelector(".close");
close.addEventListener("click", () => {
  setSec.style.display = "none";
});
profileIconMain.addEventListener("click", () => {
  profileMenu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!profileMenu.contains(e.target) && !profileIconMain.contains(e.target)) {
    profileMenu.classList.remove("show");
  }
});
let dashboard = document.querySelector(".dashb");
dashboard.addEventListener("click",()=>{
    profileMenu.classList.toggle("show");
})
const ctx = document.getElementById("cashFlowChart");
let totalIncome = tableArray.reduce((sum, item) => {
  return item.type === "Income" ? sum + item.amount : sum;
}, 0);

let totalExpense = tableArray.reduce((sum, item) => {
  return item.type === "Expense" ? sum + item.amount : sum;
}, 0);
const chart = new Chart(ctx,{
    type:"bar",
    data:{
        labels:["Cash Flow"],
        datasets:[
            {
                label:"Income",
                data:[0],
                backgroundColor:"#176c2d"
            },
            {
                label:"Expenses",
                data:[0],
                backgroundColor:"#a61d1d"
            }
        ]
    },
    options:{
        responsive:true,
        maintainAspectRatio:false
    }
});
function updateChart() {

    let income = 0;
    let expense = 0;

    tableArray.forEach((item) => {
        if (item.type === "Income") {
            income += Number(item.amount);
        } else {
            expense += Number(item.amount);
        }
    });

    chart.data.datasets[0].data = [income];
    chart.data.datasets[1].data = [expense];

    chart.update();
}
updateChart();