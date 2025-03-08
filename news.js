function updateCountdown() {
    const graduationDate = new Date("May 17, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = graduationDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "🎓 Congratulations! You Graduated!";
        document.getElementById("countdown").style.color = "green";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    requestAnimationFrame(updateCountdown);
}

updateCountdown();

function toggleNews(element) {
    let content = element.querySelector(".news-content");
    content.style.display = content.style.display === "none" || content.style.display === "" ? "block" : "none";
}

function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.display = sidebar.style.display === "none" || sidebar.style.display === "" ? "block" : "none";
}
