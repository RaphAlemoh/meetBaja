(function($) {
//   // Navigation scrolls
  $(".navbar-nav li a").on('click', function(event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });
  
  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });


const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item');


$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    $('body').toggleClass("offcanvas-active");
});

$(".btn-close").click(function(e){
    e.preventDefault();
    $(".navbar-collapse").removeClass("show");
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    $("body").removeClass("offcanvas-active");
}); 


$(".menu-nav-item").click(function(e){
    $(".btn-close").click();
})

})(jQuery);
