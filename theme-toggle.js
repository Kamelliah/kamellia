document.addEventListener("DOMContentLoaded", function () {
    /** =========================
     *  🔹 THEME TOGGLE FUNCTIONALITY
     *  ========================= */
    const themeButton = document.querySelector(".theme-button");
    const themeDropdown = document.querySelector(".theme-dropdown");
    const themeOptions = document.querySelectorAll(".theme-option");

    // Function to determine system time-based theme (Light: 6AM-5:59PM | Dark: 6PM-5:59AM)
    function getSystemTimeBasedTheme() {
        const currentHour = new Date().getHours();
        return (currentHour >= 6 && currentHour < 18) ? "light" : "dark";
    }

    // Function to apply selected theme
    function applyTheme(theme) {
        document.body.classList.remove("dark-theme");

        if (theme === "dark") {
            document.body.classList.add("dark-theme");
        } else if (theme === "auto") {
            if (getSystemTimeBasedTheme() === "dark") {
                document.body.classList.add("dark-theme");
            }
        }

        // Save the selected theme in local storage
        localStorage.setItem("theme", theme);
    }

    // Load saved theme or use auto mode
    applyTheme(localStorage.getItem("theme") || "auto");

    // Open Theme Dropdown on Click
    themeButton?.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevents the click from closing instantly
        themeDropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".theme-dropdown")) {
            themeDropdown.classList.remove("active");
        }
    });

    // Apply selected theme from dropdown
    themeOptions.forEach(option => {
        option.addEventListener("click", () => {
            applyTheme(option.getAttribute("data-theme"));
            themeDropdown.classList.remove("active"); // Close menu after selection
        });
    });

    // Automatically update theme every 60 seconds
    setInterval(() => {
        if (localStorage.getItem("theme") === "auto") {
            applyTheme("auto");
        }
    }, 60000);

    /** =========================
     *  🔹 MOBILE NAVBAR FUNCTIONALITY
     *  ========================= */
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("active"); // Toggle animation on hamburger
        });

        // Close menu when clicking a link
        navLinks.addEventListener("click", (e) => {
            if (e.target.tagName === "A") {
                navLinks.classList.remove("active");
                hamburger.classList.remove("active");
            }
        });
    }
});
