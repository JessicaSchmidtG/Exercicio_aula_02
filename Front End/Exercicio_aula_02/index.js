let botao = document.getElementById("noturno");
let container = document.querySelector('.container');
let tabela = document.querySelector('.tabela');

botao.addEventListener("click",() =>{
    container.classList.toggle("noturno");
    tabela.classList.toggle("tabelaNot")
 });