import './header.scss';
import {
  getPaddingOnBody,
  getPaddingFromBody,
} from '../../utils/utils';

const body = document.querySelector('body');
const header = document.querySelector('header');

if (header) {
  const burger = header.querySelector('.header__burger');

  // Закрывает все пункты меню
  const menuOff = () => {
    getPaddingFromBody();
    header.classList.remove('header--dropdown');

    header.querySelectorAll('.mobile-nav__nav-item--sub').forEach((el) => {
      el.classList.remove('mobile-nav__nav-item--sub');
    });

    header.querySelectorAll('.mobile-dropdown__sub--active').forEach((el) => {
      el.classList.remove('mobile-dropdown__sub--active');
      el.style.maxHeight = null;
    });
  };

  if (burger) {
    burger.addEventListener('click', () => {
      if (header.classList.contains('header--dropdown')) {
        menuOff();
      } else {
        header.classList.add('header--dropdown');
        getPaddingOnBody();
      }
    });
  }
}