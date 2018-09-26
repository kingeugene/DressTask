$(document).ready(function (){
  $('#myCarousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  $('.dropdown').on('click', function () {
      $(this).find('.dropdown-content').toggleClass('active');
  });
});