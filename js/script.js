"use strict";

const burger = document.querySelectorAll('.burger');
const mobile = document.querySelectorAll('.header__menu');
const menuClick = document.querySelectorAll('.menu__link>a');

function menuActive(event) {
    if (event.target.closest('.burger')) {
        burger[0].classList.toggle('active')
        mobile[0].classList.toggle('menu-active')
        document.body.classList.toggle('overflow-off')
    }
}

function removeCls(event) {
    burger[0].classList.remove('active')
    mobile[0].classList.remove('menu-active')
    document.body.classList.remove('overflow-off')
}

for (let i = 0; i < menuClick.length; i++) {
    menuClick[i].addEventListener('click', removeCls);
}

document.addEventListener('click', menuActive);
