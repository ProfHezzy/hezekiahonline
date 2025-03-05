document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
  
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });


    // Close menu when clicking outside
    mobileNav.addEventListener("click", function (e) {
        if (e.target === mobileNav) {
            mobileNav.classList.remove("show");
        }
    });
    
});
  

// Initialize Swiper for smooth carousel functionality
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
});

// Skill Card Animation using Intersection Observer for better performance
const skillCards = document.querySelectorAll('.skill-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 });

skillCards.forEach(card => observer.observe(card));

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links'); // Updated selector

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    } else {
        console.error("Menu toggle or nav menu not found!");
    }
});


// Change Navbar Style on Scroll
window.addEventListener('scroll', () => {
    document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth Scroll to Sections (More Dynamic)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop - 50, behavior: 'smooth' });
        }
    });
});

// Contact Form Submission with Status Handling
document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const statusDiv = document.getElementById('formStatus');

    submitBtn.disabled = true;
    statusDiv.classList.remove('success', 'error', 'visible');
    
    try {
        await new Promise((resolve, reject) => setTimeout(() => 
            Math.random() > 0.2 ? resolve() : reject(new Error('Submission failed')), 1500)
        );

        statusDiv.textContent = 'Message sent successfully!';
        statusDiv.classList.add('success', 'visible');
        form.reset();
    } catch (error) {
        statusDiv.textContent = error.message || 'Failed to send message. Please try again.';
        statusDiv.classList.add('error', 'visible');
    } finally {
        submitBtn.disabled = false;
        setTimeout(() => statusDiv.classList.remove('visible'), 5000);
    }
});
