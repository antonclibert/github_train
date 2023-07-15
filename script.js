// JavaScript code for form validation and submission
const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    // Show an error message if any required fields are empty
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Please fill out all required fields.';
    form.appendChild(errorMessage);
  } else {
    // Show a success message if all required fields are filled out
    alert('Message sent successfully! xxxxxxxxxxxxxxxx');
    form.submit();
  }
});

 