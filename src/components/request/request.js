import './request.scss';
import {
  validateForm,
} from '../validator/validator';

const form = document.querySelector('.request__form');
if (form) {
  validateForm('.request__form');
}

