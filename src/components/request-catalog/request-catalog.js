import './request-catalog.scss';
import {
  validateForm,
} from '../validator/validator';

const form = document.querySelector('.request-catalog__form');
if (form) {
  validateForm('.request-catalog__form');
}
