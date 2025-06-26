const themeBtn = document.getElementById('theme-icon');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const body = document.body;

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeBtn.classList.replace('fa-moon', 'fa-sun');
  } else {
    themeBtn.classList.replace('fa-sun', 'fa-moon');
  }
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// ====testimonials-section   slide=====>

const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const testimonials = document.querySelectorAll('.testimonial-card');

let current = 0;

function showTesimonial(index) {
  testimonials.forEach((card, i) => {
    card.classList.remove('active');
    if (i === index) card.classList.add('active');
  });
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTesimonial(current);
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % testimonials.length;
  showTesimonial(current);
});

setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTesimonial(current);
}, 3000);

// 3D tilt effect for specialty cards

const specialtyCards = document.querySelectorAll('.specialty-card');

specialtyCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientx - rect.left; // mouse X inside card
    const y = e.clienty - rect.top; // mouse Y inside card
    const clientX = React.width / 2;
    const clientY = React.height / 2;
    
    const rotateX = ((y - clientY) / clientY) * 10;
    const rotateY = ((y - clientX) / clientX) * 10;
    
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
  
  card.addEventListener('mousedown', () => {
    card.style.cursor = 'grabbing';
  });
  
  card.addEventListener('mouseup', () => {
    card.style.cursor = 'grab';
  });
});