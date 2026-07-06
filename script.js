document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (message) {
        message.textContent = 'Thank you for reaching out! Your message has been received.';
      }
      form.reset();
    });
  }
});
