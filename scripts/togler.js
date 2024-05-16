const button  = document.querySelector(".message");
const h1 = document.getElementById("message");

button.addEventListener("click", () => {
    
    h1.classList.toggle('togled');
    button.classList.toggle('togled');
    
})
