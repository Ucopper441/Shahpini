// Scroll progress
const prog = document.getElementById('scrollProg');
window.addEventListener('scroll', () => {
  const max = document.body.scrollHeight - window.innerHeight;
  prog.style.width = (window.scrollY / max * 100) + '%';
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 50);
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// Nav toggle mobile
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  document.getElementById('navLinks').classList.remove('open');
}));

// Form submit
function handleSubmit(btn) {
  btn.textContent = '✓ Enquiry Sent! We\'ll be in touch soon.';
  btn.style.background = 'linear-gradient(135deg, var(--green), #1A6B40)';
  btn.disabled = true;
}

// Animate stats on scroll
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.textContent);
        let count = 0;
        const step = Math.ceil(target / 40);
        const interval = setInterval(() => {
          count = Math.min(count + step, target);
          el.innerHTML = count + '<span>+</span>';
          if (count >= target) clearInterval(interval);
        }, 30);
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);
