import './configurator.scss';

const configurator = document.querySelector('.configurator');
if (configurator) {
  const form = configurator.querySelector('.configurator__form');
  const images = configurator.querySelectorAll('.configurator__result img');

  const updateFurnitureImage = () => {
    // 1. Собираем выбранные значения фильтров
    const selectedFilters = {};
    const formData = new FormData(form);

    formData.forEach((value, key) => {
      selectedFilters[key] = value;
    });

    // 2. Перебираем картинки
    images.forEach(img => {
      let match = true;

      // 3. Проверяем все data-* картинки
      for (const [key, value] of Object.entries(selectedFilters)) {
        const dataValue = img.dataset[key];

        if (dataValue !== value) {
          match = false;
          break;
        }
      }

      img.classList.toggle('active', match);
    });
  };

  form.addEventListener('change', updateFurnitureImage);
  updateFurnitureImage();
}
