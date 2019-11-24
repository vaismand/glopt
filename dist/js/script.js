$(document).ready(function(){
  $('.feedback_carousel').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      arrows: true,
      variableWidth: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
      responsive: [
          {
            breakpoint: 800,
            settings: {
              arrows: false,
              infinite: true,
              dots: false
              }
          },
          {
              breakpoint: 450,
              settings: {
                  arrows: false,
              }
          }
      ]
  });
});
