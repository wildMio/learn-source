(function($){
  const topBtn = $('#topBtn');

  $(document).ready(function() {

    $(window).on('scroll', function() {
      if($(this).scrollTop() > 100) {
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }
    });

    topBtn.on('click', function() {
      $('html, body').animate({scrollTop: 0}, 600);
    });
  
  });

})($);