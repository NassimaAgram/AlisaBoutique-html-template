document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const toggleButton = item.querySelector('.faq-toggle-button');
        const detailsElement = item.querySelector('details');
        const answer = item.querySelector('.faq-answer');
        
        // Initial state setup
        answer.style.maxHeight = 0;
        detailsElement.addEventListener('click', function (event) {
            event.preventDefault(); 
        });
        
        // Button click event to toggle answer visibility
        toggleButton.addEventListener('click', function () {

            detailsElement.open = !detailsElement.open;
            
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
