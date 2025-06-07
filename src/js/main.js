// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.3)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.2)';
        navbar.style.boxShadow = 'none';
    }
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.glass-card, .glass');
revealElements.forEach(el => {
    el.classList.add('reveal');
});

const revealOnScroll = function () {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Typing effect for hero text
const heroText = document.querySelector('.typing');
const text = heroText.textContent;
heroText.textContent = '';
heroText.style.minHeight = '70px';

let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {
        // Remove typing cursor after completion
        setTimeout(() => {
            heroText.classList.remove('typing');
        }, 1500);
    }
};

setTimeout(typeWriter, 1000);

// Parallax effect
document.addEventListener('mousemove', function (e) {
    const moveX = (e.clientX - window.innerWidth / 2) / 25;
    const moveY = (e.clientY - window.innerHeight / 2) / 25;

    document.querySelectorAll('.project-img').forEach(function (element) {
        element.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    });
});

// Skill icon animations
const skillIcons = document.querySelectorAll('.skill-icon');
skillIcons.forEach(icon => {
    icon.addEventListener('mouseover', function () {
        this.style.transform = `scale(1.2) rotate(${Math.random() * 20 - 10}deg)`;
    });

    icon.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Random movement for floating elements
const floatingElements = document.querySelectorAll('.floating');
floatingElements.forEach(el => {
    setInterval(() => {
        const randomX = (Math.random() - 0.5) * 10;
        const randomRotate = (Math.random() - 0.5) * 5;
        el.style.transform = `translateY(-10px) translateX(${randomX}px) rotate(${randomRotate}deg)`;

        setTimeout(() => {
            el.style.transform = 'translateY(0) translateX(0) rotate(0deg)';
        }, 1000);
    }, 2000);
});

// Button hover effect
const buttons = document.querySelectorAll('.btn-glass');
buttons.forEach(btn => {
    btn.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,0,0,0.2), rgba(0,0,0,0.1) 40%)`;
    });

    btn.addEventListener('mouseleave', function () {
        this.style.background = 'rgba(0,0,0,0.1)';
    });
});

// Project card tilt effect
const cards = document.querySelectorAll('.project-card');
cards.forEach(card => {
    card.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});