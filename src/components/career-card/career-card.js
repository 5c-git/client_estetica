import './career-card.scss';
import {
  summonPopUp,
  removePopUp,
} from '../popUp/popUp';

const cards = document.querySelectorAll('.career-card');
cards.forEach((card) => {
  const template = card.cloneNode(true);
  const toggle = card.querySelector('.career-card__more');
  if (toggle) {
    toggle.addEventListener('click', () => {
      summonPopUp({
        template: '#modal--more',
        blockScroll: true,
        overlay: {
          use: true,
          closeOnClick: true,
        },
        esc: {
          closeOnEsc: true,
        },
      });

      const modal = document.querySelector('.modal');
      const wrapper = modal.querySelector('.modal__wrapper');
      wrapper.appendChild(template);
    });
  }
});