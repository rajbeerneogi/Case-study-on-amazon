// Make sections visible on scroll
const sections = document.querySelectorAll('section');
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.2,  // Changed from 0.1 to 0.2 (triggers when 20% visible)
        rootMargin: '0px 0px -50px 0px'  // Better timing
    };
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('✅ Script loaded!');
});
