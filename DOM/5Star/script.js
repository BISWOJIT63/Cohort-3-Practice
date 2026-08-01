let rating = document.querySelector(".rating");
let stars = [...rating.children]

rating.addEventListener("click",(e)=>{
    let i = e.target.id;
    stars.forEach((star,idx)=>{
        if(idx <= i){
            star.style.color="black"
        }
    })
})