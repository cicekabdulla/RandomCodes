'use strict';

$('.bar').click(function () {
    ($(".bar-open").slideToggle());
});

$('.close').click(function () {
    ($('.bar-open').slideToggle());
});

$('.nav_i').click(function () {
    ($('.sec_ul').slideToggle());
});

const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach(a => {
    a.addEventListener('click', b => {
        const next = b.target.nextElementSibling;
        next.classList.toggle('toggle');
        next.style.zIndex = index++;
    })
})
option.forEach(a => {
    a.addEventListener('click', b => {
        b.target.parentElement.classList.remove('toggle');
        const parent = b.target.closest('.select').children[0];
        parent.setAttribute('data-type', b.target.getAttribute('data-type'));
        parent.innerText = b.target.innerText;
    })
})



$('.carousel_sirket').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        400: {
            items: 2,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        900: {
            items: 5,
            nav: true,

        },
        1200: {
            items: 6,
            nav: true
        }
    }
})

$('.carousel_blog').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,

        },

        500: {
            items: 2,

        },
        900: {
            items: 3,


        },
        1200: {
            items: 3,

        }
    }
})


$('.stat-number').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });
});