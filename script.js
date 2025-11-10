// Simple form (you can connect to email later)
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Appointment booked! We’ll call you soon.');
});
