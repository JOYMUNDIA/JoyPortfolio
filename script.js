// Nav Javascript
const nav = document.querySelector('nav');
const btn = document.querySelector('button.menu-btn');
const links = document.querySelectorAll('.nav-body nav ul li a');
const sections = document.querySelectorAll('section');

// Menu Button Toggle
btn.addEventListener('click', () => {
    nav.classList.toggle('menu-active');
    btn.classList.toggle('menu-active');
    if (btn.classList.contains('menu-active')) {
        btn.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // Change to close icon
    } else {
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Change back to hamburger icon
    }
});

// Scroll Event Listener for Navigation Highlighting
window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY; // Get current scroll position

    // Loop through all sections
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the section is in the viewport
        if (currentScroll >= sectionTop - 50 && currentScroll < sectionTop + sectionHeight) {
            // Highlight the corresponding nav link
            links.forEach(link => link.classList.remove('active-navlink'));
            links[index].classList.add('active-navlink');
        }
    });
});

// Smooth Scroll for Clicking on Navigation Links
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        
        // Scroll to the target section smoothly
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});


//About Me content
let currentSlide = 0;
const aboutMeCards = document.querySelectorAll('.aboutMeCard');

function showSlide(index) {
if (index >= aboutMeCards.length) {
    currentSlide = 0;
} else if (index < 0) {
    currentSlide = aboutMeCards.length - 1;
} else {
    currentSlide = index;
}

aboutMeCards.forEach((aboutMeCard, i) => {
    aboutMeCard.style.display = i === currentSlide ? 'flex' : 'none';
});
}

function nextSlide() {
showSlide(currentSlide + 1);
}

function prevSlide() {
showSlide(currentSlide - 1);
}

// Initial setup
showSlide(currentSlide);


// Project Section Javascript
// Function to toggle the visibility of the tooltip when the info icon is clicked
function toggleTooltip(icon) {
    const tooltip = icon.closest('.images').querySelector('.tooltip');
    tooltip.classList.toggle('visible'); // Toggle the visible class
}