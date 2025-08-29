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
new Swiper('.swiper', {
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
})

/*

const sliderBlock = document.querySelector('.works-slider > div')
const countBlock = document.querySelector('.count-slider')
let slide = 0
let count = 0
let offset = 0
let box = true
let gap = parseInt(window.getComputedStyle(sliderBlock).gap)
    if(isNaN(gap)) {
        gap = 0
    }
let lengthSlider = sliderBlock.children.length - 1
let sliderPaused = false; 
document.addEventListener('visibilitychange', () => { sliderPaused = document.hidden; });*/



/* РУЧНЕ ЗАФАРБОВУВАННЯ КЛАСІВ */
/*const handClass = (ObjWithHtmlElCount, interval) => {
    Array.from(ObjWithHtmlElCount.children).forEach((el, index) => {
        el.addEventListener('click', () => {
            if(index > slide) {
                box = false
                count = index
                handClone(index, slide)
                slide = index + 1
                autoClass(ObjWithHtmlElCount, index)
                autoSlider(sliderBlock, 0.2, index)
            } else {
                slide = index
                count = index
                autoClass(ObjWithHtmlElCount, count)
                autoSlider(sliderBlock, 0.2, slide)
                if(sliderBlock.children.length >= lengthSlider) {
                    for(let i = sliderBlock.children.length - 1; i > lengthSlider + index; i--) {
                        sliderBlock.children[i].remove()
                    }
                }
            }
            

            setTimeout(()=>{
                box = true
            }, interval)
        })
    })
    
}*/
/* РУЧНЕ ЗАФАРБОВУВАННЯ КЛАСІВ */

/*АВТОМИТИЧНЕ ЗАФАРБОВУВАННЯ ПЕРЕМИКАЧІВ*/
/*const autoClass = (ObjWithHtmlElCount, index) => {
    if(index >= ObjWithHtmlElCount.children.length) {
        count = 0
        index = count
    }
    Array.from(ObjWithHtmlElCount.children).forEach(el => {
        el.classList.remove('active')
    })
    ObjWithHtmlElCount.children[index].classList.add('active')
}*/
/*АВТОМИТИЧНЕ ЗАФАРБОВУВАННЯ ПЕРЕМИКАЧІВ*/

/*Автоматичне перемикання слайдів*/
/*const autoSlider = (ObjWithHtmlElSlider, animationTime, index) => {
    let itemWidth = ObjWithHtmlElSlider.children[index].getBoundingClientRect().width
    offset = -(itemWidth + gap) * (index)
    ObjWithHtmlElSlider.style.transition = `transform ${animationTime}s ease-in-out`
    ObjWithHtmlElSlider.style.transform = `translateX(${offset}px)`
}*/
/*Автоматичне перемикання слайдів*/


/* АВТОМАТИЧНЕ ВИДАЛЕННЯ СЛАЙДІВ */

/*const andSlider = (ObjWithHtmlElSlider) => {
    const listener = () => {
        for(let i = 0; i <= lengthSlider; i++){
            ObjWithHtmlElSlider.children[0].remove()
        }
        ObjWithHtmlElSlider.style.transition = 'transform 0s ease-in-out'
        ObjWithHtmlElSlider.style.transform = `translateX(0px)`
        slide = 0

        ObjWithHtmlElSlider.removeEventListener('transitionend', listener)
    }
    ObjWithHtmlElSlider.addEventListener('transitionend', listener)
}*/
/* АВТОМАТИЧНЕ ВИДАЛЕННЯ СЛАЙДІВ */
/*const handClone = (index, slide) => {
    for(slide; slide <= index; slide++){
        const itemSlider = sliderBlock.children[slide].cloneNode(true)
        sliderBlock.append(itemSlider)
    }
}*/



/*
const autoAndHandSlide = (sliderBlock, countBlock, interval, animationTime) => {
    if (sliderPaused || !box) return;
    interval = interval * 1000
    handClass(countBlock, interval)
    setInterval(() => {
    if(box) {
            const itemSlider = sliderBlock.children[slide].cloneNode(true)
            sliderBlock.append(itemSlider)
            slide++
            count++
            autoSlider(sliderBlock, animationTime, slide)
            autoClass(countBlock, count)
            if(slide > lengthSlider) {
                andSlider(sliderBlock)
            } 
        }  
    }, interval) 
}
autoAndHandSlide(sliderBlock, countBlock, 5, 1)*/


