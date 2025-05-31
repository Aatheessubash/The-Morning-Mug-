const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  msg.classList.remove('hidden');
  form.reset();
});

