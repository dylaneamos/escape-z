// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Form validation for the booking form
document.getElementById('booking-form').addEventListener('submit', function (e) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const roomSelect = document.getElementById('room-select');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || roomSelect.value === '') {
        e.preventDefault();
        alert('Please fill in all fields before submitting.');
    }
});
