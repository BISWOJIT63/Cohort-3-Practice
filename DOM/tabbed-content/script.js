let tabs = document.querySelector(".tabs");
const tabArray = [...tabs.children];
let panels = document.querySelector(".content");
let panelsArr = [...panels.children];

tabs.addEventListener("click", (e) => {
  let curTab = e.target;
  let tabName = curTab.dataset.tab;

  tabArray.forEach((tab) => {
    if (tab.classList.contains("active")) {
      tab.classList.remove("active");
    }
  });
  panelsArr.forEach((panel) => {
   panel.classList.remove("active");
   panel.style.display="none"
   if(panel.id === tabName){
    panel.classList.add("active");
    panel.style.display="block"
   }
  });
  curTab.classList.add("active");
});