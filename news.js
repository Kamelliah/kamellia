document.addEventListener("DOMContentLoaded", function () {
  const sec = 1000,
        min = sec * 60,
        hour = min * 60,
        day = hour * 24;

  const end = new Date("May 17, 2025 00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const remaining = end - now;

    if (remaining <= 0) {
      document.querySelector("h1").innerText = "🎓 Congratulations! You've Graduated! 🎉";
      document.querySelector("p").innerHTML = "The big day is here! Visit <a href='#'>your portfolio</a> for more details.";
      
      const digits = document.querySelectorAll("span");
      digits.forEach((digit) => {
        digit.innerText = "00";
      });

      clearInterval(countdownInterval);
      return;
    }

    document.getElementById("days").innerText = Math.floor(remaining / day);
    document.getElementById("hours").innerText = Math.floor((remaining % day) / hour);
    document.getElementById("minutes").innerText = Math.floor((remaining % hour) / min);
    document.getElementById("seconds").innerText = Math.floor((remaining % min) / sec);
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
});
