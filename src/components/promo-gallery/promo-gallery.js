import './promo-gallery.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const initPromoGalleryAnimation = () => {
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
  gsap.to('.promo-gallery', {
    scrollTrigger: {
      trigger: promoGallery,
      start: 'top center',
      end: "+=40%",
    }
  });

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

export default initPromoGalleryAnimation;

// Важно чтобы компоненты подключались по мере своего нахождения на странице иначе расчёт расположения старта анимации будет бажить.
