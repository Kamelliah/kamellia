document.addEventListener("DOMContentLoaded", function () {
    /** =========================
     *  🔹 THEME TOGGLE FUNCTIONALITY (Time-Based + Manual Selection)
     *  ========================= */
    const themeButton = document.querySelector(".theme-button");
    const themeDropdown = document.querySelector(".theme-dropdown");
    const themeMenu = document.querySelector(".theme-menu");
    const themeOptions = document.querySelectorAll(".theme-option");

    function getSystemTimeBasedTheme() {
        const currentHour = new Date().getHours();
        return (currentHour >= 6 && currentHour < 18) ? "light" : "dark";
    }

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

        localStorage.setItem("theme", theme);
    }

    const savedTheme = localStorage.getItem("theme") || "auto";
    applyTheme(savedTheme);

    if (themeButton) {
        themeButton.addEventListener("click", (e) => {
            e.stopPropagation();
            themeDropdown.classList.toggle("active");
        });
    }

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".theme-dropdown")) {
            themeDropdown.classList.remove("active");
        }
    });

    themeOptions.forEach(option => {
        option.addEventListener("click", () => {
            const selectedTheme = option.getAttribute("data-theme");
            applyTheme(selectedTheme);
            themeDropdown.classList.remove("active");
        });
    });

    setInterval(() => {
        if (localStorage.getItem("theme") === "auto") {
            applyTheme("auto");
        }
    }, 60000);

    /** =========================
     *  🔹 NAVBAR FUNCTIONALITY (Mobile Menu)
     *  ========================= */
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});

