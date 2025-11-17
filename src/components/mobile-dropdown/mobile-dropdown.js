import './mobile-dropdown.scss';

const buttons = document.querySelectorAll('.mobile-dropdown__sub-in');
buttons.forEach((button) => {
  const parent = button.parentElement;
  const container = parent.querySelector('.mobile-dropdown__sub');
  button.addEventListener('click', () => {
    if (container && !container.classList.contains('mobile-dropdown__sub--active')) {
      container.classList.add('mobile-dropdown__sub--active');
      container.style.maxHeight = `${container.scrollHeight}px`;
    } else {
      container.classList.remove('mobile-dropdown__sub--active');
      container.style.maxHeight = null;
    }
  });
});

const subOut = document.querySelector('.mobile-dropdown__sub-out');
if (subOut) {
  subOut.addEventListener('click', () => {
    document.querySelectorAll('.mobile-nav__nav-item--sub').forEach((el) => {
      el.classList.remove('mobile-nav__nav-item--sub');
    });

    document.querySelectorAll('.mobile-dropdown__sub--active').forEach((el) => {
      el.classList.remove('mobile-dropdown__sub--active');
      el.style.maxHeight = null;
    });
  });
}