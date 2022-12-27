
var duser=document.getElementById('dados-user')
function abrir(){
    if(duser.classList.contains('open')){
        duser.classList.remove('open')
    }else{
        duser.classList.add('open')
    }
}
var abbr1 = document.querySelector('.abbr1')
var icon1=document.getElementById('icon-1')
var icon2=document.getElementById('icon-2')
var icon3=document.getElementById('icon-3')

icon1.addEventListener('mouseover', over1)
icon1.addEventListener('mouseout', out)

icon2.addEventListener('mouseout', out)
icon2.addEventListener('mouseover', over2)

icon3.addEventListener('mouseout', out)
icon3.addEventListener('mouseover', over3)


var posi =1
var span =''
function over1(){
    posi =1
    span = 'Exemplo'
    over();
}
function over2(){
    posi =2
    span = 'Notificações'
    over();
}
function over3(){
    posi = 3
    span = 'Ajuda'
    over();
}
var type = abbr1

function over(){
    if(type.classList.contains('open')){
        
    }else {
        type.classList.add('open')
        type.innerHTML=`${span}`
        if(posi == 1){
            type.style.margin="45px 0 0 17px"
        }else if(posi == 2){
            type.style.margin="45px 0 0 41px"

        }else if (posi == 3){
            type.style.margin="45px 0 0 103px"
        }
    }
}

function out(){
    if(type.classList.contains('open')){
        type.classList.remove('open')
    }

}
var imgMenu = document.querySelector('#img-menu')
var showlink = document.querySelector('.show-nav')
var asidebar = document.querySelector('.aside-nav')

function show_nav(){
    if(showlink.classList.contains('open')){
        showlink.classList.remove('open')
        asidebar.style.margin=' 0 0 0 -150px'
        imgMenu.style.transform='rotate(0deg)'
    }else{
        showlink.classList.add('open')
        asidebar.style.margin='0'
        imgMenu.style.transform='rotate(180deg)'
    }
}

/*
var imgMenu = document.querySelector('#img-menu')
var showlink = document.querySelector('.menu')
var asidebar = document.querySelector('.aside-nav')

function show_nav(){
    if(showlink.classList.contains('open')){
        showlink.classList.remove('open')
        asidebar.style.margin=' 0 0 0 -150px'
        imgMenu.style.transform='rotate(0deg)'
    }else{
        showlink.classList.add('open')
        asidebar.style.margin='0'
        showlink.style.margin='15px 0 0 0px'
        imgMenu.style.transform='rotate(180deg)'
    }
}*/