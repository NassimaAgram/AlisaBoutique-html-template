function initializeCarousel({ 
    carouselSelector, 
    prevButtonSelector, 
    nextButtonSelector, 
    itemSelector, 
    dotSelector = null, 
    autoAdvance = false, 
    intervalTime = 3000,
    isInfinite = true,  // Add this for infinite scrolling
    scrollDirection = 'horizontal', // horizontal or vertical
}) {
    const carousel = document.querySelector(carouselSelector);
    const prevButton = document.getElementById(prevButtonSelector);
    const nextButton = document.getElementById(nextButtonSelector);
    const items = document.querySelectorAll(itemSelector);
    const dots = dotSelector ? document.querySelectorAll(dotSelector) : [];
    let index = 0;
    let currentItem = items[index];

    // Function to update the carousel, either by scroll or fade
    function updateCarousel() {
        if (scrollDirection === 'horizontal') {
            carousel.scrollTo({
                left: currentItem.offsetLeft,
                behavior: 'smooth'
            });
        } else if (scrollDirection === 'vertical') {
            carousel.scrollTo({
                top: currentItem.offsetTop,
                behavior: 'smooth'
            });
        }

        // Update dots if provided
        if (dots.length) {
            dots.forEach((dot, i) => {
                dot.classList.toggle('bg-blue-800', i === index);
                dot.classList.toggle('bg-gray-400', i !== index);
            });
        }

        // Handle button visibility
        if (isInfinite) {
            prevButton.classList.remove('hidden');
            nextButton.classList.remove('hidden');
        } else {
            prevButton.classList.toggle('hidden', index === 0);
            nextButton.classList.toggle('hidden', index === items.length - 1);
        }
    }

    // Next slide action
    function nextSlide() {
        index = (index + 1) % items.length; // Infinite scrolling
        currentItem = items[index];
        updateCarousel();
    }

    // Previous slide action
    function prevSlide() {
        index = (index - 1 + items.length) % items.length; // Infinite scrolling
        currentItem = items[index];
        updateCarousel();
    }

    // Auto advance functionality if enabled
    if (autoAdvance) {
        setInterval(nextSlide, intervalTime);
    }

    // Dots functionality (click on a dot to go to specific slide)
    if (dotSelector) {
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                index = i;
                currentItem = items[index];
                updateCarousel();
            });
        });
    }

    // Attach event listeners to the previous and next buttons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Initialize the first state of the carousel
    updateCarousel();
}



document.addEventListener('DOMContentLoaded', function () {
    initializeCarousel({
        carouselSelector: '.services-carousel',
        prevButtonSelector: 'prev',
        nextButtonSelector: 'next',
        itemSelector: '.service-item',
        autoAdvance: false, 
        isInfinite: false, 
    });
});



document.addEventListener('DOMContentLoaded', function () {
    initializeCarousel({
        carouselSelector: '.hero-carousel',
        prevButtonSelector: 'hero-prev',
        nextButtonSelector: 'hero-next',
        itemSelector: '.hero-slide',
        dotSelector: '.hero-dot',
        autoAdvance: true,
        intervalTime: 5000,
        isInfinite: true, 
    });
});
