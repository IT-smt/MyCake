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






const drop = document.querySelector('#drop')
const list = document.querySelector('#list')


drop.addEventListener('click', () => {
	drop.classList.toggle('active')
	list.classList.toggle('active')
})