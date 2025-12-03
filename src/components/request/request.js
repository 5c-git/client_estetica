import './request.scss';
import {
  validateForm,
} from '../validator/validator';

const form = document.querySelector('.request__form');
if (form) {
  console.log(form);
  validateForm('.request__form');
}

