
  ^// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Navigation functionality
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Toggle visibility of "Lebenslauf" section
    const lebenslaufSection = document.querySelector('.lebenslauf-section');
    const toggleButton = document.querySelector('.toggle-lebenslauf');

    toggleButton.addEventListener('click', function () {
        lebenslaufSection.classList.toggle('hidden');
    });
});
