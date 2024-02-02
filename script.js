
   // script.js

document.addEventListener("DOMContentLoaded", function () {
    // Funktion zum Anzeigen/Ausblenden einer Sektion beim Klicken
    function toggleSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }

    // Fügen Sie jedem Navigationslink einen Event-Handler hinzu
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var sectionId = link.getAttribute("href").substring(1); // Entfernt das #
            toggleSection(sectionId);
        });
    });

    // Zeige/verberge die Bilder der Galerie beim Klicken
    var portfolioImages = document.querySelectorAll(".portfolio-images img");
    portfolioImages.forEach(function (image) {
        image.addEventListener("click", function () {
            var imageId = image.getAttribute("id");
            toggleSection(imageId + "-details");
        });
    });
});
