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

    
    document.addEventListener("click", function (event) {
        if (!nav.contains(event.target) && !openButton.contains(event.target)) {
            nav.classList.remove("nav-active");
            openButton.style.display = "block"; 
            closeButton.style.display = "none"; 
        }
    });
   
    
});

document.addEventListener("DOMContentLoaded", function () {
    
    const lastModifiedElement = document.getElementById("lastModified");

    
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        
        
        const formattedDate = `${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;

        lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
    }

    
    const currentYearElement = document.getElementById("currentYear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});