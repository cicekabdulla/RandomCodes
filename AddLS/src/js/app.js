'use strict';

const addToCart = document.querySelectorAll('.add__cart'),
    img = document.querySelector('img'),
    cardName = document.querySelector('.card__name').textContent,
    span = document.querySelector('span').innerText


const newProduct = {
    image: img,
    name: cardName,
    price: span
}

for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', () => {
   setLS(newProduct);

        toTable(newProduct);
    })
}
// addToCart.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         console.log(e.target);
//         console.log(cardName);

     
//     })
// })


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
