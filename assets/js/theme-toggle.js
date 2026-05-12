(function() {
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    
    // Immediate check for saved theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        root.classList.add('dark-mode');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) icon.className = 'ri-sun-line';
        }
    }

    // Only add event listener if the button exists on the page
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            root.classList.toggle('dark-mode');
            const icon = themeToggle.querySelector('i');
            
            let theme = 'light';
            if (root.classList.contains('dark-mode')) {
                theme = 'dark';
                if (icon) icon.className = 'ri-sun-line';
            } else {
                if (icon) icon.className = 'ri-moon-line';
            }
            
            localStorage.setItem('theme', theme);
        });
    }
})();
