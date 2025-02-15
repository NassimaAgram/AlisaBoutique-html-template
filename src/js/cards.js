let clickCount = 0;
const maxClicks = 3;  // Limit how many times "Load More" can be clicked

function createCard(language = 'en') {
    const cardContent = language === 'ar' ? `
            <div class="bg-white dark:bg-gray-800 shadow w-full sm:w-60 p-6 relative z-10">
                <div class="bg-gray-300 h-20 w-20 mb-4"></div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">لوريم إيبسوم هو نص شكلي</h3>
                <p class="text-gray-600 mt-2 dark:text-gray-400">لوريم إيبسوم هو نص شكلي يستخدم في الطباعة.</p>
                <button class="delete-btn mt-6 bg-gray-100 dark:bg-gray-600 dark:text-white cursor-pointer text-gray-900 hover:bg-blue-700 hover:text-white p-3 rounded-full">
                    -
                </button>
            </div>
            <div class="block md:w-36 w-50 bg-gray-300"></div>
    ` : `
            <div class="bg-white dark:bg-gray-800 shadow w-full sm:w-60 p-6 relative z-10">
                <div class="bg-gray-300 h-20 w-20 mb-4"></div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Lorem Ipsum Is Simply Dummy</h3>
                <p class="text-gray-600 mt-2 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing.</p>
                <button class="delete-btn mt-6 bg-gray-100 dark:bg-gray-600 dark:text-white cursor-pointer text-gray-900 hover:bg-blue-700 hover:text-white p-3 rounded-full">
                    -
                </button>
            </div>
            <div class="block md:w-36 w-50 shadow bg-gray-300"></div>
    `;

    // Create and return the card element
    const card = document.createElement("div");
    card.classList.add("card", "relative", "flex", "w-full");
    card.innerHTML = cardContent;
    return card;
}

// Handle the 'Load More' button click
document.getElementById("load-more").addEventListener("click", function () {
    const cardContainer = document.getElementById("card-container");

    const currentLang = document.documentElement.lang || 'en';  
    for (let i = 0; i < 3; i++) {
        cardContainer.appendChild(createCard(currentLang));
    }

    clickCount += 1;
    if (clickCount >= maxClicks) {
        document.getElementById("load-more").style.display = "none";
    }
});


// Event delegation for dynamically added delete buttons
document.getElementById("card-container").addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        const cardToDelete = event.target.closest(".card");
        if (cardToDelete) {
            cardToDelete.remove();
        }
    }
});
