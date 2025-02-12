// Function to animate the number count
function animateNumbers() {
    const numbers = document.querySelectorAll('h2[data-target]');

    numbers.forEach((number) => {
        const target = parseInt(number.getAttribute('data-target'));
        let count = 0;

        const suffix = number.querySelector('span') ? number.querySelector('span').textContent : '';

        const interval = setInterval(() => {
            if (count < target) {
                count += Math.ceil(target / 100);
                number.textContent = count > target ? target : count; // Prevent overshooting the target
                number.innerHTML += suffix;
            } else {
                clearInterval(interval); // Stop when target is reached
            }
        }, 20);
    });
}

// Intersection Observer to detect when the section comes into view
document.addEventListener('DOMContentLoaded', function () {
    const statsSection = document.getElementById("states");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers(); 
                    observer.unobserve(entry.target); 
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    observer.observe(statsSection); 
});
