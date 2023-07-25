new Swiper('.slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    spaceBetween: 30,

    speed: 800,

    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        }
    }
});