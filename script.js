// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form (demo)
function handleContactSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('form-msg');

  if(!name || !email || !message){
    formMsg.textContent = 'Please complete all fields.';
    return false;
  }

  formMsg.textContent = 'Thanks! This is a demo contact form.';
  e.target.reset();
  return false;
}

// Dark/Light theme toggle
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
let dark = true;

themeBtn.addEventListener('click', () => {
  dark = !dark;

  if (!dark) {
    // Light Mode
    document.documentElement.style.setProperty('--bg', '#f6f8fb');
    document.documentElement.style.setProperty('--card', '#ffffff');
    document.documentElement.style.setProperty('--muted', '#445566');
    document.documentElement.style.setProperty('--accent', '#7c5cff');
    document.documentElement.style.setProperty('color-scheme', 'light');
    document.body.style.color = '#0b1720';

    // Change icon to moon (dark mode icon)
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  } else {
    // Dark Mode
    document.documentElement.style.setProperty('--bg', '#0f1724');
    document.documentElement.style.setProperty('--card', '#0b1220');
    document.documentElement.style.setProperty('--muted', '#9aa4b2');
    document.documentElement.style.setProperty('color-scheme', 'dark');
    document.body.style.color = '#e6eef8';

    // Change icon to sun (light mode icon)
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
});


// Back-to-top button
const backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', e=>{
  e.preventDefault();
  window.scrollTo({top:0,behavior:'smooth'});
});
window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', ()=>{
  navMenu.classList.toggle('show');
});

// Make project images clickable to open Live Demo
document.querySelectorAll('.project-img').forEach(img => {
  img.style.cursor = 'pointer'; // show pointer on hover
  img.addEventListener('click', () => {
    const liveLink = img.getAttribute('data-live');
    if(liveLink) {
      window.open(liveLink, '_blank'); // open in new tab
    }
  });
});
