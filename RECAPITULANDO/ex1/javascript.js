let btn_more = document.querySelector('#btn-more-ol')

btn_more.addEventListener('mouseover', fnx)
btn_more.addEventListener('mouseout', getout);

function fnx(){
    btn_more.style.backgroundColor = 'black';
}
function getout(){
    btn_more.style.backgroundColor= 'white';
}