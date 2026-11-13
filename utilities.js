function clickOMatic() {
    const isLightMode = document.body.classList.toggle("light-mode");
    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.src = isLightMode ? "images/SunIcon.png" : "images/MoonIcon.png";
    themeToggle.alt = isLightMode ? "Switch to dark mode" : "Switch to light mode";
}