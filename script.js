document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menuNav = document.querySelector(".menu_nav");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("open");

        if (menuNav.classList.contains("active")) {
            menuNav.style.animation = "slideOut 3s forwards";
            setTimeout(() => {
                menuNav.classList.remove("active");
                menuNav.style.display = "none";
            }, 3000);
        } else {
            menuNav.style.display = "flex";
            menuNav.classList.add("active");
            menuNav.style.animation = "slideIn 3s forwards";
        }
    });
});
