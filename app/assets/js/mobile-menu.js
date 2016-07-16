// This file is transpiled
$(function(){  

  function MobileMenu({position = "left", width = 300, type = "horizontal"}){
    let opened = false;
   
    function menuTranslate(arg){
     $('.mobile-wrapper').css("transform", 'translateX('+ arg +'px)');     
    }
    function showLevel(arg){ 
      arg.addClass("opened");
      arg.find("ul").eq(0).addClass("opened");

      if (type == "horizontal")  {
         arg.prepend('<span class="hide-level"></span>');
         setTimeout(() => {
          arg.find(".hide-level").css("opacity", "1");
        }, 100)
      }
      if (type == "vertical") {
        arg.siblings("li").removeClass("opened");
        arg.siblings("li").find(".opened").removeClass("opened");
      }
      
    }
    function hideLevel(arg) {
      arg.removeClass("opened");
      arg.find(".opened").removeClass("opened");

      if (type == "horizontal")  {
        arg.find(".hide-level").remove();
      }
    }

    $('.mobile-wrapper').on("showMenu", () => menuTranslate(width));
    $('.mobile-wrapper').on("hideMenu", () => menuTranslate(0));
    $('.mobile-menu-trigger').on("click", function(){
      if (opened === true) {
        $('.mobile-wrapper').trigger("hideMenu");
        setTimeout(() => {
          $('.mobile-nav .opened').removeClass("opened");
          $('.mobile-nav .hide-level').remove();
          $('.mobile-nav .reverse-caret').removeClass("reverse-caret")
        }, 300);
       
        opened = false;          
      } else {
        $('.mobile-wrapper').trigger("showMenu");
        opened = true;          
      }      
    });
    $('.mobile-nav').width(width).addClass(type);



    // Optional (can be rendered in Razor)
    function hasChildren(arg) {  
      if(arg.children("ul").length > 0) {
        arg.addClass("hasChildren");
        arg.find("a").eq(0).addClass("hasChildren");
      }
    }
    $('.mobile-nav li').each(function(){     
      hasChildren($(this));
    }); 
    // End

    // Open level
    $('.mobile-nav').on("click", "a", function(e) {  
      const href = $(this).attr("href");
      const $target =  $(this).parent(".hasChildren");   
      const $typeHorizontal = $('.mobile-nav').hasClass("horizontal");    
      const $typeVertical = $('.mobile-nav').hasClass("vertical");    
      if( href == "#" || href =="" ) {
        e.preventDefault();
      }      
      if ($typeHorizontal) {
        showLevel($target);
      } 
      if ($typeVertical) {
        if ($target.hasClass("opened")) {
          $(this).removeClass("reverse-caret");
          hideLevel($target);
        } else {
          showLevel($target);
          $(this).addClass("reverse-caret");
        }
      }
      
    });

    // Hide level
    $('.mobile-nav').on("click", ".hide-level", function(){
      const $target = $(this).parent("li");      
      hideLevel($target);
    });

  }

  //Initialize level
  MobileMenu({type: "horizontal"});
 
});