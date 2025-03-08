document.addEventListener("DOMContentLoaded", function () {
    /** =========================
     *  🔹 THEME TOGGLE FUNCTIONALITY (Time-Based + Manual Selection)
     *  ========================= */
    const themeButton = document.querySelector(".theme-button");
    const themeDropdown = document.querySelector(".theme-dropdown");
    const themeMenu = document.querySelector(".theme-menu");
    const themeOptions = document.querySelectorAll(".theme-option");

    // Function to check system time for auto mode (Light: 6AM-5:59PM | Dark: 6PM-5:59AM)
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
            const systemTheme = getSystemTimeBasedTheme();
            if (systemTheme === "dark") {
                document.body.classList.add("dark-theme");
            }
        }

        // Save the selected theme in local storage
        localStorage.setItem("theme", theme);
    }

    // Load saved theme or use auto mode (based on time)
    const savedTheme = localStorage.getItem("theme") || "auto";
    applyTheme(savedTheme);

    // Open/Close Theme Dropdown on Button Click
    if (themeButton) {
        themeButton.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevents the click from closing instantly
            themeDropdown.classList.toggle("active");
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".theme-dropdown")) {
            themeDropdown.classList.remove("active");
        }
    });

    // Apply selected theme from dropdown
    themeOptions.forEach(option => {
        option.addEventListener("click", () => {
            const selectedTheme = option.getAttribute("data-theme");
            applyTheme(selectedTheme);
            themeDropdown.classList.remove("active"); // Close menu after selection
        });
    });

    // Automatically update theme every 60 seconds in case time changes
    setInterval(() => {
        if (localStorage.getItem("theme") === "auto") {
            applyTheme("auto");
        }
    }, 60000); // Check every 60 seconds


    /** =========================
     *  🔹 NAVBAR FUNCTIONALITY (Mobile Menu)
     *  ========================= */
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});

