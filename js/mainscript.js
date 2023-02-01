const arrowLeft = document.querySelector('#arrowLeft')
const arrowRight = document.querySelector('#arrowRight')
const slides = document.querySelectorAll('.welcome__slides')
const slidesCount = document.querySelectorAll('.welcome__slides').length

let activeSlideIndex = 0

arrowLeft.addEventListener('click', () => {
	SlideScroll('left')
})
arrowRight.addEventListener('click', () => {
	SlideScroll('right')
})


function SlideScroll(event) {
	if (event === 'right') {
		activeSlideIndex++
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0
		}
	} else if (event === 'left') {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1
		}
	}

	width = slides[activeSlideIndex].clientWidth

	slides.forEach(slide => {
		slide.style.transform = `translateX(-${activeSlideIndex * width}px)`
	})
}

setInterval(() => SlideScroll('right'), 5000)






const drop = document.querySelector('#drop')
const list = document.querySelector('#list')


drop.addEventListener('click', () => {
	drop.classList.toggle('active')
	list.classList.toggle('active')
})




const arrowLeft1 = document.querySelector('#arrowLeft1')
const arrowRight1 = document.querySelector('#arrowRight1')
const slides1 = document.querySelectorAll('.cakes__slides')
const slidesCount1 = document.querySelectorAll('.cakes__slides').length

let activeSlideIndex1 = 0

arrowLeft1.addEventListener('click', () => {
	SlideScroll1('left')
})
arrowRight1.addEventListener('click', () => {
	SlideScroll1('right')
})


function SlideScroll1(event) {
	if (event === 'right') {
		activeSlideIndex1++
		if (activeSlideIndex1 === slidesCount1) {
			activeSlideIndex1 = 0
		}
	} else if (event === 'left') {
		activeSlideIndex1--
		if (activeSlideIndex1 < 0) {
			activeSlideIndex1 = slidesCount1 - 1
		}
	}

	width = slides1[activeSlideIndex1].clientWidth

	slides1.forEach(slide => {
		slide.style.transform = `translateX(-${activeSlideIndex1 * width}px)`
	})
}


setInterval(() => SlideScroll1('right'), 5000)



const arrowLeft2 = document.querySelector('#arrowLeft2')
const arrowRight2 = document.querySelector('#arrowRight2')
const slides2 = document.querySelectorAll('.cupcakes__slides')
const slidesCount2 = document.querySelectorAll('.cupcakes__slides').length

let activeSlideIndex2 = 0

arrowLeft2.addEventListener('click', () => {
	SlideScroll2('left')
})
arrowRight2.addEventListener('click', () => {
	SlideScroll2('right')
})


function SlideScroll2(event) {
	if (event === 'right') {
		activeSlideIndex2++
		if (activeSlideIndex2 === slidesCount2) {
			activeSlideIndex2 = 0
		}
	} else if (event === 'left') {
		activeSlideIndex2--
		if (activeSlideIndex2 < 0) {
			activeSlideIndex2 = slidesCount2 - 1
		}
	}

	width = slides2[activeSlideIndex2].clientWidth

	slides2.forEach(slide => {
		slide.style.transform = `translateX(-${activeSlideIndex2 * width}px)`
	})
}


setInterval(() => SlideScroll2('right'), 5000)










const arrowLeft3 = document.querySelector('#arrowLeft3')
const arrowRight3 = document.querySelector('#arrowRight3')
const slides3 = document.querySelectorAll('.confectioners__slides')
const slidesCount3 = document.querySelectorAll('.confectioners__slides').length

let activeSlideIndex3 = 0

arrowLeft3.addEventListener('click', () => {
	SlideScroll3('left')
})
arrowRight3.addEventListener('click', () => {
	SlideScroll3('right')
})


function SlideScroll3(event) {
	if (event === 'right') {
		activeSlideIndex3++
		if (activeSlideIndex3 === slidesCount3) {
			activeSlideIndex3 = 0
		}
	} else if (event === 'left') {
		activeSlideIndex3--
		if (activeSlideIndex3 < 0) {
			activeSlideIndex3 = slidesCount3 - 1
		}
	}

	width = slides3[activeSlideIndex3].clientWidth

	slides3.forEach(slide => {
		slide.style.transform = `translateX(-${activeSlideIndex3 * width}px)`
	})
}


setInterval(() => SlideScroll3('right'), 5000)











const arrowLeft4 = document.querySelector('#arrowLeft4')
const arrowRight4 = document.querySelector('#arrowRight4')
const slides4 = document.querySelectorAll('.articles__slides')
const slidesCount4 = document.querySelectorAll('.articles__slides').length

let activeSlideIndex4 = 0

arrowLeft4.addEventListener('click', () => {
	SlideScroll4('left')
})
arrowRight4.addEventListener('click', () => {
	SlideScroll4('right')
})


function SlideScroll4(event) {
	if (event === 'right') {
		activeSlideIndex4++
		if (activeSlideIndex4 === slidesCount4) {
			activeSlideIndex4 = 0
		}
	} else if (event === 'left') {
		activeSlideIndex4--
		if (activeSlideIndex4 < 0) {
			activeSlideIndex4 = slidesCount4 - 1
		}
	}

	width = slides4[activeSlideIndex4].clientWidth

	slides4.forEach(slide => {
		slide.style.transform = `translateX(-${activeSlideIndex4 * width}px)`
	})
}


setInterval(() => SlideScroll4('right'), 5000)





const profile = document.querySelector('.header__profile');
const menu = document.querySelector('.profile__menu');

profile.addEventListener('click', () => {
	menu.classList.toggle('active');
});