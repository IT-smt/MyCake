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