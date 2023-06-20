import validator from 'validator';
import './style.css';

const input = document.querySelector('input');
const select = document.querySelector('#select-field');
const button = document.querySelector('button');
const validateText = document.querySelector('#validate');

button.addEventListener('click', (e) => {
  e.preventDefault();

  const fields = {
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    email: validator.isEmail(input.value),
    url: validator.isURL(input.value),
    hexColor: validator.isHexColor(input.value),
  };

  validateText.innerText = `A validação retornou ${fields[select.value]}`;
});
