//Слайдер

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('#prev-button'); //кнопки слайдера
const nextButton = document.querySelector('#next-button');
const slides = Array.from(slider.querySelectorAll('.course')); //блоки с уровнями курсов
const slideCount = slides.length;
let slideIndex = 0;

function showPreviousSlide() { //функция кнопки для смены слайда назад
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() { //функция кнопки для смены слайда вперед
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}
//функция обнуления счетчика слайдера
function updateSlider() {  
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

updateSlider();


//кнопка регистрации

function ToRegistration(){
  window.location = 'registration.html';
}


//кнопки перехода на курсы

function ToMediumLevel(){
  window.location = 'cours1.html';
}

function ToStartLevel(){
  window.location = 'course2.html';
}

function ToAdvancedLevel(){
  window.location = 'course3.html';
}
