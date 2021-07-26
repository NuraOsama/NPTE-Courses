(function ($) {

 
// owl slider
var owlslider = $('.owl-slider');
owlslider.owlCarousel({

   items:1,
   loop:true,
   nav:false,
   dots:true,
   rtl:true,
   margin:20,
   autoplay:true,
   smartSpeed:3000,
   autoplaySpeed: 3000,
   autoplayTimeout:3000,
   autoplayHoverPause: true,
   animateIn: 'fadeIn',
    animateOut: 'fadeOut'
   
  });

  // owl flashcards
 var owlflashcards = $('.owl-flashcards');
 owlflashcards.owlCarousel({

    items:2,
    loop:true,
    nav:false,
    dots:true,
    rtl:true,
    margin:15,
    autoplay:true,
    smartSpeed:3000,
    autoplaySpeed: 3000,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
   1440:{
     items:2,

   },

   1024:{

     items:2,

   },

   991:{
     items:1,
 
   },

   768 : {

     items:1,
      
   },

   766 : {

    items:1,
     
  },


  575 : {

     items:1,
      
   },

   500 : {

     items:1,
      
   },

  
  425: {

     items:1,
              
   },

   375: {

     items:1,
              
   },

   320: {

       items:1,
     
   },
   300: {

    items:1,
  
   },
    200: {

    items:1,

   }

   }
 
});
  
})(jQuery);    