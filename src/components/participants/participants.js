import './participants.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const initParticipantsAnimation = () => {
//   const section = document.querySelector('.participants');
//   if (!section) return;

//   const cards = gsap.utils.toArray('.participants__item');

//   // Первая карточка остаётся
//   const first = cards.shift();

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: section,
//       start: "center center",
//       end: "+=" + cards.length * 300, // высота скролла
//       scrub: 0.5,
//       pin: true,
//     }
//   });

//   cards.forEach((card, i) => {
//     const offset = (i + 1) * -100; // каждая поднимается чуть выше предыдущей

//     tl.to(card, {
//       yPercent: offset,
//       ease: "none",
//       duration: 1
//     });
//   });
// };


const initParticipantsAnimation = () => {
  const section = document.querySelector('.participants');
  if (!section) return;

  // Берём все карточки в порядке DOM.
  const items = gsap.utils.toArray('.participants__item');
  if (items.length < 2) return; // если меньше 2 карточек — нечего анимировать.

  // Первая карточка остаётся статичной.
  const first = items[0];
  const rest = items.slice(1);

  // Функция для (пере)инициализации анимации — нужна для ресайза.
  const createTimeline = () => {
    // Очистим предыдущие триггеры/анимации связанные с секцией.
    ScrollTrigger.getAll().forEach(st => {
      // Только те, которые привязаны к нашей секции — удаляем.
      if (st.trigger === section || (st.animation && st.animation._targets && st.animation._targets.length && st.animation._targets.some(t => section.contains(t)))) {
        st.kill();
      }
    });

    // Пересчитываем актуальные координаты карточек.
    const firstRect = first.getBoundingClientRect();
    const offsets = items.map(item => {
      const r = item.getBoundingClientRect();
      // Смещение нужно относительно текущего положения в документе.
      // yMove — отрицательное значение означает движение вверх.
      const yMove = firstRect.top - r.top;
      return yMove;
    });

    // Общая длина скролла пропорциональна количеству шагов.
    const totalSteps = rest.length;
    const stepHeight = 220; // контролирует «длину» одного шага. Подправь при необходимости.
    const totalScroll = totalSteps * stepHeight;

    // Timeline с pin'ом секции и scrub.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center center",
        end: "+=" + totalScroll,
        scrub: true,
        pin: true,
        pinSpacing: true,
        //markers: true,
      }
    });

    // Для последовательности добавляем шаги. Каждый шаг — метка.
    rest.forEach((card, i) => {
      const stepLabel = `step${i}`;

      // Добавляем метку — позиции шагов идут один за другим.
      tl.addLabel(stepLabel);

      // 1) Передвигаем текущую карточку к первой карточке (кладём сверху).
      // Используем offsets[indexOfCard] — у items индекс i+1.
      const targetY = (i + 1) * -95; // каждая поднимается чуть выше предыдущей
      console.log(targetY);
      tl.to(card, {
        yPercent: targetY,
        duration: 1,
        ease: "none"
      }, stepLabel);

      // 2) Уменьшаем все предыдущие (старые) карточки.
      // Предыдущие — это items[0..i] (первая и те, что уже легли).
      for (let j = 0; j <= i; j++) {
        const prev = items[j];
        // Чем старше карточка (чем дальше от текущей), тем меньше она становится.
        // Формула: scale = 1 - stepScale * (i - j + 1).
        const stepScale = 0.04; // величина уменьшения за шаг — можешь подправить.
        const scaleTarget = Math.max(0.7, 1 - stepScale * (i - j + 1)); // ограничение, чтобы не стало очень маленьким.
        tl.to(prev, {
          scale: scaleTarget,
          transformOrigin: "top center",
          duration: 1,
          ease: "none"
        }, stepLabel);
      }
    });

    // В конце можно вернуть pointer-events и т.п. при необходимости.
    // Возвращаем сам tl если нужно.
    return tl;
  };

  // Создаем анимацию.
  let tlInstance = createTimeline();

  // При ресайзе пересоздаём анимацию — чтобы пересчитались offsets.
  let resizeTimer;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Уничтожаем все ScrollTrigger'ы связанные с секцией.
      ScrollTrigger.refresh(true); // пересчёт размеров и позиций.
      // Пересоздаем tl.
      tlInstance = createTimeline();
    }, 150);
  };
  window.addEventListener('resize', onResize);

  // Очистка если понадобится (например при SPA навигации).
  // Возвращаем функцию для уничтожения.
  return () => {
    window.removeEventListener('resize', onResize);
    ScrollTrigger.getAll().forEach(st => {
      if (st.trigger === section || (st.animation && st.animation._targets && st.animation._targets.length && st.animation._targets.some(t => section.contains(t)))) {
        st.kill();
      }
    });
    if (tlInstance) tlInstance.kill();
  };
};

export default initParticipantsAnimation;
