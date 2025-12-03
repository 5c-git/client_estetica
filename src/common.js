window.addEventListener('load', () => {
  setTimeout(() => {
    window.Corners5ProjectLayout.initPromoAnimation();
    window.Corners5ProjectLayout.initPromoGalleryAnimation();
    window.Corners5ProjectLayout.initParticipantsAnimation();
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

