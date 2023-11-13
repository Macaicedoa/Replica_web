document.addEventListener('DOMContentLoaded', function () {
  var glide = new Glide('.glide', {
    type: 'carousel',
    perView: 9,
    focusAt: 0,
    bound: true,
    breakpoints: {
      1000: {
        perView: 3
      },
      480: {
        perView: 2
      }
    }
  });

  glide.on('run.after', function () {
    var isEnd = glide.index >= glide.length - glide.settings.perView;
    var isFirst = glide.index === 0;
    
    var nextButton = document.querySelector('.glide__arrow--right');
    var prevButton = document.querySelector('.glide__arrow--left');
    
    if (nextButton) {
      if (isEnd) {
        nextButton.classList.add('hidden');
        // Alert cuando llega a la última tarjeta
        alert('¡Estás en la última tarjeta!');
      } else {
        nextButton.classList.remove('hidden');
      }
    }

    if (prevButton) {
      if (isFirst) {
        prevButton.classList.add('hidden');
      } else {
        prevButton.classList.remove('hidden');
      }
    }
  });

  glide.mount();
});
