// Select all the Html elements needed
// and store them in variables
const form = document.querySelector('#form');
const password1El = document.querySelector('#password1');
const password2El = document.querySelector('#password2');
const messageContainer = document.querySelector('.message-container');
const messageEl = document.querySelector('#message');

let isValid = false;

// Validate the form
const validateForm = () => {
    // Using Contraint API
    isValid = form.checkValidity(); //returns true or false
    // Style main message for an error or success
    messageEl.textContent = 'Please fill out all fields';
    messageEl.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    // If the form is valid

};

const processFormData = (e) => {
    e.preventDefault();
    // Validate the form
    validateForm();
};

// Event listener for the form
form.addEventListener('submit', processFormData);