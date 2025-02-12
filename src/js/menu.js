// Menu Management (burger, mega menu)

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("mobile-menu");
    const menuPanel = document.getElementById("menu-panel");
    const menuOverlay = document.getElementById("menu-overlay");
    const openBtn = document.getElementById("open-menu");
    const closeBtn = document.getElementById("close-menu");
    const navLinks = document.querySelectorAll("nav a, #mobile-menu a"); 

    // Function Open menu
    function openMenu() {
        menu.classList.remove("hidden");
        setTimeout(() => {
            menuOverlay.classList.remove("hidden", "opacity-0");
            menuOverlay.classList.add("opacity-100");
            menuPanel.classList.remove("translate-x-full");
            menuPanel.classList.add("translate-x-0");
        }, 10); // Small delay to trigger animation
    }

    // Function Close menu
    function closeMenu() {
        menuOverlay.classList.remove("opacity-100");
        menuOverlay.classList.add("opacity-0");
        menuPanel.classList.remove("translate-x-0");
        menuPanel.classList.add("translate-x-full");

        setTimeout(() => {
            menu.classList.add("hidden");
            menuOverlay.classList.add("hidden");
        }, 300); // Matches transition duration
    }

    // Open menu on button click
    openBtn.addEventListener("click", openMenu);

    // Close menu on button click
    closeBtn.addEventListener("click", closeMenu);

    // Close menu outside the menu panel
    menuOverlay.addEventListener("click", closeMenu);

    // Add smooth scroll to the links and close mobile menu 
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").substring(1); // Remove '#' from the href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                // Smooth scroll to the target element
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // Close the mobile menu if it's open
                if (menu.classList.contains("hidden") === false) {
                    closeMenu();
                }
            }
        });
    });
});
