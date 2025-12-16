import './popUp.scss';
/* eslint-disable */
import {
  getPaddingOnBody,
  getPaddingFromBody,
} from '../../utils/utils';
/* eslint-enable */

// Классы попапов, которые не должны влиять на разблокировку скролла.
const POPUP_IGNORE_CLASSES = ['cookie', 'modal-zone-info'];

const body = document.querySelector('body');

// Общая функция открытия модалки
const openPopup = (options) => {
  const {
    template,
    blockScroll = true,
    redirect,
    overlay = {
      use: true,
      closeOnClick: true,
    },
    esc = {
      closeOnEsc: true,
    },
  } = options;

  const popUpName = template.replace(/^[#.]/, ''); // убираем # или .
  const templateElement = document.querySelector(`#${popUpName}`);

  if (!templateElement) {
    console.warn(`#${popUpName} модального окна не существует.`);
    return;
  }

  if (document.querySelector(`.${popUpName}`)) {
    console.warn(`Модалка ${popUpName} уже открыта.`);
    return;
  }

  const templateContent = templateElement.content.cloneNode(true);
  const popup = templateContent.querySelector(`.${popUpName}`);

  if (!popup) {
    console.error(`В шаблоне #${popUpName} нет элемента с классом .${popUpName}`);
    return;
  }

  body.append(popup);

  const overlayEl = popup.querySelector('.popUp__overlay');
  const closes = popup.querySelectorAll('.popUp__close');

  // Создаём строку вида ":not(.cookie):not(.modal-zone-info)".
  function buildPopupSelector() {
    const exclude = POPUP_IGNORE_CLASSES.map(cls => `:not(.${cls})`).join('');
    return `.popUp${exclude}`;
  }

  function closePopup() {
    popup.remove();

    // Разблокируем скролл только если больше нет открытых попапов (кроме исключений)
    if (blockScroll && !document.querySelector(buildPopupSelector())) {
      getPaddingFromBody();
    }

    document.removeEventListener('keydown', onPopupEscPress);

    if (redirect) {
      setTimeout(() => {
        window.location.href = redirect;
      }, 300);
    }
  }

  function onPopupEscPress(evt) {
    if (!esc.closeOnEsc) return;
    if (evt.code !== 'Escape') return;

    evt.preventDefault();
    // Закрываем только текущую модалку
    closePopup();
  }

  if (blockScroll) getPaddingOnBody();

  if (overlayEl) {
    if (overlay.use && overlay.closeOnClick) {
      overlayEl.addEventListener('click', closePopup);
    } else if (!overlay.use) {
      overlayEl.remove();
    }
  }

  closes.forEach((close) => close.addEventListener('click', closePopup));

  // ESC только если включено в опциях
  if (esc.closeOnEsc) {
    document.addEventListener('keydown', onPopupEscPress);
  }
};

// Основная функция summonPopUp с поддержкой старого и нового вызова
const summonPopUp = (arg1, arg2, arg3) => {
  // Новый вариант: передан объект
  if (typeof arg1 === 'object' && arg1 !== null) {
    const {
      template,
      blockScroll = true,
      redirect,
      overlay = {
        use: true,
        closeOnClick: true,
      },
      esc = {
        closeOnEsc: true,
      },
    } = arg1;

    if (!template) {
      console.warn('Не передан template для модалки');
      return;
    }

    openPopup({
      template,
      blockScroll,
      redirect,
      overlay,
      esc,
    });
  } else if (typeof arg1 === 'string') {
    // Старый вариант: строка + опции
    const template = arg1;
    const blockScroll = arg2 !== undefined ? arg2 : true;
    const redirect = arg3;

    openPopup({
      template,
      blockScroll,
      redirect,
      overlay: {
        use: true,
        closeOnClick: true,
      },
      esc: {
        closeOnEsc: true,
      },
    });
  } else {
    console.warn('Неверные аргументы для summonPopUp');
  }
};

// Функция removePopUp с безопасной анимацией и поддержкой нескольких попапов
const removePopUp = (arg, forceBlockScroll = true) => {
  if (!arg) return;

  let popup = null;
  let blockScroll = forceBlockScroll; // по умолчанию true
  let redirect;

  // Если строка.
  if (typeof arg === 'string') {
    const popUpName = arg.replace(/^[#.]/, ''); // убираем # или .
    popup = document.querySelector(`.${popUpName}`);
  }

  // Если объект.
  else if (typeof arg === 'object' && arg !== null) {
    if (arg.template) {
      const popUpName = arg.template.replace(/^[#.]/, '');
      popup = document.querySelector(`.${popUpName}`);
    }
    if (arg.blockScroll !== undefined) blockScroll = arg.blockScroll;
    if (arg.redirect) redirect = arg.redirect;
  }

  if (!popup) return;

  // Удаляем попап.
  popup.remove();

  // Разблокируем скролл.
  if (blockScroll) {
    getPaddingFromBody();
  }

  // Редирект
  if (redirect) {
    setTimeout(() => {
      window.location.href = redirect;
    }, 300);
  }
};

export {
  summonPopUp,
  removePopUp,
};
