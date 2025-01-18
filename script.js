document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.nav-bar');
    const logo = document.querySelector('.logo'); 
    const midiaSocial = document.querySelector('.midia_social'); 

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { 
            navbar.classList.add('transparent');
            logo.classList.add('expanded'); 
            midiaSocial.classList.add('hidden'); 
        } else {
            navbar.classList.remove('transparent');
            logo.classList.remove('expanded'); 
            midiaSocial.classList.remove('hidden'); 
        }
    });
});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');        
    } else {
        menuMobile.classList.add('open');        
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.animate-on-scroll-a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
            }
        });
    }, { threshold: 0.1 }); 

    elements.forEach(element => observer.observe(element));
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active'); 
    currentSlide = (currentSlide + direction + slides.length) % slides.length; 
    slides[currentSlide].classList.add('active'); 
}

slides[currentSlide].classList.add('active');

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => changeSlide(-1)); 
nextButton.addEventListener('click', () => changeSlide(1)); 

function handleKeyboardNavigation(event) {
    if (event.key === "ArrowLeft") {
        changeSlide(-1);
    } else if (event.key === "ArrowRight") {
        changeSlide(1);
    }
}

document.addEventListener('keydown', handleKeyboardNavigation);

let startX = 0;
let endX = 0;
let isDragging = false;

function handleTouchStart(event) {
    startX = event.touches[0].clientX; 
    isDragging = true;
}

function handleTouchMove(event) {
    if (!isDragging) return; 
    endX = event.touches[0].clientX; 
}

function handleTouchEnd() {
    if (!isDragging) return;    
    if (startX - endX > 50) {
        changeSlide(1); 
    }    
    else if (endX - startX > 50) {
        changeSlide(-1);
    }
    isDragging = false; 
}

document.addEventListener('DOMContentLoaded', function () {
    const paragraph = document.querySelector('.area-beer-box p');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                paragraph.classList.add('active'); 
            }
        });
    });
    observer.observe(paragraph); 
});






