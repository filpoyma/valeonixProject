new Swiper('.ingredient__slider', {
    loop:true,
    slidesPerView:'auto',
    centeredSlides:true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 60,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.ingredient__next',
      prevEl: '.ingredient__prev'
    },
    
  });
  
  
  