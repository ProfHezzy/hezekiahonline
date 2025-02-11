function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("open");
}

window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("scrolled", window.scrollY > 50); // More concise way
});

document.addEventListener("DOMContentLoaded", function () {
    // Combined smooth scrolling function
    function smoothScroll(target) {
        document.querySelectorAll(`a[href^="#${target}"]`).forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetElement = document.getElementById(target);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    smoothScroll('home');
    smoothScroll('about');
    smoothScroll('skills');
    smoothScroll('contact');


    // Form validation and submission handling
    document.getElementById('contactForm').addEventListener('submit', async function (e) {
        e.preventDefault();
        const form = e.target;
        const submitBtn = document.getElementById('submitBtn');
        const spinner = submitBtn.querySelector('.spinner');
        const statusDiv = document.getElementById('formStatus');

        spinner.style.display = 'inline-block';
        submitBtn.disabled = true;
        statusDiv.classList.remove('success', 'error', 'visible');

        try {
            // Simulate API call - replace with actual fetch() call
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    Math.random() > 0.2 ? resolve() : reject(new Error('Submission failed'));
                }, 1500);
            });

            statusDiv.textContent = 'Message sent successfully!';
            statusDiv.classList.add('success', 'visible');
            form.reset();

            setTimeout(() => {
                statusDiv.classList.remove('visible');
            }, 5000);
        } catch (error) {
            statusDiv.textContent = error.message || 'Failed to send message. Please try again.';
            statusDiv.classList.add('error', 'visible');
        } finally {
            spinner.style.display = 'none';
            submitBtn.disabled = false;

            if (statusDiv.classList.contains('error')) {
                setTimeout(() => {
                    statusDiv.classList.remove('visible');
                }, 5000);
            }
        }
    });
});