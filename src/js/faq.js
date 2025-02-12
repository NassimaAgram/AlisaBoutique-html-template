// toggle the button text and animate answer visibility when details are opened/closed

document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const toggleButton = item.querySelector('.faq-toggle-button');
        const detailsElement = item.querySelector('details');
        const answer = item.querySelector('.faq-answer');
        
        // Initial state setup
        answer.style.maxHeight = 0; 
        
        detailsElement.addEventListener('toggle', function () {
            if (detailsElement.open) {
                toggleButton.textContent = '-'; 
                answer.classList.remove('hidden');
                const height = answer.scrollHeight + 20;
                answer.style.maxHeight = height + "px"; 
            } else {
                toggleButton.textContent = '+'; 
                answer.style.maxHeight = 0; 
                
                setTimeout(function () {
                    answer.classList.add('hidden');
                }, 300); 
            }
        });
    });
});
