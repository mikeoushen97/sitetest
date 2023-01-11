"use strict";

const burger = document.querySelectorAll('.burger');
const mobile = document.querySelectorAll('.adaptive-menu');
const menuClick = document.querySelectorAll('.adaptive-menu__link>a');

function menuActive(event) {
    if (event.target.closest('.burger')) {
        burger[0].classList.toggle('active')
        mobile[0].classList.toggle('menu-active')
        document.body.classList.toggle('overflow-off')
        setTimeout(() => { mobile[0].style.transform = ('translateX(0px)'); }, 200);
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

