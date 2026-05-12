(function() {
    const themeToggles = document.querySelectorAll('.js-theme-toggle');
    const root = document.documentElement;
    
    const updateIcons = (theme) => {
        themeToggles.forEach(toggle => {
            const icon = toggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
            }
        });
    };

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        root.classList.add('dark-mode');
        updateIcons('dark');
    }

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            root.classList.toggle('dark-mode');
            const isDark = root.classList.contains('dark-mode');
            const theme = isDark ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
            updateIcons(theme);
        });
    });
})();
