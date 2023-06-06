import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

form.addEventListener('input', saveFormState);

document.addEventListener('DOMContentLoaded', () => {
  const storedFormState = localStorage.getItem('feedback-form-state');
  if (storedFormState) {
    const parsedFormState = JSON.parse(storedFormState);
    emailInput.value = parsedFormState.email;
    messageInput.value = parsedFormState.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formState);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
