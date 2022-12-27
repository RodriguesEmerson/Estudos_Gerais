var icon1=document.getElementById('icon-1')
icon1.addEventListener('mouseover', over1)
var abbr1 = document.querySelector('#res')
var b = document.querySelector(".b")

b.addEventListener('click', clicou)
/*const el = document. querySelector("#container")
el. addEventListener("click", (e) => {
const rect = e. target. getBoundingClientRect();
const x = e. clientX - rect. left;
const y = e. clientY - rect. top;
abbr1.innerHTML=("Esquerda: " + x + " - Topo: " + y);
})*/


function clicou(){
    abbr1.innerHTML="ola"
}