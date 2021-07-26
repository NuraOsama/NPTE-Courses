(function ($) {

    "use strict";
    new WOW().init();


    //preloader

    let  mainStatus  = $('.preloader-status'),
    mainBody = $('body'),   
    mainPreloader  = $('.preloader');
    window.onload = function() {
    mainStatus.fadeOut();
    mainPreloader.delay(500).fadeOut('slow');
    mainBody.addClass('loaded').css({
        'overflow': 'auto'
    });
   }
 
   //body fadeIn animation
   mainBody.fadeIn(500);

  //sticky main navbar
  
 $(window).scroll(function () {
  if ($(window).scrollTop()) {
      $('.main-header').addClass('sticky-top').animate({

      }, 4000);     
  } 
  else {

      $('.main-header').removeClass('sticky-top').animate({

      }, 4000);

  }
});

// submenu

$('.navbar-nav .nav-link').click(function() {

  if(!$(this).hasClass('menudrop')) {
      $('.navbar-nav', $(this).parents("ul")).slideUp(400);
      $('.nav-link', $(this).parents("ul")).removeClass('menudrop');
      $(this).next("ul").slideDown(400);
      $(this).addClass('menudrop');
    } else if($(this).hasClass('menudrop')) {
      $(this).removeClass('menudrop');
      $(this).next("ul").slideUp(400);
  }

});

$(document).on('mouseup','body' ,function(e) {
  if($('.navbar-nav .nav-link').hasClass('menudrop')) {
    let targ = $(e.target).closest('ul').length;
    if(!targ) {
      $(".navbar-nav .nav-link").removeClass('menudrop');
      $('.navbar-nav .nav-link').next("ul").slideUp(400);
    }
  }
    
});

//responsive navbar

let navbarcollapse=$(".navbar-light .navbar-collapse");
let navitemcollpase=$(".navbar-light .navbar-nav>.nav-item");
let delay=0;
$(".nav-toggler").click(function(){

  $(this).toggleClass("toggle");
   

  if($(this).hasClass("toggle")){

    $(navbarcollapse).addClass("open");

    $(navitemcollpase).each(function () {
      let $navitem=$(this);
      setTimeout(function () {
          $navitem.addClass("fade");
      }, delay += 40);
    });

    $("body").addClass('hide-flow');
  }

  else{

    $(navbarcollapse).removeClass("open");
    $(navitemcollpase).each(function () {
      let $navitem=$(this);
      setTimeout(function () {
          $navitem.removeClass("fade");
      }, delay -= 40);
    });

    $("body").removeClass('hide-flow');

  }

});


    $(window).resize(function(){
    if ($(window).width() <= 1120){ 

      $(".nav-toggler").removeClass("toggle");
      $(navbarcollapse).removeClass("open");
      $(navitemcollpase).removeClass("fade");
      $("body").removeClass('hide-flow');
    }     
});


   // btn mouseenter && mouseout

   $(".btn,.form-btn,.nav-link").on('mouseenter', function(e) {
      let parentOffset = $(this).offset(),
         relX = e.pageX - parentOffset.left,
         relY = e.pageY - parentOffset.top;
         $(this).find('span').not(".text,.icon").css({top:relY, left:relX})
   })
   .on('mouseout', function(e) {
     let parentOffset = $(this).offset(),
         relX = e.pageX - parentOffset.left,
         relY = e.pageY - parentOffset.top;
         $(this).find("span").not(".text,.icon").css({top:relY, left:relX})
   });


   
  // checkbox Route navigation

  $(".radio-link").each(function(){

    if(this.href==window.location.href){

      $(this).addClass("active");
      $(this).parents(".custom-control").find(".custom-control-input").attr('checked', true);
    }
  
  
  });

  $('.navbar-nav .custom-control-input').on('change', function(event) {
    if($(event.target).is(':checked')){
 
       window.location.href=$(this).parents(".custom-control").find(".radio-link").attr('href');
    
    }
    
  });

  if($("#administrator").is(':checked')){

    $("#administrator-text").show();
    $("#instractor-text").hide();
    $("#learner-text").hide();

  }
  else if($("#instractor").is(':checked')){

    $("#instractor-text").show();
    $("#administrator-text").hide();
    $("#learner-text").hide();
  }
  else{

    $("#learner-text").show();
    $("#instractor-text").hide();
    $("#administrator-text").hide();
  }

  //card list sub menu

  $('.card-list .main-nav-link').on('click', function() {
    if(!$(this).hasClass('menudrop')) {
        $('.card-sub-menu', $(this).parents("ul")).slideUp(400);
        $('.main-nav-link', $(this).parents("ul")).removeClass('menudrop');
        $(this).next("ul").slideDown(400);
        $(this).addClass('menudrop');
        $(".submenu-item").addClass('toggle');
      } else if($(this).hasClass('menudrop')) {
        $(this).removeClass('menudrop');
        $(this).next("ul").slideUp(400);
        $(".submenu-item").removeClass('toggle');
    }
});
  
  // table checked checkbox

  $(".table thead .custom-control-input").on('change',function(event) {
    if($(event.target).is(':checked')){

      console.log(this);
      $(".table tbody .custom-control-input").prop("checked",true);
      $(".table").addClass('toggle-checkbox');

    }
    else{

      $(".table tbody .custom-control-input").prop( "checked",false);
      $(".table").removeClass('toggle-checkbox');
      

    }
  })

  // conference action toggle
  $(".conference-actionsbtn").hide();
  $(".conferenceusers-table .custom-control-input").on('change',function(event) {
    if($(event.target).is(':checked')){

      $(".conference-actionsbtn").fadeIn();

    }
    else{

      $(".conference-actionsbtn").fadeOut();

    }
  })

    // event action collapse

  $(".collapse-checkbox .custom-control-input").on('change',function(event) {

    if($(event.target).is(':checked')){

      $(this).parents('.collapse-content').find(".collapse").slideDown(500);
     
    }
    else{

      $(this).parents('.collapse-content').find(".collapse").slideUp(500);

    }
  })

  // modal
   
   $(document).on('show.bs.modal', function (event) {
    if (!event.relatedTarget) {
        $('.modal').not(event.target).modal('hide');
    
    };
    if ($(event.relatedTarget).parents('.modal').length > 0)
     {
        $(event.relatedTarget).parents('.modal').modal('hide');
       
    };
    $('body').addClass('modal-open');
    $('.modal .modal-dialog').addClass('bounceIn   animated show modal-dialog-centered');
    $('.modal .modal-dialog').removeClass('bounceOut hide');
    mainBody.addClass('loaded').css({
      'overflow': 'hidden'
  });
  });

  $(document).on('shown.bs.modal', function () {

    if ($('body').hasClass('modal-open') == false) {
        $('body').addClass('modal-open');
        $('.modal .modal-dialog').addClass('bounceIn   animated show modal-dialog-centered');
        $('.modal .modal-dialog').removeClass('bounceOut hide');
        mainBody.addClass('loaded').css({
          'overflow': 'hidden'
      });
        
    };
   
    
  });

  $(document).on('hidden.bs.modal', function () {
  
    mainBody.addClass('loaded').css({
      'overflow': 'auto'
  });
        
  });

  
   // auto complete
   $(".form-control").attr("autocomplete","off");


   // modal inputs
		
		$(" .form-control").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("has-content");
			}else{
				$(this).removeClass("has-content");
			}
		});



    // search 
  
    $(".search-form .form-control").on("keyup", function(event){

      let searchVal=event.target.value;
      let searchicon=$(this).parent().find(".search-icon");
      let searchclose=$(this).parent().find(".search-close");

      if(searchVal){

       $(searchicon).hide();
       $(searchclose).show();

       $(searchclose).click(function(){
 
        event.target.value="";
        $(this).hide();
        $(searchicon).show();

       });

     }
     else{

      $(".search-icon").show();
      $(".search-close").hide();

   }
  });
 
 
    // toggle paid courses
   $(".paid-courses").fadeOut();

   $(".toggle-custom").click(function(){
     
    $(".paid-courses").fadeToggle();

   });


    // table sperate

    $("table tbody tr").after('<tr class="tr-spacer"/>');
    $("table tbody tr:last-child").after().remove();

    // toggle enroll

    $(".main-toggle").on( "click",function(event){

      let targetenroll=event.target;

      $(targetenroll).parents('td').addClass('fade-toggle');
      $(targetenroll).parents('.head-box').addClass('fade-toggle');
    
    });

    $(".sub-toggle").click(function(event){

      let targetunenroll=event.target;

      $(targetunenroll).parents('td').removeClass('fade-toggle');
      $(targetunenroll).parents('.head-box').removeClass('fade-toggle');
      

    });

    // toggle synchronize

     $(".minus-text").hide();

     $(".plus-text").click(function(event){
     
      let targetplus=event.target
      $(targetplus).next(".minus-text").show();
       $(this).hide();

    });

    $(".minus-text").click(function(event){

      let targetminus=event.target
      $(targetminus).prev(".plus-text").show();
      $(this).hide();
      
    });

 
// count Input


$(".btn-subtract").click(function(){
  
  let inputcount=$(this).parent().find('.counter');
  let count= parseInt($(inputcount).val()) - 1;
  count= count <= 0 ? 0 : count;
  $(inputcount).val(count);


});

$(".btn-add").click(function(){
  
  let inputcount=$(this).parent().find('.counter');
  let count=parseInt($(inputcount).val()) + 1;
  $(inputcount).val(count);
  
})

// counter toggle

$(".second-counter").hide();
$(".first-box").addClass("active");
$(".first-box").click(function(){
  

  $(this).parents(".counter-group").find(".first-counter").fadeIn();
  $(this).parents(".counter-group").find(".second-counter").hide();
  $(this).addClass("active").siblings().removeClass("active");

})
$(".second-box").click(function(){

  $(this).parents(".counter-group").find(".second-counter").fadeIn();
  $(this).parents(".counter-group").find(".first-counter").hide();
  $(this).addClass("active").siblings().removeClass("active");;
  
})


//collpase list 

$('.collapse').on('show.bs.collapse', function () {
  
  let collaoselist=$(this).parents(".box").find("ul");
  $(collaoselist).children("a").removeClass("collapsed");

});

$('.collapse').on('hide.bs.collapse', function () {
  
  let collaoselist=$(this).parents(".box").find("ul");
  $(collaoselist).children("a").addClass("collapsed");


})

// carousel flashcards

$(".owl-flashcards .front-btn").click(function(){

 $(this).parents(".item").find(".content").addClass("flip");

});

$(".owl-flashcards .back-btn").click(function(){

  $(this).parents(".item").find(".content").removeClass("flip");

})


// add & remove answer content instructor


let countinput = 2;
$(".alert").hide();
 
$(".add-answer").click(function(){

  if(countinput > 7 ){

    $(this).parents("form").find(".alert").fadeIn().show();
     return false;
  }
  else{
  let FormAnswerDiv=$(document.createElement('div')).attr(`class`,`group-answer-${countinput}`);
  $(FormAnswerDiv).html(`<div class="form-group"><input type="text" class="form-control" required/>
    <label class="form-label">Answer</label>
   <span class="overlay-border"></span></div>
   <div class="form-group custom-input">
   <div class="custom-control custom-checkbox">
     <input type="checkbox" id="correct-${countinput}" name="customRadio" class="custom-control-input">
     <label class="custom-control-label" for="correct-${countinput}">Correct</label>
   </div>
  </div>`);

  $(this).parents("form").find(".form-answer").append(FormAnswerDiv);

   countinput++;

  }
})

$(".delete-answer").click(function(){

  if(countinput == 2 ){
 
    return false

  }
  else {
  
    countinput--;
    $(`.group-answer-${countinput}`).remove();

   }

})

// questions courses

$(".box-content-2").hide();
$(".selected-btn").click(function(){

  $(".box-content-1").hide();
  $(".box-content-2").fadeIn();

});

    
   //tooltip
    $('body').tooltip({

      selector: '[data-toggle="tooltip"]',
      boundary: "window",
      container: 'body',
      trigger: 'hover',
      animate: true

  });
  

  //hide the tooltip
   $(document).on('click', ".btn", function () {

       $(this).tooltip('dispose');
   });

   // scroll to top
          
    $(window).scroll(function(){
          if($(this).scrollTop() > 300) {
        
            $(".auto-scroll-to-top").removeClass("non-hover");                 
             $(".auto-scroll-to-top").addClass("visible");  
           } else {
        
            $(".auto-scroll-to-top").addClass("non-hover");
            $(".auto-scroll-to-top").removeClass("visible");
           }        
    });
             

    $('.auto-scroll-to-top').on('click touchend', function(event) {
          $("html, body").animate({scrollTop: 0}, 1000);
           event.preventDefault();
     });


})(jQuery);




