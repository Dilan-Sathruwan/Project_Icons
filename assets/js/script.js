

// Back to Top Button logic
const backToTopButton = document.getElementById('backToTop');

// Show or hide the Back to Top button based on scroll position
window.addEventListener('scroll', function () {
    // Toggle visibility of Back to Top button
    if (window.pageYOffset > 200) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }

    // Change navbar style on scroll
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add smooth scrolling effect for navbar links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Additional Function: Toggle mobile menu visibility
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navbarCollapse = document.querySelector('.navbar-collapse');

mobileMenuToggle.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
});

// Additional Function: Close mobile menu on link click
navbarCollapse.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        navbarCollapse.classList.remove('show'); // Close mobile menu
    });
});

// Additional Function: Highlight active section in navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('a.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
