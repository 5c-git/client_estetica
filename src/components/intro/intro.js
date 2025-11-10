import './intro.scss';

const initIntroAnimation = () => {
  const intro = document.querySelector('.intro');
  const reels = document.querySelector('.reels');

  if (!intro || !reels) return;

  const loader = intro.querySelector('.intro__loading');
  const video = intro.querySelector('.intro__media video');
  const reelsItems = reels.querySelectorAll('.reels__item');
  const reelsNumbers = reels.querySelectorAll('.reels__numbers');
  const reelsProgress = reels.querySelector('.reels__progress-value');

  let animationStarted = false;

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];

    // Запуск анимации только один раз, когда блок действительно виден.
    if (entry.isIntersecting && !animationStarted) {
      animationStarted = true;

      reelsItems.forEach(item => item.style.animationPlayState = 'running');
      reelsNumbers.forEach(num => num.style.animationPlayState = 'running');
      reelsProgress.style.animationPlayState = 'running';

      const onProgressEnd = () => {
        loader.classList.add('intro__loading--hidden');
        video.play();
        reelsProgress.removeEventListener('animationend', onProgressEnd);
      };

      reelsProgress.addEventListener('animationend', onProgressEnd);

      loader.addEventListener('transitionend', () => {
        intro.classList.add('intro--show');
      });
    }
  }, {
    threshold: 0.3, // Блок должен быть хотя бы на 30% виден.
  });

  // Наблюдаем за появлением интро-блока в зоне видимости.
  observer.observe(intro);
};

window.addEventListener("load", () => {
  initIntroAnimation();
});
