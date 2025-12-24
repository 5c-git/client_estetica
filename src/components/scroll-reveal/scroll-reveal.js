
import AOS from 'aos';

AOS.init();

// Задаём случайное значения для задержки анимации AOS на карточках с проектами.
const AosInit = (item) => {
  document.querySelectorAll(item).forEach((el) => {
    const delay = Math.floor(Math.random() * Math.floor(10)) * 100;
    el.dataset.aosDelay = delay;
    el.dataset.aos = 'fade-up';
  });

  AOS.init({
    once: true,
  });
};

AosInit('.scroll-reveal');