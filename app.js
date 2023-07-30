const slider = document.querySelector('.slider')
const prevButton = document.querySelector('.button1')
const nextButton = document.querySelector('.button2')
const slides = Array.from(slider.querySelectorAll('img'))
const slideCount = slides.length
let slideIndex = 0

prevButton.addEventListener('click', showRandomSlide)
nextButton.addEventListener('click', showRandomSlide)

function showRandomSlide() {
    slideIndex = Math.floor(Math.random() * slideCount)
    updateSlider()
}

function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block'
      } else {
        slide.style.display = 'none'
      }
    })
}

updateSlider()