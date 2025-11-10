import './field.scss';

const phoneMask = new Inputmask('+[9 (999) 999 99 99]', {
  autoUnmask: true,
  showMaskOnHover: false,
  showMaskOnFocus: false,
  placeholder: '',
});
const inputs = document.querySelectorAll('.field__input--tel');

inputs.forEach((phone) => {
  phoneMask.mask(phone);
});