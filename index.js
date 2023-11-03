new Glider(document.querySelector('.glider'), {
  slidesToShow: 3, // Cantidad de diapositivas visibles
  slidesToScroll: 1, // Cantidad de diapositivas para desplazarse
  itemWidth: 300, // Ancho de cada diapositiva
  draggable: true, // Permitir arrastrar
  dots: '.dots', // Selector de puntos
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 7,
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
