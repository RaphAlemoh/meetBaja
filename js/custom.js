// (function($) {
//   // Navigation scrolls
//   $(".navbar-nav li a").on('click', function(event) {
//     $('.navbar-nav li').removeClass('active');
//     $(this).closest('li').addClass('active');
//     var $anchor = $(this);
//     var nav = $($anchor.attr('href'));
//     if (nav.length) {
//       $('html, body').stop().animate({
//         scrollTop: $($anchor.attr('href')).offset().top
//       }, 1500, 'easeInOutExpo');

//       event.preventDefault();
//     }
//   });
  
//   $(".navbar-collapse a").on('click', function() {
//     $(".navbar-collapse.collapse").removeClass('in');
//   });

// })(jQuery);
