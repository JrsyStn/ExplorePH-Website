const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check if a theme is saved in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    // Save the current theme to localStorage
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light-theme');
    } else {
        localStorage.removeItem('theme');  // Default to dark theme
    }
});
