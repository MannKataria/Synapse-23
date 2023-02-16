const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", ()=>{
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
    overlay.style.display = "block";
})
closeBtn.addEventListener("click", ()=>{
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    overlay.style.display = "none";
})