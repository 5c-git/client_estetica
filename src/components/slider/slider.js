import './slider.scss';

import Swiper from 'swiper';
import {
  Navigation, Pagination,
} from 'swiper/modules';

const sliderInit = (container) => {
  const slider = container;
  if (!slider) return;

  const swiper = slider.querySelector('.swiper');
  const buttonPrev = slider.querySelector('.slider__button--prev');
  const buttonNext = slider.querySelector('.slider__button--next');

  new Swiper(swiper, {
    modules: [Navigation, Pagination],
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    // Navigation arrows
    navigation: {
      prevEl: buttonPrev,
      nextEl: buttonNext,
      disabledClass: 'slider__button--disabled',
    },
    // Pagination
    pagination: {
      el: '.slider__pagination',
      progressbarFillClass: 'slider__pagination-fill',
      clickable: true,
      type: 'progressbar',
    },
    // Responsive breakpoints
    breakpoints: {},
  });
};

const sliders = document.querySelectorAll('.slider');
sliders.forEach((el) => {
  sliderInit(el);
});
