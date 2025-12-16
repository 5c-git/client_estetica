import './promo.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initPromoAnimation = () => {
  // ScrollTrigger.matchMedia() официально устарел начиная с GSAP 3.11.0.
  // Теперь вместо него нужно использовать gsap.matchMedia(), который работает идентично, но поддерживает современный API и синхронизацию с GSAP Context (для корректной очистки анимаций при смене breakpoints).
  const mm = gsap.matchMedia();

  const deskstopAnimation = () => {
    const ctx = gsap.context(() => {
      const promos = document.querySelectorAll('.promo');
      promos.forEach((promo) => {
        const leftVideo = promo.querySelector('.promo__video--left');
        const rightVideo = promo.querySelector('.promo__video--right');
        const centerVideo = promo.querySelector('.promo__video--center');
        const blackOverlay = promo.querySelector('.promo__black-overlay');

        gsap.timeline({
          scrollTrigger: {
            trigger: promo,
            start: 'top center',
            end: '+=200%',
            scrub: true,
            pin: true, // Фиксируем блок на экране пока идет анимация.
            pinSpacing: true,
            // markers: true,
            invalidateOnRefresh: true,
          }
        })
          // Левое и правое видео выезжают к центру.
          .from(leftVideo, {
            x: '-50vw',
            duration: 2,
          })
          .from(rightVideo, {
            x: '50vw',
            duration: 2,
          }, '<')
          .to(leftVideo, {
            duration: 1,
          })
          .to(rightVideo, {
            duration: 1,
          }, '<')
          // Плавно появляется ЧЁРНАЯ область
          .to(blackOverlay, {
            opacity: 1,
          })
          // Центральное видео появляется через opacity.
          .to(centerVideo, {
            opacity: 1,
          })
          .to(centerVideo, {
            duration: 1,
          })
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

export default initPromoAnimation;