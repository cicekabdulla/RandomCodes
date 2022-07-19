'use strict';

const tbody = document.querySelector('tbody');

tbody.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.classList.contains('delete')) {

        const tr = e.target.parentElement.parentElement.parentElement;
        tr.remove();
        // const name = e.target.parentElement.parentElement.parentElement.children[0].children[0].children[1].textContent
        const name = e.target.parentElement.parentElement.previousElementSibling.children[0].lastElementChild.textContent;
        deleteLS(name);
        status(name);

    }
})

function getLS() {
    let arr;

    if (localStorage.getItem('products') == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('products'));
    }

    return arr;
}

function toTable(value) {
    const tr = document.createElement('tr');
    tr.textContent = value;
    tr.innerHTML = `
    <td>
    <div>
        <img src=${value.img} alt="">
        <h4>${value.name}</h4>
    </div>
    </td>
    <td>
        <div>
            <span>${value.price}</span>
            <i class="fa-solid fa-xmark delete"></i>
        </div>
    </td> 
    `

    document.querySelector('tbody').appendChild(tr);
}

const data = getLS();
data.forEach(item => {
    toTable(item)
})

// function deleteLS(val) {
//     const arr = getLS();

//     const newArr = arr.filter(item => item.name !== val)

//     localStorage.setItem('products', JSON.stringify(newArr));

//     // console.log(arr);
//     // console.log(newArr);
//     // console.log(val);
// }


function deleteLS(value) {
    let arr = getLS();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == value) {
            arr.splice(i, 1)
        }
    }
    localStorage.setItem('products', JSON.stringify(arr));
}

// function status(title) {
//     document.querySelector('.status').style.display = 'block';
//     document.querySelector('.status h1').style.display='block';
//     document.querySelector('.status h1').textContent = title;

//     setTimeout(() => {
//         document.querySelector('.status').style.display = 'none'
//     }, 3000)
// }