function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}


$(document).ready(function(){
  // Contact us form
    // (function (w,i,d,g,e,t,s) {w[d] = w[d]||[];t= i.createElement(g);
    //   t.async=1;t.src=e;s=i.getElementsByTagName(g)[0];s.parentNode.insertBefore(t, s);
    // })(window, document, '_gscq','script','//widgets.getsitecontrol.com/60893/script.js');

  // Navbar scroll effect
  var animateNavbar = throttle(function() {
    if ($(window).scrollTop() > 100) {
      $('nav').addClass("nav-scrolled");
    } else {
      $('nav').removeClass("nav-scrolled");
    }
  }, 50);

  $(window).scroll(animateNavbar)

  // Scroll-down button
  $(".scroll-down").click(function() {
      $('html,body').animate({
          scrollTop: $("#main-content").offset().top}, 'slow');
  });

  // Background slideshow
  $('#slideshow').cycle({
    fx: 'fade',
    speed: 1800,
    timeout:  3500
  });

  // Products Carousel
  $('.carousel-cards').slick({
    prevArrow: $('#left-button'),
    nextArrow: $('#right-button'),
    autoplay: true,
    autoplaySpeed: 2000
  });

  var bullets = $('.bullets div')
  var current = bullets[0]

  $('.carousel-cards').on('swipe afterChange', function(event, slick, direction){
    current.classList.remove('current');
    var counter = $('.slick-active').attr('data-slick-index')
    current = bullets[counter];
    current.classList.add('current');
  });
});


