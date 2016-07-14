$(function(){

  
  function menuTranslate(arg){
     $('.mobile-wrapper').css("transform", 'translateX('+arg+'px)');
  }
  var mobileMenu = {
    "opened": false
  };
  console.log(mobileMenu);
  $('.mobile-wrapper').on("showMenu", menuTranslate("300"));
  $('.mobile-wrapper').on("hideMenu", menuTranslate("0"));
	$('.mobile-menu-trigger').on("click", function(){
    if (mobileMenu.opened) {
      $('.mobile-wrapper').trigger("hideMenu");
      mobileMenu.opened = false;
      console.log("true");
    } else {
      $('.mobile-wrapper').trigger("showMenu");
      mobileMenu.opened = true;
      console.log("false");
    }
    
  });


  

});