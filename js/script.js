let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click',()=> {
    container.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    container.classList.remove('active');
});


function changeBg(){
    var header = document.getElementById('header')
    var scrollValue = window.scrollY;

    if(scrollValue < 150){
        header.classList.remove('bgColor');
    } else {
        header.classList.add('bgColor');
    }
}

window.addEventListener('scroll',changeBg);

let head = document.querySelector('.head .navbar');




