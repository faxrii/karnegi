let menuIco=document.querySelector('.menu-ico');
let barMenu=document.querySelector('.bar-menu');
let closeIco=document.querySelector('.close');
menuIco.onclick=function(){
    barMenu.classList.add('activeMenu')
}
closeIco.onclick=function(){
    barMenu.classList.remove('activeMenu')
}



let phoneIco=document.querySelector('.phone-ico');
let phoneMenu=document.querySelector('.phone-menu');
let closePhoneIco=document.querySelector('.closePhone');
phoneIco.onclick=function(){
    phoneMenu.classList.add('activeMenu')
}
closePhoneIco.onclick=function(){
    phoneMenu.classList.remove('activeMenu')
}
