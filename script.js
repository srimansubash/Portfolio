
// Paste this into script.js

// Small utilities for the portfolio
document.getElementById('year').textContent = new Date().getFullYear();

function handleContactSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('form-msg');

  // Simple validation + mock sending (GitHub Pages cannot send email by itself)
  if(!name || !email || !message){
    formMsg.textContent = 'Please complete all fields.';
    return false;
  }

  formMsg.textContent = 'Thanks! This is a demo contact form. Kindly contact <- the email address';
  e.target.reset();
  return false;
}

// Theme toggle (simple dark/light switch that changes CSS variables)
const themeBtn = document.getElementById('theme-toggle');
let dark = true;
themeBtn.addEventListener('click', () => {
  dark = !dark;
  if(!dark){
    document.documentElement.style.setProperty('--bg','#f6f8fb');
    document.documentElement.style.setProperty('--card','#ffffff');
    document.documentElement.style.setProperty('--muted','#445566');
    document.documentElement.style.setProperty('--accent','#7c5cff');
    document.documentElement.style.setProperty('color-scheme','light');
    document.body.style.color = '#0b1720';
  } else {
    document.documentElement.style.setProperty('--bg','#0f1724');
    document.documentElement.style.setProperty('--card','#0b1220');
    document.documentElement.style.setProperty('--muted','#9aa4b2');
    document.documentElement.style.setProperty('color-scheme','dark');
    document.body.style.color = '#e6eef8';
  }
});
