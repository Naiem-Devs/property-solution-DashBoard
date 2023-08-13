(function($) {
  "use strict";
  

 // menu 
 
 $('.siteBar-btn').click( function (event){ 
  event.preventDefault()
    $('.mobile-menu').toggleClass('siteBars');   
  }); 

 // menu 
  $('.menu-btn').click( function (event){ 
    event.preventDefault()
  $('.side_nav').toggleClass('active');   
}); 

 // menu 
  $('.add_btn').click( function (event){ 
    event.preventDefault()
  $('.add_content').toggleClass('showUl');   
  $('body').toggleClass('overly')
}); 

document.getElementsByClassName('add_content').onclick = function(e) {
  if(e.target != document.getElementsByClassName('content-area')) {
      console.log('You clicked outside');
  } else {
      console.log('You clicked inside');
  }
}

  // owlCarousel
  $(".Renewals").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false
  });

  $('.select_box select').niceSelect();
  $('.ove_select select').niceSelect();

})(jQuery);
