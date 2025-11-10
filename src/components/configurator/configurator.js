import './configurator.scss';

const configurator = document.querySelector('.configurator');
if (configurator) {
  const form = document.querySelector('.configurator__form');
  const images = document.querySelectorAll('.configurator__result img');

  const updateFurnitureImage = () => {
    const interior = form.elements.interior.value;
    const fabric = form.elements.fabric.value;
    const color = form.elements.color.value;

    images.forEach(img => {
      const match =
        img.dataset.interior === interior &&
        img.dataset.fabric === fabric &&
        img.dataset.color === color;

      img.classList.toggle('active', match);
    });
  };

  form.addEventListener('change', updateFurnitureImage);
  updateFurnitureImage();
}
