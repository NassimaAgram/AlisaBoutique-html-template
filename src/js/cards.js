// load new card

function createCard() {
    // New card container
    const card = document.createElement("div");
    card.classList.add("relative", "flex", "w-full");

    // Inner card content
    const cardContent = `
        <div class="bg-white shadow w-full sm:w-60 p-6 relative z-10 ">
            <div class="bg-gray-300 h-20 w-20 mb-4"></div>
            <h3 class="text-lg font-semibold text-gray-900">Lorem Ipsum Is Simply Dummy</h3>
            <p class="text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing.</p>
            <button class="mt-6 bg-gray-100 cursor-pointer text-gray-900 hover:bg-blue-900 hover:text-white p-3 rounded-full">
                ➜
            </button>
        </div>
        <div class="block md:w-36 w-50 bg-gray-300 shadow"></div>
    `;

    // Set the inner HTML of the card container
    card.innerHTML = cardContent;

    return card;
}

// Handle the 'Load More' button 
document.getElementById("load-more").addEventListener("click", function () {
    const cardContainer = document.getElementById("card-container");
    // Add 3 new cards
    for (let i = 0; i < 3; i++) {
        cardContainer.appendChild(createCard());
    }
});
