const doctorFilter = document.querySelector('#doctor-specialty');
const doctorCards = Array.from(document.querySelectorAll('.doctor-card'));
const appointmentForm = document.querySelector('#appointment-form');
const formAlert = document.querySelector('#form-alert');
const mobileToggle = document.querySelector('#mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (doctorFilter) {
  doctorFilter.addEventListener('change', (event) => {
    const specialty = event.target.value;
    doctorCards.forEach((card) => {
      const matches = specialty === 'all' || card.dataset.specialty === specialty;
      card.style.display = matches ? 'grid' : 'none';
    });
  });
}

if (appointmentForm) {
  appointmentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(appointmentForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const service = formData.get('service');

    if (!name || !email || !service) {
      formAlert.textContent = 'Please fill in your name, email, and requested service.';
      formAlert.style.color = '#b02a37';
      return;
    }

    formAlert.textContent = `Thank you, ${name}! Your appointment request for ${service} has been received.`;
    formAlert.style.color = '#0f7f2d';
    appointmentForm.reset();
  });
}

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
