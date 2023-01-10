"use strict";

const burger = document.querySelectorAll('.burger')
const mobile = document.querySelectorAll('.adaptive-menu')

function menuActive(event) {
    if (event.target.closest('.burger')) {
        burger[0].classList.toggle('active')
        mobile[0].classList.toggle('menu-active')
        document.body.classList.toggle('overflow-off')
        setTimeout(() => { mobile[0].style.transform = ('translateX(0px)'); }, 200);
    }
    // if (!event.target.closest('.burger')) {
    //     burger[0].classList.remove('active');
    // }
}



document.addEventListener('click', menuActive);
