import './our-history.scss';

import Swiper from 'swiper';
import {
  FreeMode, Thumbs, EffectFade,
} from 'swiper/modules';

const clubCardsNew = document.querySelector('.our-history');
if (clubCardsNew) {
  const nav = clubCardsNew.querySelector('.our-history__nav');
  const main = clubCardsNew.querySelector('.our-history__main');

  let swiperMainDesktop;
  let swiperNav;


  const swiperNavInit = () => {
    swiperNav = new Swiper(nav, {
      modules: [FreeMode],
      spaceBetween: 0,
      slidesPerView: 'auto',
      watchSlidesProgress: true,
      freeMode: {
        enabled: true,
        minimumVelocity: 0.2,
        momentum: false,
        sticky: true,
      },
    });
  };

  const swiperMainDesktopInit = () => {
    swiperMainDesktop = new Swiper(main, {
      modules: [Thumbs, EffectFade],
      allowTouchMove: true,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      watchSlidesProgress: true,
      thumbs: {
        swiper: swiperNav,
        slideThumbActiveClass: 'our-history__nav-item--active',
      },
      breakpoints: {
        992: {
          allowTouchMove: false,
        },
      },
      on: {
        init: () => {
          swiperNav.update();
        },
      }
    });
  };

  swiperNavInit();
  swiperMainDesktopInit();
}
