// Trigger the animations

document.addEventListener("DOMContentLoaded", function () {
    // Select all elements that you want to animate on scroll
    const elements = document.querySelectorAll('.fade-in');

    // Create a new Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3 
    });

    // Observe each element
    elements.forEach(element => {
        observer.observe(element);
    });
});
