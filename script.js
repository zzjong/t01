document.addEventListener('DOMContentLoaded', function() {
    const logoLink = document.querySelector('.logo-link'); // More specific selector
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (window.location.pathname.includes('home.html') || window.location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.location.href = 'home.html';
            }
        });
    }
});