document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.querySelector(".openbutton");
    const closeButton = document.querySelector(".closebutton");
    const nav = document.querySelector("nav");

    function checkScreenSize() {
        if (window.innerWidth > 950) {
            openButton.style.display = "none"; 
            closeButton.style.display = "none";
        } else {
            openButton.style.display = "block"; 
        }
    }

    
    checkScreenSize();

    
    window.addEventListener("resize", checkScreenSize);

    
    openButton.addEventListener("click", function () {
        nav.classList.add("nav-active");
        openButton.style.display = "none"; 
        closeButton.style.display = "block"; 
    });

    
    closeButton.addEventListener("click", function () {
        nav.classList.remove("nav-active");
        openButton.style.display = "block"; 
        closeButton.style.display = "none"; 
    });

    // 📌 Cerrar el menú si el usuario hace clic fuera del nav
    document.addEventListener("click", function (event) {
        if (!nav.contains(event.target) && !openButton.contains(event.target)) {
            nav.classList.remove("nav-active");
            openButton.style.display = "block"; 
            closeButton.style.display = "none"; 
        }
    });
});
