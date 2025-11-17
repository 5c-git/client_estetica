import './mobile-nav.scss';

const mobileNav = document.querySelector('.mobile-nav');
if (mobileNav) {
  const items = mobileNav.querySelectorAll('.mobile-nav__nav-item');
  items.forEach((item) => {
    const sub = item.querySelector('.mobile-nav__sub');
    const openButton = item.querySelector('.mobile-nav__sub-in');

    if (sub && openButton) {
      openButton.addEventListener('click', () => {
        item.classList.add('mobile-nav__nav-item--sub');
      });
    }
  });
}
