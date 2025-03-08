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
            const systemTheme = getSystemTimeBasedTheme();
            if (systemTheme === "dark") {
                document.body.classList.add("dark-theme");
            }
        }

        // Save the selected theme in local storage
        localStorage.setItem("theme", theme);
    }

    // Load saved theme or use auto mode
    const savedTheme = localStorage.getItem("theme") || "auto";
    applyTheme(savedTheme);

    // Open Theme Dropdown on Click
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
 *  🔹 MOBILE NAVBAR FUNCTIONALITY
 *  ========================= */
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("active"); // Toggle animation on hamburger
        });

        // Close menu when clicking a link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                hamburger.classList.remove("active"); // Remove animation when menu closes
            });
        });
    }
});

    
