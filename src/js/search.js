//Global Search Toggle Effect

document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");

    searchBtn.addEventListener("click", () => {
        if (searchInput.classList.contains("w-40")) {
            searchInput.classList.remove("hidden")
            searchInput.classList.remove("w-40", "opacity-100");
            searchInput.classList.add("w-0", "opacity-0");
        } else {
            searchInput.classList.remove("w-0", "opacity-0");
            searchInput.classList.add("w-40", "opacity-100");
            searchInput.focus();
        }
    });
});


// FAQ search
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("faq-search");
    const faqItems = document.querySelectorAll(".faq-item");

    searchInput.addEventListener("input", function() {
        const searchQuery = searchInput.value.toLowerCase();

        faqItems.forEach(item => {
            const question = item.querySelector("summary span").textContent.toLowerCase();
            if (question.includes(searchQuery)) {
                item.style.display = "block"; 
            } else {
                item.style.display = "none";
            }
        });
    });
});