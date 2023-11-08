document.addEventListener('DOMContentLoaded', function () {
    const glider = new Glider(document.querySelector('.glider'), {
      slidesToShow: 10,
      slidesToScroll: 3,
      draggable: false,
      dots: '',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });
    
    
  
    glider.scroll((currentSlide) => {
      const prevButton = document.querySelector('.glider-prev');
      const nextButton = document.querySelector('.glider-next');
      if (currentSlide === 0) {
        prevButton.disabled = "";
      } else {
        prevButton.disabled = false;
      }
      if (currentSlide === glider.slides.length - 1) {
        nextButton.disabled = true;
      } else {
        nextButton.disabled = false;
      }
    });glider.refresh(true);
  });

  