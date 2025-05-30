document.getElementById('contact-form').addEventListener('submit', function(event) {Add commentMore actions
    event.preventDefault();
    
    // Simulate form submission
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset the form
    this.reset();
});
