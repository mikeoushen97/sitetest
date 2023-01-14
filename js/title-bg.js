let slider = document.getElementsByClassName('slider-nums');
let bullet = document.querySelectorAll('.slider-nums > span');
let bg = document.getElementsByClassName('title');
let posTop = window.pageYOffset;
let intervalStart = true

slider[0].addEventListener('click', (event) => {
    if (event.target.classList.contains('bullet1')) {
        bg[0].style.background = 'url(/images/title-section/bg1.jpg) center no-repeat'
        bullet[0].classList.add('current')
        bullet[1].classList.remove('current')
        bullet[2].classList.remove('current');
    }
    if (event.target.classList.contains('bullet2')) {
        bg[0].style.background = 'url(/images/title-section/bg2.jpg) center no-repeat'
        bullet[1].classList.add('current')
        bullet[0].classList.remove('current')
        bullet[2].classList.remove('current');
    }
    if (event.target.classList.contains('bullet3')) {
        bg[0].style.background = 'url(/images/title-section/bg3.jpg) center no-repeat'
        bullet[2].classList.add('current')
        bullet[0].classList.remove('current')
        bullet[1].classList.remove('current');
    }
});

slider[0].onmouseover = () => { intervalStart = false };
slider[0].onmouseout = () => { intervalStart = true };

function autoSlides() {
    setInterval(() => {
        if (intervalStart) {
            setTimeout(() => {
                if (intervalStart) {
                    bg[0].style.background = 'url(/images/title-section/bg1.jpg) center no-repeat'
                    bullet[0].classList.add('current')
                    bullet[1].classList.remove('current')
                    bullet[2].classList.remove('current')
                }
            }, 2000);

            setTimeout(() => {
                if (intervalStart) {
                    bg[0].style.background = 'url(/images/title-section/bg2.jpg) center no-repeat'
                    bullet[1].classList.add('current')
                    bullet[0].classList.remove('current')
                    bullet[2].classList.remove('current')
                }
            }, 5500);

            setTimeout(() => {
                if (intervalStart) {
                    bg[0].style.background = 'url(/images/title-section/bg3.jpg) center no-repeat'
                    bullet[2].classList.add('current')
                    bullet[0].classList.remove('current')
                    bullet[1].classList.remove('current')
                }
            }, 8500);
        }
    }, 12000);
}


window.onload = autoSlides;

