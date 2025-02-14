document.addEventListener("DOMContentLoaded", function () {
    const darkToggle = document.getElementById("dark-toggle");

    const darkMode = localStorage.getItem("darkMode");

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
