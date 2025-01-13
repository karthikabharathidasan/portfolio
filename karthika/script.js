// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add more bubbles dynamically
function createBubbles() {
    const header = document.querySelector('header');
    for (let i = 0; i < 5; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.width = Math.random() * 30 + 20 + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.animationDelay = Math.random() * 2 + 's';
        header.appendChild(bubble);
    }
}

// Create initial bubbles
createBubbles();

// Recreate bubbles periodically
setInterval(createBubbles, 10000);

// Add scroll animation for project cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});
