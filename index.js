const swiper = new Swiper('.swiper', {
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    spaceBetween: -60,
})

const swiperWrapper = document.querySelector('.swiper-wrapper');
const button = document.querySelector('.main-repair__button');
const buttonText = document.querySelector('.main-repair__button-text')

button.addEventListener('click', function () {
    if (swiperWrapper.classList.contains('main-repair__swiper--overflow--hidden')) {
        swiperWrapper.classList.remove('main-repair__swiper--overflow--hidden')
        buttonText.textContent = 'Скрыть'
    } else {
        swiperWrapper.classList.add('main-repair__swiper--overflow--hidden')
        buttonText.textContent = 'Показать все'
    }
})

if (this.window.innerWidth > 767) {
    swiper.destroy();
} 
