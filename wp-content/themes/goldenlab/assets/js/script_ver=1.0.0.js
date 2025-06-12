// Aos init

window.onload = function () { // можно также использовать window.addEventListener('load', (event) => {
    AOS.init();
};

// Burger
const btnMenu = document.querySelector('#toggle');
let btnMenuClose = document.querySelector('.btn-close');
const menu = document.querySelector('.intro__nav');
const bodyEl = document.querySelector('body');

const menuLine1 = document.querySelector('.top-bun');
const menuLine2 = document.querySelector('.meat');
const menuLine3 = document.querySelector('.bottom-bun');

const toggleMenu = function () {
    menu.classList.toggle('open');
}
const toggleBurger = function () {
    btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
    bodyEl.classList.toggle('hidden');
}

const toggleMenuLine = function () {
    menuLine1.classList.toggle('active');
    menuLine2.classList.toggle('active');
    menuLine3.classList.toggle('active');
}

btnMenu?.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
    toggleBurger();
    bodyOverflow();
    toggleMenuLine();
});
btnMenuClose.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
    toggleBurger();
    bodyOverflow();
    toggleMenuLine();
});

// close menu in Landing page
$(document).on("click", ".intro__nav-list li a", function (e) {
    $('.intro__nav').removeClass('open');
    $('body').removeClass('hidden');
    // $('#nav-icon3').removeClass('open');
});

// Инициализация слайдера steps-slider
const stepsSlider = document.querySelector('.steps__slider');
var mySwiperSteps = new Swiper(stepsSlider, {
    slidesPerView: 4,
    spaceBetween: 25,
    speed: 600,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
    },
});

// Инициализация слайдера reviews-slider
const reviewsSlider = document.querySelector('.reviews__slider');
var mySwiperReviews = new Swiper(reviewsSlider, {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: false,
    autoplay: {
        delay: 4000,
    },
    speed: 600,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 8,
            loop: true,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
    },
});

// Инициализация слайдера projects-slider
document.querySelectorAll('.projects__slider').forEach(n => {
    const projectsSlider = new Swiper(n, {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 800,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 22,
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1250: {
                slidesPerView: 4,
            },
        },
    });
});

$(function () {
    $("#tabs").tabs();
});

$('.projects__slide-head-city').matchHeight();

let quizBtnPrev = document.querySelector('.quiz__btn_prev');
let quizBtnNext = document.querySelector('.quiz__btn_next');
let quizBtnSubmit = document.querySelector('.quiz__btn_send');
let quizContentAll = document.querySelectorAll('.quiz-content');
let quizContent_1 = document.querySelector('#quiz-content-1');
let quizContent_2 = document.querySelector('#quiz-content-2');
let quizContent_3 = document.querySelector('#quiz-content-3');
let quizContent_4 = document.querySelector('#quiz-content-4');
let quizContent_5 = document.querySelector('#quiz-content-5');
let quizContent_6 = document.querySelector('#quiz-content-6');

quizBtnNext.classList.add('active');

const resetContent = function () {
    quizContentAll.forEach(el => {
        el.classList.remove('active');
    });
}
quizBtnNext.addEventListener('click', () => {

    // Actions next-steps
    let quizContentActive = document.querySelector('.quiz-content.active');
    if (quizContentActive.nextElementSibling) {
        let quizContentNext = quizContentActive.nextElementSibling;
        resetContent();
        quizContentNext.classList.add('active');
    }

    let quicNavActive = document.querySelector('.quiz__nav-item.active');
    if (quicNavActive.nextElementSibling) {
        let quizNavNext = quicNavActive.nextElementSibling;
        quicNavActive.classList.remove('active');
        quicNavActive.classList.add('success');
        quizNavNext.classList.add('active');
    } else {
        quizBtnSubmit.classList.add('active');
    }
    // btnPrevShow
    let quizContentActiveAfterAction = document.querySelector('.quiz-content.active');
    if (quizContentActiveAfterAction.previousElementSibling) {
        quizBtnPrev.classList.add('active');
    }
    if (!(quizContentActiveAfterAction.nextElementSibling)) {
        quizBtnNext.classList.remove('active');
        quizBtnSubmit.classList.add('active');
    }

});

quizBtnPrev.addEventListener('click', () => {
    if (quizBtnSubmit.classList.contains('active')) {
        quizBtnSubmit.classList.remove('active');
        quizBtnNext.classList.add('active');
    }

    // Actions prev-steps
    let quizContentActive = document.querySelector('.quiz-content.active');
    if (quizContentActive.previousElementSibling) {
        let quizContentPrev = quizContentActive.previousElementSibling;
        resetContent();
        quizContentPrev.classList.add('active');
    }

    let quicNavActive = document.querySelector('.quiz__nav-item.active');
    if (quicNavActive.previousElementSibling) {
        let quizNavPrev = quicNavActive.previousElementSibling;
        quicNavActive.classList.remove('active');
        quizNavPrev.classList.remove('success');
        quizNavPrev.classList.add('active');
    }
    //    btnPrevHide
    let quizContentActiveAfterAction = document.querySelector('.quiz-content.active');
    if (!(quizContentActiveAfterAction.previousElementSibling)) {
        quizBtnPrev.classList.remove('active');
    }


});












