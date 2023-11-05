new Glider(document.querySelector('.glider'), {
  slidesToShow: 4, // Cantidad de diapositivas visibles
  slidesToScroll: 1, // Cantidad de diapositivas para desplazarse
  itemWidth: 300, // Ancho de cada diapositiva
  draggable: false, // Permitir arrastrar
  dots: '', // Selector de puntos
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
