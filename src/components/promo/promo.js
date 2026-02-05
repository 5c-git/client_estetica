import './promo.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  summonAlert,
  removeAlert,
} from '../alert/alert';

gsap.registerPlugin(ScrollTrigger);

const startAllVideoInOneTime = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const videos = Array.from(document.querySelectorAll('.promo__video'));
    if (!videos.length) return;

    Promise.all(
      videos.map((video, index) => {
        const videoNumber = index + 1;

        // Уже готово
        if (video.readyState >= 3) {
          summonAlert({
            template: '#alert--request',
            text: `Видео ${videoNumber} уже было готово`,
          });

          return Promise.resolve();
        }

        // Ждём canplay
        return new Promise(resolve => {
          video.addEventListener(
            'canplay',
            () => {
              summonAlert({
                template: '#alert--request',
                text: `Видео ${videoNumber} загрузилось и готово`,
              });
              resolve();
            },
            { once: true }
          );
        });
      })
    ).then(() => {
      videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
      });

      videos.forEach(video => video.play());

      summonAlert({
        template: '#alert--request',
        text: 'Все видео из блока .promo загрузились и запустились с первого кадра!',
      });
      console.log('Все видео из блока .promo загрузились и запустились с первого кадра!');
    });
  });
};

startAllVideoInOneTime();


const initPromoAnimation = () => {
  // ScrollTrigger.matchMedia() официально устарел начиная с GSAP 3.11.0.
  // Теперь вместо него нужно использовать gsap.matchMedia(), который работает идентично, но поддерживает современный API и синхронизацию с GSAP Context (для корректной очистки анимаций при смене breakpoints).
  const mm = gsap.matchMedia();

  const deskstopAnimation = () => {
    const ctx = gsap.context(() => {
      console.log('deskstopAnimation init');
      const promos = document.querySelectorAll('.promo');
      promos.forEach((promo) => {
        const wrapper = promo.querySelector('.promo__wrapper');
        const leftVideo = promo.querySelector('.promo__banner--left');
        const rightVideo = promo.querySelector('.promo__banner--right');
        const centerVideo = promo.querySelector('.promo__banner--center');
        const blackOverlay = promo.querySelector('.promo__black-overlay');

        gsap.timeline({
          scrollTrigger: {
            trigger: promo,
            start: 'top center',
            end: '+=200%',
            scrub: true,
            pin: true, // Фиксируем блок на экране пока идет анимация.
            pinSpacing: true,
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
          // Сливаем карточки вместе.
          .to(wrapper, {
            gap: 0,
          })
          .to(leftVideo, {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }, '<')
          .to(rightVideo, {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }, '<')
          // Плавно появляется чёрная область.
          .to(blackOverlay, {
            opacity: 1,
          }, '<')
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

  const mobileAnimation = () => {
    const ctx = gsap.context(() => {
      console.log('mobileAnimation init');
      const promos = document.querySelectorAll('.promo');
      promos.forEach((promo) => {
        const wrapper = promo.querySelector('.promo__wrapper');
        const leftVideo = promo.querySelector('.promo__banner--left');
        const rightVideo = promo.querySelector('.promo__banner--right');
        const centerVideo = promo.querySelector('.promo__banner--center');
        const blackOverlay = promo.querySelector('.promo__black-overlay');

        gsap.timeline({
          scrollTrigger: {
            trigger: promo,
            start: 'top center',
            end: '+=200%',
            scrub: true,
            pin: true, // Фиксируем блок на экране пока идет анимация.
            pinSpacing: true,
            invalidateOnRefresh: true,
          }
        })
          // Левое и правое видео выезжают к центру.
          .from(leftVideo, {
            xPercent: -150,
            duration: 2,
          })
          .from(rightVideo, {
            xPercent: 150,
            duration: 2,
          }, '<')
          .to(leftVideo, {
            duration: 1,
          })
          .to(rightVideo, {
            duration: 1,
          }, '<')
          // Сливаем карточки вместе.
          .to(wrapper, {
            gap: 0,
          })
          .to(leftVideo, {
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }, '<')
          .to(rightVideo, {
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
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
    return mobileAnimation();
  });
};

export default initPromoAnimation;
