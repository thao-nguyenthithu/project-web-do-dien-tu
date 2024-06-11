function initSilde(){
    let currentIndex = 0;
    const slides = document.querySelectorAll('.ab-slide__adv');
    const slidesContainer = document.querySelector('.ab-slides');
    let slideInterval;

    function showSlide(index) {
        slidesContainer.style.transform = `translateX(${-index * 50}%)`; // 50% to move by two slides at a time
    }

    function moveSlide(n) {
        currentIndex += n;
        if (currentIndex >= slides.length - 1) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = slides.length - 2;
        }
        showSlide(currentIndex);
    }

    function currentSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        slideInterval = setInterval(() => {
            moveSlide(1);
        }, 3000); // Change slide every 3 seconds
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    document.addEventListener('DOMContentLoaded', () => {
        showSlide(currentIndex);
        startAutoSlide();
    });

    document.querySelector('.about-slider').addEventListener('mouseover', stopAutoSlide);
    document.querySelector('.about-slider').addEventListener('mouseout', startAutoSlide);

}


