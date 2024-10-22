document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    // Simple validation
    if (name === '' || email === '' || message === '') {
        formMessage.innerText = 'Please fill in all fields.';
        return;
    }

    // Here you can handle sending the data to the server or any other processing
    // For now, we will just simulate a success message
    formMessage.innerText = 'Thank you for your message, we will get back to you shortly!';

    // Reset the form
    document.getElementById('contact-form').reset();
});
