// Generalized Carousel Function
function initializeCarousel({ 
    carouselSelector, 
    prevButtonSelector, 
    nextButtonSelector, 
    itemSelector, 
    isSlideCarousel = false, 
    dotSelector = null, 
    autoAdvance = false, 
    intervalTime = 3000 
}) {
    const carousel = document.querySelector(carouselSelector);
    const prevButton = document.getElementById(prevButtonSelector);
    const nextButton = document.getElementById(nextButtonSelector);
    const items = document.querySelectorAll(itemSelector);
    let index = 0;

    // For Slide-based Carousels (Hero-style)
    if (isSlideCarousel) {
        const dots = dotSelector ? document.querySelectorAll(dotSelector) : [];
        let currentSlide = 0;

        function updateSlide(index) {
            items.forEach((item, i) => {

                const img = item.querySelector("picture");

                if (i === index) {
                    item.classList.add("opacity-100", "z-10", "pointer-events-auto");
                    item.classList.remove("opacity-0", "z-0", "pointer-events-none");
                    img.classList.add("opacity-100");  
                    img.classList.remove("opacity-0");
                    if (dots.length) {
                        dots[i].classList.add("bg-blue-900");
                        dots[i].classList.remove("bg-gray-500");
                    }
                } else {
                    item.classList.add("opacity-0", "z-0", "pointer-events-none");
                    item.classList.remove("opacity-100", "z-10", "pointer-events-auto");
                    img.classList.add("opacity-0");  
                    img.classList.remove("opacity-100");
                    if (dots.length) {
                        dots[i].classList.add("bg-gray-500");
                        dots[i].classList.remove("bg-blue-900");
                    }
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % items.length;
            updateSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + items.length) % items.length;
            updateSlide(currentSlide);
        }

        if (dotSelector) {
            dots.forEach((dot, i) => {
                dot.addEventListener("click", () => {
                    currentSlide = i;
                    updateSlide(i);
                });
            });
        }

        nextButton.addEventListener("click", nextSlide);
        prevButton.addEventListener("click", prevSlide);

        // Auto slide change if enabled
        if (autoAdvance) {
            setInterval(nextSlide, intervalTime);
        }

        updateSlide(currentSlide); // Initialize the first slide
    } 
    // For Scroll-based Carousels (Services-style)
    else {
        function updateCarousel() {
            carousel.scrollTo({
                left: items[index].offsetLeft,
                behavior: 'smooth'
            });

            // Show or hide the previous/next buttons based on the current index
            if (index === 0) {
                prevButton.classList.add('hidden');
            } else {
                prevButton.classList.remove('hidden');
            }

            if (index === items.length - 1) {
                nextButton.classList.add('hidden');
            } else {
                nextButton.classList.remove('hidden');
            }
        }

        // On Next Button Click
        nextButton.addEventListener('click', function () {
            if (index < items.length - 1) {
                index++;
                updateCarousel();
            }
        });

        // On Previous Button Click
        prevButton.addEventListener('click', function () {
            if (index > 0) {
                index--;
                updateCarousel();
            }
        });

        // Initialize the first state of the carousel
        updateCarousel();
    }
}

// Initialize the Services Carousel (Scroll-based)
document.addEventListener('DOMContentLoaded', function () {
    initializeCarousel({
        carouselSelector: '.services-carousel',
        prevButtonSelector: 'prev',
        nextButtonSelector: 'next',
        itemSelector: '.service-item'
    });
});

// Initialize the Hero Carousel (Slide-based with dots)
document.addEventListener('DOMContentLoaded', function () {
    initializeCarousel({
        carouselSelector: '.hero-carousel',
        prevButtonSelector: 'hero-prev',
        nextButtonSelector: 'hero-next',
        itemSelector: '.hero-slide',
        isSlideCarousel: true,
        dotSelector: '.hero-dot',
        autoAdvance: true, 
        intervalTime: 3000
    });
});
