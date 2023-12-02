document.addEventListener('DOMContentLoaded', function () {
  var glide;
  function initializeGlider() {
    glide = new Glide('.glide', {
      type: 'slider',
      perView: 9,
      focusAt: 0,
      dragThreshold: false,
      startAt: 0,
      bound: true,
      rewind: false,
      gap: 0,
      breakpoints : {
        2500: { perView: 9 },
        2200: { perView: 8 },
        2175: { perView: 8 },
        2150: { perView: 8 },
        2125: { perView: 8.7 },
        2100: { perView: 7.6 },
        2075: { perView: 7.5 },
        2050: { perView: 7.8 },
        2025: { perView: 7.8 },
        2000: { perView: 7.8 },
        1975: { perView: 7.1 },
        1950: { perView: 7 },
        1925: { perView: 6.95 },
        1900: { perView: 6.9 },
        1875: { perView: 6.7 },
        1850: { perView: 6.6 },
        1825: { perView: 6.5 },
        1800: { perView: 6.8 },
        1775: { perView: 6.8 },
        1750: { perView: 6.7 },
        1725: { perView: 6.5 },
        1700: { perView: 6 },
        1675: { perView: 6 },
        1650: { perView: 6 },
        1625: { perView: 6 },
        1600: { perView: 5.7 },
        1575: { perView: 5.7 },
        1550: { perView: 5.6 },
        1525: { perView: 5.6 },
        1500: { perView: 5.6 },
        1475: { perView: 5.5 },
        1450: { perView: 5 },
        1425: { perView: 5 },
        1400: { perView: 5 },
        1375: { perView: 5 },
        1350: { perView: 4.7 },
        1325: { perView: 4.7},                                    
        1300: { perView: 4.7},
        1275: { perView: 4.66 },
        1250: { perView: 4.61},
        1225: { perView: 4.55},
        1200: { perView: 4.55 },
        1175: { perView: 4.45 },
        1150: { perView: 4.35},
        1125: { perView: 4.11 },
        1100: { perView: 4.14 },
        1075: { perView: 3.9 },
        1050: { perView: 3.9 },
        1025: { perView: 3.6 },
        1000: { perView: 3.4 },
        975: { perView: 3.4 },
        950: { perView: 3.3 },
        925: { perView: 3.25 },
        900: { perView: 3.1 },
        875: { perView: 3.1 },
        850: { perView: 3 },
        825: { perView: 2.9 },
        800: { perView: 2.8 },
        775: { perView: 2.7 },
        750: { perView: 2.7 },
        725: { perView: 2.6 },
        700: { perView: 2.4 },
        675: { perView: 2.3 },
        650: { perView: 2.2 },
        625: { perView: 2.1 },
        600: { perView: 2 },
        575: { perView: 1.9 },
        550: { perView: 1.8 },
        525: { perView: 1.7 },
        500: { perView: 1.6 },
        475: { perView: 1.6 },
        450: { perView: 1.4 },
        425: { perView: 1.3 },
        400: { perView: 1.35 },
        375: { perView: 1.2 },
        350: { perView: 1.1},
        325: { perView: 1 },
        300: { perView: .9 },
        275: { perView: .8 },
      },
    });

    glide.on('run.after', function () {
      updateButtons();
    });

    var prevButton = document.querySelector('.glide__arrow--left');
    if (prevButton) {
      prevButton.classList.add('hidden');

    }

    glide.mount();
    updateButtons();
  
  }

  function updateButtons() {
    var isEnd = glide.steps === '<';
    var isFirst = glide.index === 0;

    var nextButton = document.querySelector('.glide__arrow--right');
    var prevButton = document.querySelector('.glide__arrow--left');

    if (nextButton) {
      if (isEnd) {
        nextButton.classList.add('hidden');
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
  }

  // Inicializa el Glider al cargar la página
  initializeGlider();

  // Vuelve a inicializar el Glider y los botones en cada cambio de tamaño de ventana
  window.addEventListener('resize', function () {
    // Destruye el Glider actual
    glide.destroy();
    // Inicializa un nuevo Glider
    initializeGlider();
    
  });
});
