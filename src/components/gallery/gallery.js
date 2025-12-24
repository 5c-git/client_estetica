import './gallery.scss';

import Swiper from 'swiper';
import {
  Navigation, Pagination, Autoplay,
} from 'swiper/modules';

const galleryInit = (container) => {
  const gallery = container;
  if (!gallery) return;

  const swiper = gallery.querySelector('.swiper');

  new Swiper(swiper, {
    modules: [Navigation, Pagination, Autoplay],
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    // Responsive breakpoints
    breakpoints: {},
  });
};

const gallerys = document.querySelectorAll('.gallery');
gallerys.forEach((el) => {
  galleryInit(el);
});

