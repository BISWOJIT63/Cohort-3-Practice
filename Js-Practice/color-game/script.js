let dis = document.querySelector(".dis");
let main = document.querySelector("main");
let box = document.querySelector(".box");
let btn = document.querySelector("button");
let time = document.querySelector("#timer");
let sc = document.querySelector("#score");
let overlay = document.querySelector("#overlay")
let fScore = document.querySelector("#fscore")
let randomBox = () => {
  let minH = main.clientHeight - box.offsetHeight;
  let minW = main.clientWidth - box.offsetWidth;
  let x = Math.random() * minH;
  let y = Math.random() * minW;
  box.style.top = `${x}px`;
  box.style.left = `${y}px`;
};
let score = 0;
let timer = 0;
let interval;
btn.addEventListener("click", () => {
  clearInterval(interval);
  timer = 0;
  score = 0;
  time.textContent = timer;
  sc.textContent = score;
  box.style.pointerEvents = "auto";
  randomBox();
  interval = setInterval(() => {
    timer += 1;
    time.textContent = `${timer}`;
    randomBox();
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    box.style.pointerEvents = "none";
    overlay.style.display="flex";
    fScore.textContent = `${score}`;
  }, 10000);
});

box.addEventListener("click", () => {
  score += 1;
  sc.textContent = `${score}`;
  randomBox();
});
