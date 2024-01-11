$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $('nav a').on('click', function(e) {
        e.preventDefault();
  
        var target = $(this).attr('href');
  
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 400); 
      });

$(window).on('scroll laod',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        $('#menu').on('click', function() {
            $('.navbar ul').toggleClass('show');
          });

});

});

