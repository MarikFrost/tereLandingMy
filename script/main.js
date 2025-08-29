const burger = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.wrap-navigation')
/**************************Бургер ********************/
document.addEventListener('click', (event) => {
    if(event.target.closest('.burger-menu') === burger) {
        burger.classList.toggle('rotate')
        mobileMenu.classList.toggle('visible')

        const smallBurger = () => {
            burger.classList.remove('rotate')
            burger.removeEventListener('transitionend', smallBurger)
        }
        burger.addEventListener('transitionend', smallBurger)

    } else if (!event.target.closest('.wrap-navigation')) {
        burger.classList.remove('rotate')
        mobileMenu.classList.remove('visible')
    }
})

/***************************Тень на кнопке *****************/
let helpButton = document.querySelector('.wrap-navigation > a')

helpButton.addEventListener('pointerdown', () => {
    helpButton.classList.add('button')
})
helpButton.addEventListener('pointerup', () => {
    helpButton.classList.remove('button')
})
helpButton.addEventListener('pointerleave', () => {
        helpButton.classList.remove('button')
    })
/********************Кнопки завантаження *************** */
let download = document.querySelectorAll('.download-block> a')

download.forEach(el => {
    el.addEventListener('pointerdown', () => {
        el.classList.add('download-block-shadow')
    })
    el.addEventListener('pointerup', () => {
        el.classList.remove('download-block-shadow')
    })
    el.addEventListener('pointerleave', () => {
        el.classList.remove('download-block-shadow')
    })
})

/******************APPLY TO DRIVE****************/
const applyToDrive = document.querySelector('.applyToDrive input')
const applyTobutton = document.querySelector('.applyToDrive button')

applyToDrive.addEventListener('input', () => {
    if(applyToDrive.value.length !== 0) {
        applyTobutton.style.backgroundColor = '#000000'
        applyTobutton.style.cursor = 'pointer'
        applyTobutton.disabled = false;
    } else {
        applyTobutton.style.cursor = 'not-allowed'
        applyTobutton.style.backgroundColor = 'rgb(169 169 169)'
        applyTobutton.disabled = true;
    }
})


/***********************СЛАЙДЕР**************************** */
const newSwiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    simulateTouch: true,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false, 
    },
    speed: 1000,
});
newSwiper.on('sliderMove', () => {
    newSwiper.params.speed = 200; // швидка анімація для свайпу
})

newSwiper.on('transitionEnd', () => {
    newSwiper.params.speed = 1000; // повертаємо назад для autoplay
})
