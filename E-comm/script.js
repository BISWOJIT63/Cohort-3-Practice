let create = document.querySelector("#create");
let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelector(".close-btn");
let form = document.querySelector("form");
let productGrid = document.querySelector(".product-grid");

create.addEventListener("click", () => {
  overlay.style.display = "flex";
});
let products = JSON.parse(localStorage.getItem("products")) || [];

//show all products card
let ui = () => {
  productGrid.innerHTML = "";

  products.forEach((elem) => {
    productGrid.innerHTML += `<div class="card">
                <img src="${elem.url}" alt="Product Title">
                <h3>${elem.productName}</h3>
                <p>${elem.description}</p>
                <div class="price">₹${elem.price}</div>
                <div class="card-actions">
                    <button type="button" onclick="edit('${elem.productName}')"  class="btn-edit">Edit</button>
                    <button type="button" onclick="remove('${elem.productName}')" class="btn-delete">Delete</button>
                </div>
            </div>`;
  });
};
ui();
let upadateIdx = null;
function edit(pn) {
  overlay.style.display = "flex";
  let productObj = products.find((elem) => elem.productName === pn);
  upadateIdx = products.findIndex((elem) => elem.productName === pn);
  form[0].value = productObj.productName;
  form[1].value = productObj.url;
  form[2].value = productObj.description;
  form[3].value = productObj.price;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let productName = event.target[0].value;
  let url = event.target[1].value;
  let description = event.target[2].value;
  let price = event.target[3].value;
  if (
    productName.trim() === "" ||
    description.trim() === "" ||
    url.trim() === "" ||
    price.trim() === ""
  ) {
    alert("Fill all details");
    return;
  }
  let obj = {
    productName,
    url,
    description,
    price,
  };

  if(upadateIdx !== null){
    products[upadateIdx] = obj;
    localStorage.setItem('products',JSON.stringify(products));
    upadateIdx = null;
  }else{
    products.push(obj);
    localStorage.setItem('products',JSON.stringify(products));
  }
  form.reset();
  ui();
  overlay.style.display = "none";
});
function remove(pn) {
  const index = products.findIndex((p) => p.productName === pn);

  if (index !== -1) {
    products.splice(index, 1);
  }
  localStorage.setItem("products",JSON.stringify(products))
  ui();
}
