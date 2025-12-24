import './participants.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initParticipantsAnimation = () => {
  // ScrollTrigger.matchMedia() официально устарел начиная с GSAP 3.11.0.
  // Теперь вместо него нужно использовать gsap.matchMedia(), который работает идентично, но поддерживает современный API и синхронизацию с GSAP Context (для корректной очистки анимаций при смене breakpoints).
  const mm = gsap.matchMedia();

  const deskstopAnimation = () => {
    const ctx = gsap.context(() => {
      const participants = document.querySelector('.participants');
      if (!participants) return;

      const title = participants.querySelector('.participants__title');
      const cardsWrappers = gsap.utils.toArray(".participants__item");
      const cards = gsap.utils.toArray(".participants__item-pin");
      const firstItem = participants.querySelector('.participants__item');
      if (!firstItem) return; // Без карточек нет смысла пинить.

      const titleHeight = title ? title.offsetHeight : 0;
      const cardHeight = firstItem.offsetHeight / 2;
      const gap = 50;

      const total = cards.length;
      const maxScale = 1;
      const step = 0.025;

      // Генерируем scale для всех карточек.
      const scales = Array.from({ length: total }, (_, i) => {
        const s = maxScale - step * i; // Уменьшаем scale с каждой последующей.
        return s > 0 ? s : 0;
      });

      scales.reverse();

      console.log(titleHeight);

      // 1. Pin заголовка.
      if (title) {
        ScrollTrigger.create({
          trigger: cardsWrappers[0],
          start: () => `top center-=${titleHeight}`,
            end: () => `bottom center+=${titleHeight + gap * (total)}`,
          endTrigger: participants,
          pin: title,
          pinSpacing: false,
          scrub: true,
          // markers: {
          //   fontSize: "24px"
          // },
          invalidateOnRefresh: true,
        });
      }

      // 2. Pin и анимация карточек.
      cardsWrappers.forEach((wrapper, i) => {
        const card = cards[i];
        const scale = scales[i];
        const rotation = i !== total - 1 ? -10 : 0;

        gsap.to(card, {
          scale: scale,
          rotationX: rotation,
          transformOrigin: "center center",
          ease: "none",
          invalidateOnRefresh: true,
          scrollTrigger: {
            trigger: wrapper,
            start: () => `top center-=${titleHeight - gap * i}`,
            end: () => `bottom center+=${titleHeight + gap * (total)}`,
            // end: () => `bottom center+=${gap * (total - 1)}`,
            endTrigger: participants,
            scrub: true,
            pin: wrapper,
            pinSpacing: false,
            // markers: {
            //   indent: 100 * i,
            //   startColor: "#0ae448",
            //   endColor: "#fec5fb",
            //   fontSize: "14px"
            // },
            id: i + 1,
          }
        });
      });
    });

    return () => ctx.revert();
  };

  mm.add("(min-width: 992px)", () => {
    return deskstopAnimation();
  });

  mm.add("(max-width: 991px)", () => {
    // Ничего не делаем — при ресайзе gsap сам уберёт все связанные ScrollTrigger'ы
  });
};

export default initParticipantsAnimation;
