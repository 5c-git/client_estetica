import './promo-gallery.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initPromoGalleryAnimation = () => {
  // ScrollTrigger.matchMedia() официально устарел начиная с GSAP 3.11.0.
  // Теперь вместо него нужно использовать gsap.matchMedia(), который работает идентично, но поддерживает современный API и синхронизацию с GSAP Context (для корректной очистки анимаций при смене breakpoints).
  const mm = gsap.matchMedia();

  const deskstopAnimation = () => {
    const promoGallery = document.querySelector('.promo-gallery');
    if (!promoGallery) return;

    const banners = promoGallery.querySelector('.promo-gallery__banners');
    // Высота баннеров
    const galleryHeight = banners.offsetHeight;

    // Высота окна
    const viewportHeight = window.innerHeight;

    // Берём максимум
    const shiftDistance = Math.max(galleryHeight, viewportHeight);

    // Хак чтобы заголовок задержать в центре.
    // gsap.to('.promo-gallery', {
    //   scrollTrigger: {
    //     trigger: promoGallery,
    //     start: 'top center',
    //     end: "+=40%",
    //   }
    // });

    // Создаём отдельный ScrollTrigger для галереи и сохраняем его/
    const galleryST = ScrollTrigger.create({
      trigger: promoGallery,
      start: "top center",
      end: "+=100%",
      scrub: 1,
      pin: true,
      pinSpacing: true,
      animation: gsap.fromTo('.promo-gallery__banners',
        {
          y: shiftDistance * 0.2,
        },
        {
          y: -shiftDistance * 1.7,
          ease: "none",
        }
      ),
    });

    // Появление текста ровно когда галерея закончила путь/
    gsap.from('.promo-gallery__post-title', {
      scrollTrigger: {
        trigger: promoGallery,
        start: () => galleryST.end,  // Старт когда galleryST закончился.
        end: () => galleryST.end + 200,
        scrub: 0.8,
      },
      opacity: 0,
      y: 50,
      ease: "none",
    });
  };

  mm.add("(min-width: 992px)", () => {
    deskstopAnimation();
  });

  mm.add("(max-width: 991px)", () => {
    // Ничего не делаем — при ресайзе gsap сам уберёт все связанные ScrollTrigger'ы
    // Вручную убираем transform.
    const banners = document.querySelector('.promo-gallery__banners');
    if (banners) {
      banners.style.transform = "";
    }

    // Полная очистка всех ScrollTriggers по этому breakpoint
    // ScrollTrigger.getAll().forEach(st => st.kill());
  });
};

export default initPromoGalleryAnimation;

// Важно чтобы компоненты подключались по мере своего нахождения на странице иначе расчёт расположения старта анимации будет бажить.
