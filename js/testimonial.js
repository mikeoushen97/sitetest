
let feedbacks = [
    {
        id: 1,
        author: "Авраам Айнуров",
        text: "С учётом сложившейся международной обстановки, повышение уровня гражданского сознания создаёт предпосылки для приоретизации разума над эмоциями. Не следует, однако, забывать, что повышение уровня гражданского сознания предопределяет высокую востребованность благоприятных перспектив. Каждый из нас понимает очевидную вещь: высококачественный прототип будущего проекта в значительной степени обусловливает важность благоприятных перспектив. Разнообразный и богатый опыт говорит нам, что глубокий уровень погружения играет важную роль в формировании благоприятных перспектив.",
        position: "Веб-дизайн"
    },
    {
        id: 2,
        author: "Мария",
        text: "С учётом сложившейся международной обстановки, повышение уровня гражданского сознания создаёт предпосылки для приоретизации разума над эмоциями. Не следует, однако, забывать, что повышение уровня гражданского сознания предопределяет высокую востребованность благоприятных перспектив.",
        position: "Фотосессия"
    },
    {
        id: 3,
        author: "Виктор",
        text: "Каждый из нас понимает очевидную вещь: высококачественный прототип будущего проекта в значительной степени обусловливает важность благоприятных перспектив. Разнообразный и богатый опыт говорит нам, что глубокий уровень погружения играет важную роль в формировании благоприятных перспектив.",
        position: "Брендинг"
    },
    {
        id: 3,
        author: "Дмитрий",
        text: "Каждый из нас  благоприятных перспектив. Разнообразный и богатый опыт говорит нам, что глубокий уровень погружения играет важную роль в формировании благоприятных перспектив.",
        position: "Веб-дизайн"
    },
    {
        id: 4,
        author: "Леонид",
        text: "Каждый из нас  благоприятных перспектив. Разнообразный и богатый опыт говорит нам, что глубокий уровень погружения играет важную роль в формировании благоприятных перспектив просто горы стоя бежать облака.",
        position: "Фотосессия"
    },
]

let buttonLeft = document.getElementById('slider-left');
let buttonRight = document.getElementById('slider-right');

const subsAuthor = feedbacks.map(person => {
    return person.author;
})
const subsText = feedbacks.map(person => {
    return person.text;
})
const subsPosition = feedbacks.map(person => {
    return person.position;
})


let id = 1
author = document.getElementsByClassName('testimonial__name'),
    text = document.getElementsByClassName('testimonial__text');
position = document.getElementsByClassName('testimonial__position');


function forward() {
    if (id < feedbacks.length) {
        author[0].innerText = subsAuthor[id],
            text[0].innerText = subsText[id],
            position[0].innerText = subsPosition[id],
            id = id + 1
        if (id === feedbacks.length) {
            id = id - 1
        }
    }
}
function backward() {
    author[0].innerText = subsAuthor[id],
        text[0].innerText = subsText[id],
        position[0].innerText = subsPosition[id],
        id = id - 1
    if (id === 0) {
        author[0].innerText = subsAuthor[id],
            text[0].innerText = subsText[id],
            position[0].innerText = subsPosition[id],
            id = 1
    }
}

buttonRight.onclick = forward
buttonLeft.onclick = backward
