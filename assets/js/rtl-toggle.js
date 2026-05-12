(function() {
    const rtlToggles = document.querySelectorAll('.js-rtl-toggle');
    
    rtlToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const isRtl = document.documentElement.dir === 'rtl';
            document.documentElement.dir = isRtl ? 'ltr' : 'rtl';
            localStorage.setItem('rtl', !isRtl);
        });
    });
})();
