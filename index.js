let container = document.querySelector('.container')
let showAll = document.querySelector('#showAll')
let showFive = document.querySelector('#showFive')
let h1 = document.querySelector('h1')
let cart = []
let menu = document.querySelector('#menu')
let asside = document.querySelector('aside')
let ul_li = document.querySelector('.ul_li2')
let bg_menu = document.querySelector('.bg_menu')
let exitBtn = document.querySelector('.exit_btn')

menu.onclick = () => {
    if (asside.style.right === '0%') {
        asside.style.right = '-100%'
    } else {
        asside.style.right = '0%'
    }
}
exitBtn.onclick = () => {
    asside.style.right = '-100%'
}
showAll.onclick = () => {
    reload(arr)
}
showFive.onclick = () => {
    reload(arr.slice(0, 5))
}

reload(arr)

function reload(massiv) {
    container.innerHTML = ""
    for (let elem of massiv) {
        let article_box = document.createElement('div'),
            h2 = document.querySelector('h2'),
            article_grid = document.createElement('article'),
            div2_grid = document.createElement('div'),
            div2_grid_img = document.createElement('img'),
            div_p_sec2_grid = document.createElement('div'),
            article_box_h2 = document.createElement('h2'),
            article_box_p = document.createElement('p'),
            article_box_spans = document.createElement('div'),
            article_box_span1 = document.createElement('span'),
            article_box_span1_img = document.createElement('img'),
            article_box_span1_p = document.createElement('a'),
            article_box_span2 = document.createElement('span'),
            article_box_span2_img = document.createElement('img'),
            article_box_span2_p = document.createElement('a'),
            article_box_span3 = document.createElement('span'),
            article_box_span3_img = document.createElement('img'),
            article_box_span3_p = document.createElement('a'),
            article_box_btn = document.createElement('button');


        article_box.classList.add('article_box')
        article_grid.classList.add('article_grid')
        div2_grid.classList.add('div2_grid')
        div2_grid_img.classList.add('div2_gridimg')
        div_p_sec2_grid.classList.add('div_p_sec2_grid')
        article_box_p.classList.add('div_p_sec2_gridp')
        article_box_spans.classList.add('spans')
        article_box_span1.classList.add('span1')
        article_box_span2.classList.add('span2')
        article_box_span3.classList.add('span3')
        article_box_btn.classList.add('btn3')

        div2_grid_img.src = elem.image
        article_box_span1_img.src = './icons/count.svg'
        article_box_span2_img.src = './icons/dollar.svg'
        article_box_span3_img.src = './icons/rate.svg'
        article_box_span1_p.innerHTML = '109'
        article_box_span2_p.innerHTML = '3,9'
        article_box_span3_p.innerHTML = '120'
        article_box_btn.innerHTML = 'В избранное'
        article_box_h2.textContent = elem.title.length > 20 ? elem.title.slice(0, 17) + "..." : elem.title
        article_box_p.innerHTML = elem.description.length > 100 ? elem.description.slice(0, 100) + " <b>read</b>" : elem.description

        container.append(article_box)
        article_box.append(article_grid)
        article_grid.append(div2_grid)
        div2_grid.append(div2_grid_img)
        article_grid.append(div_p_sec2_grid)
        div_p_sec2_grid.append(article_box_h2)
        div_p_sec2_grid.append(article_box_p)
        div_p_sec2_grid.append(article_box_spans)
        article_box_spans.append(article_box_span1)
        article_box_span1.append(article_box_span1_img)
        article_box_span1.append(article_box_span1_p)
        article_box_spans.append(article_box_span2)
        article_box_span2.append(article_box_span2_img)
        article_box_span2.append(article_box_span2_p)
        article_box_spans.append(article_box_span3)
        article_box_span3.append(article_box_span3_img)
        article_box_span3.append(article_box_span3_p)
        div_p_sec2_grid.append(article_box_btn)

        // d
        article_box_btn.onclick = () => {

            if (cart.includes(elem.id)) {
                let idx = cart.indexOf(elem.id)
                cart.splice(idx, 1)
                article_box_btn.classList.remove('blue')
                article_box_btn.innerHTML = "В избранное"
                // document.querySelector('.shop').remove(article_box)
            } else {
                // document.querySelector('.shop').append(article_box)
                cart.push(elem.id)
                article_box_btn.classList.add('blue')
                article_box_btn.innerHTML = "Добавлено"
            }

            h1.innerHTML = `Ваша корзина, ${cart.length} товар`
            h2.innerHTML = `Ваша корзина, ${cart.length} товар`
        }


    }

}
let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let p = document.querySelector('.zero')

let count = 1
function calculator() {
    p.innerHTML = count;
}
plus.addEventListener('click', function () {
    count++;
    calculator()
});
minus.addEventListener('click', function () {

    if (p === 0) {
        count = 0
    } else {
       count--
    }
    calculator()
});

let btns = document.querySelector('.btns')
btns.onsubmit = (e) => {
    e.preventDefault()
    console.log('hello');

}