document.getElementById('rtl-toggle').addEventListener('click', () => {
    const isRtl = document.documentElement.dir === 'rtl';
    document.documentElement.dir = isRtl ? 'ltr' : 'rtl';
    localStorage.setItem('rtl', !isRtl);
    
    // Update tooltip or state if needed
    const icon = document.querySelector('#rtl-toggle i');
    // You can swap icons here if desired
});
