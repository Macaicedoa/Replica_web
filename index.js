document.addEventListener('DOMContentLoaded', function () {
    const glider = new Glider(document.querySelector('.glider'), {
      slidesToShow: 10,
      slidesToScroll: 5,
      draggable: false,
      dots: '.dot',  // Corregir aquí
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
      itemWidth: 268,
    });
    
    
  
    glider.on('glider-slide-hidden', (event, index) => {
      const totalSlides = glider.slides.length;
  
      // Verifica si la siguiente diapositiva está fuera de la vista (última diapositiva)
      if (index === totalSlides - 2) {
        // Muestra un alert con el total de diapositivas
        alert(`¡Has llegado a la última diapositiva! Total de diapositivas: ${totalSlides}`);
        // Puedes agregar aquí cualquier acción adicional que desees realizar
      }
    });
  
    glider.refresh(true);
  });
  

