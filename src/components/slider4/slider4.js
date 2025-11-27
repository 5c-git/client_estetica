import './slider4.scss';
import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';

const breakpoint = 991;
let swiper = null;

const container = document.querySelector('.slider4__swiper');
if (container) {
  const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);

  const enableSlider = () => {
    if (swiper) return;

    swiper = new Swiper(container, {
      // modules: [Navigation, Pagination],
      slidesPerView: 'auto',
      spaceBetween: 0,
    });
  };

  const destroySlider = () => {
    if (!swiper) return;

    swiper.destroy(true, true);
    swiper = null;
  };

  const check = (matches = mql.matches) => {
    if (matches && !swiper) enableSlider();
    if (!matches && swiper) destroySlider();
  };

  check();

  mql.addEventListener('change', (e) => check(e.matches));
}
