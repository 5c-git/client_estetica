import './gallery.scss';

import Swiper from 'swiper';
import {
  Navigation, Pagination,
} from 'swiper/modules';

const galleryInit = (container) => {
  const gallery = container;
  if (!gallery) return;

  const swiper = gallery.querySelector('.swiper');

  new Swiper(swiper, {
    modules: [Navigation, Pagination],
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    // Responsive breakpoints
    breakpoints: {},
  });
};

const gallerys = document.querySelectorAll('.gallery');
gallerys.forEach((el) => {
  galleryInit(el);
});

