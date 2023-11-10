document.addEventListener('DOMContentLoaded', function () {
    const glider = new Glider(document.querySelector('.glider'), {
      slidesToShow: 10,
      slidesToScroll: 5,
      draggable: false,
      dots: '.dots',  // Corregir aquí
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });
    
    
  
    glider.scroll((currentSlide) => {
      const prevButton = document.querySelector('.glider-prev');
      const nextButton = document.querySelector('.glider-next');
      
    });glider.refresh(true);
  });

  