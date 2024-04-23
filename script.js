function showSection(sectionId) {
    const sections = document.querySelectorAll('.cheatsheet');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.cheatsheet');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const buttons = document.querySelectorAll('.CheatsheetButtons button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showSection(sectionId);
        });
    });
});
