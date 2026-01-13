import {
  validateForm, maskNumber, maskPhone,
  initPasswordEye, initFileLoadInput,
  initSelectValidation, initChoicesValidation,
  focusFirstInput, initAgreeCheckbox,
} from '../validator/validator';
import { summonPopUp, removePopUp } from '../popUp/popUp';
import findVideos from '../video/video';
import { summonAlert, removeAlert } from '../alert/alert';
import {
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  createFormData,
  setTextareaAutoHeight,
  setStatus,
  startTimer,
  debounce,
  activateRequestButtons,
  updateButtonState,
} from '../../utils/utils';
import initPromoGalleryAnimation from '../promo-gallery/promo-gallery';
import initPromoAnimation from '../promo/promo';
import initParticipantsAnimation from '../participants/participants';
import initTestPromoAnimation from '../test-promo/test-promo';

window.Corners5ProjectLayout = {
  validation: {
    validateForm,
    maskNumber,
    maskPhone,
    initPasswordEye,
    initFileLoadInput,
    initSelectValidation,
    initChoicesValidation,
  },
  summonPopUp,
  removePopUp,
  findVideos,
  summonAlert,
  removeAlert,
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  createFormData,
  setTextareaAutoHeight,
  setStatus,
  startTimer,
  debounce,
  activateRequestButtons,
  updateButtonState,
  initPromoGalleryAnimation,
  initPromoAnimation,
  initParticipantsAnimation,
  initTestPromoAnimation,
};
