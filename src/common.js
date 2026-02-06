document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    window.Corners5ProjectLayout.initPromoAnimation();
    window.Corners5ProjectLayout.initPromoGalleryAnimation();
    window.Corners5ProjectLayout.initParticipantsAnimation();
    window.Corners5ProjectLayout.initTestPromoAnimation();
  }, 500);
});

const requestCatalogForms = document.querySelectorAll('.request-catalog__form');
requestCatalogForms.forEach((form) => {
  form.addEventListener('bouncerFormValid', () => {
    const fd = new FormData(form);

    return $.ajax({
      type: 'POST',
      data: fd,
      url: '',
      contentType: false,
      processData: false,
      cache: false,
      async: false,
      dataType: 'json',
      success(data) {
        window.Corners5ProjectLayout.summonAlert({
          template: '#alert--request',
          text: data.text,
        });
      },
      error(data) {
        window.Corners5ProjectLayout.summonAlert({
          template: '#alert--error',
        });
      },
      complete(data) { },
    });
  });
});

const requestForms = document.querySelectorAll('.request__form');
requestForms.forEach((form) => {
  form.addEventListener('bouncerFormValid', () => {
    const fd = new FormData(form);

    return $.ajax({
      type: 'POST',
      data: fd,
      url: '',
      contentType: false,
      processData: false,
      cache: false,
      async: false,
      dataType: 'json',
      success(data) {
        window.Corners5ProjectLayout.summonAlert({
          template: '#alert--request',
          text: data.text,
        });
      },
      error(data) {
        window.Corners5ProjectLayout.summonAlert({
          template: '#alert--error',
        });
      },
      complete(data) { },
    });
  });
});

const cardCatalogForm = document.querySelector('.card-catalog__form');
if (cardCatalogForm) {
  const form = cardCatalogForm;
  form.addEventListener('change', (evt) => {
    console.log(evt.target.value);
  });
}

window.Corners5ProjectLayout.activateRequestButtons({
  submitForm: (form) => {
    const type = form.querySelector('input[name="type"]').value;
    const fd = new FormData(form);

    if (type === 'access') {
      return $.ajax({
        type: 'POST',
        data: fd,
        url: 'https://run.mocky.io/v3/ef8a4488-31a2-4d52-a983-a4ab6ad36107?mocky-delay=4000ms',
        processData: false,
        contentType: false,
        success(data) {
          window.Corners5ProjectLayout.summonAlert('#alert--request');
        },
        error() {
          window.Corners5ProjectLayout.summonAlert('#alert--error');
        },
        complete(data) {
        },
      });
    }
  },
});