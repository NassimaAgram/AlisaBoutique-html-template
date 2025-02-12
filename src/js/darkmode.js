// Dark Mode Toggle 

document.addEventListener("DOMContentLoaded", function () {
    const darkToggle = document.getElementById("dark-toggle");

    // Check if the user has a stored preference
    const darkMode = localStorage.getItem("darkMode");

    // Dark mode based on the stored preference
    if (darkMode === "enabled") {
        document.documentElement.classList.replace("light", "dark");
        darkToggle.checked = true;
    } else {
        document.documentElement.classList.remove("dark", "light");
        darkToggle.checked = false;
    }

    // Event listener for the toggle
    darkToggle.addEventListener("change", function () {
        if (darkToggle.checked) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
