import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[name=email]');
const textAreaEl = document.querySelector('textarea[name=message]');

formEl.addEventListener('input', throttle(dataInLocalStoradge, 500));
formEl.addEventListener('submit', onSubmitClick);

const saveData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(saveData);

if (parsedData) {
  inputEl.value = parsedData.email;
  textAreaEl.value = parsedData.message;
}

function dataInLocalStoradge(evt) {
  const email = inputEl.value;
  const message = textAreaEl.value;
  localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
}
function onSubmitClick(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;

  if (!email || !message) {
    return alert('Все поля должны быть заполнены');
  }

  const formData = new FormData(event.currentTarget);
  console.log({ message, email });

  localStorage.removeItem('feedback-form-state');
  formEl.reset();
}
