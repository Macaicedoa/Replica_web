document.addEventListener('DOMContentLoaded', function () {
  var glide = new Glide('.glide', {
    type: 'slider',
    perView: 9,
    focusAt: 0,
    
    startAt: 0,
    bound: true,
    rewind: false,
    breakpoints: {
      2500: { perView: 9 },
      2400: { perView: 8 },
      2100: { perView: 7 },
      1800: { perView: 6 },
      1500: { perView: 5 },
      1300: { perView: 4 },
      1000: { perView: 3 },
      850:  { perView: 2 },
      550:  { perView: 1 },
      450:  { perView: 1 }
    }
  });

  glide.on('run.after', function () {
    var isEnd = glide.index === 2;
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
  });

  var prevButton = document.querySelector('.glide__arrow--left');
  if (prevButton) {
    prevButton.classList.add('hidden');
  }

  glide.mount();
});
