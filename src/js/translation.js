document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.getElementById("language-select");

    // Check if there's a saved language in localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
        languageSelect.value = savedLanguage;
        changeLanguage(savedLanguage);
    }

    // Event listener for when language changes
    languageSelect.addEventListener("change", function () {
        const selectedLanguage = languageSelect.value;
        localStorage.setItem("selectedLanguage", selectedLanguage);
        changeLanguage(selectedLanguage);
    });

    function changeLanguage(lang) {
        if (lang === "ar") {
            document.documentElement.setAttribute("lang", "ar");
            document.body.style.direction = "rtl"; // Right to left for Arabic
        } else {
            document.documentElement.setAttribute("lang", "en");
            document.body.style.direction = "ltr"; // Left to right for English
        }

    }
});