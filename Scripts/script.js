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
  // Start Mixpanel
    // (function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);
    // mixpanel.init("d37992743c5d4fc52396935fb27571a2");

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
          scrollTop: $("#ecosystem").offset().top}, 'slow');
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
    nextArrow: $('#right-button')
  });

  var bullets = $('.bullets div')
  var current = bullets[0]

  $('.buttons').click(function(){
    current.classList.remove('current');
    var counter = $('.slick-active').attr('data-slick-index')
    current = bullets[counter];
    current.classList.add('current');
  })
});


