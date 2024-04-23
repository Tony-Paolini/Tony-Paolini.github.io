function showSection(sectionId) {
    // Hide all cheatsheet sections
    const sections = document.querySelectorAll('.cheatsheet');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the requested section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// Setup event listeners for buttons and initially hide all sections
document.addEventListener('DOMContentLoaded', () => {
    // Initially hide all sections
    const sections = document.querySelectorAll('.cheatsheet');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Setup button listeners
    const buttons = document.querySelectorAll('.CheatsheetButtons button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Extract the sectionId from the button's onclick attribute
            // Assumes the onclick attribute format is: showSection('sectionId')
            const sectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showSection(sectionId);
        });
    });
});