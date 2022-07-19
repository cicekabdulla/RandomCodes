'use strict';

// 1ci variant
// const addToCart = document.querySelectorAll('.add__cart');

// addToCart.forEach(item => {
//     item.addEventListener('click', e => {
//         e.preventDefault();

//         const target = e.target.parentElement.parentElement;
//         const img = target.children[0].getAttribute('src');
//         const cardName = target.parentElement.children[1].textContent;
//         const price = target.parentElement.children[2].textContent;

//         const newProduct = {
//             img: img,
//             name: cardName,
//             price: price
//         }

//         setLS(newProduct);
//     })
// })

// 2ci variant
const addToCart = document.querySelectorAll('.add__cart'),
    cardItem = document.querySelectorAll('.card__item'),
    img = document.querySelectorAll('img'),
    cardName = document.querySelectorAll('.card__name'),
    span = document.querySelectorAll('span');

for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', e => {
        e.preventDefault();

        const newProduct = {
            img: img[i].getAttribute('src'),
            name: cardName[i].textContent,
            price: span[i].textContent
        }

        setLS(newProduct);

        statusMessage(newProduct.name);
    })
}


function getLS() {
    let arr;

    if (localStorage.getItem('products') == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('products'));
    }

    return arr;
}

function setLS(value) {
    let data = getLS();
    data.push(value);

    localStorage.setItem('products', JSON.stringify(data));
}

function statusMessage(title) {
    document.querySelector('.status__message').style.display = 'block';
    document.querySelector('.status__message').style.border = '2px dashed lightgray';
    document.querySelector('.status__message h1').style.display = 'block';
    document.querySelector('.status__message h1 span').textContent = title;
    document.querySelector('.status__message a').textContent = 'View Cart';
    document.querySelector('.status__message a').style.width = '120px';

    setTimeout(() => {
        document.querySelector('.status__message').style.display = 'none!important';
    }, 3000)
}

