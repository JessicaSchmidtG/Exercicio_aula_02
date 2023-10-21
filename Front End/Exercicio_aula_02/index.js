let botao = document.getElementById("on");
let container = document.querySelector(".container");
let body = document.querySelector("#body");


botao.addEventListener("click",() =>{
    container.classList.toggle("noturno");
    body.classList.toggle("noturno")
 });