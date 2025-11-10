// Form submission (simple alert for now; we can add email integration later)
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Appointment booked! We’ll contact you soon.');
});
