
// (function($)
// {
// 	"use strict";
	
	
// 	jQuery(window).on('load', function() {
// 		preloader();
		
		
// 		if(jQuery('.gallery-outer .gallery-items').length > 0){
// 			jQuery('.gallery-outer .gallery-items').filterizr();
// 		}
// 		jQuery('#filter-list li').on("click", function(){
// 			jQuery('#filter-list li').removeClass('active');
// 			jQuery(this).addClass('active');
// 		});
// 	});
	
	
	
	
// 	function preloader(){
// 		jQuery(".preloaderimg").fadeOut();
// 		jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
// 			jQuery(this).remove();
// 		});
// 	}
	
	
	
// })(jQuery);	

$(document).ready(function(){
	$(".filter").click(function(){
	  const value = $(this).attr("data-filter");
	  
	  if(value=="all") {
		$(".item-box").show("1000");
	  } 
	  else {
		$(".item-box").not("." + value).hide("1000");
		$(".item-box").filter("." + value).show("1000");
	  }
	});
	
	$(".filter").click(function(){
	  $(this).addClass("active").siblings().removeClass("active");
	});
	
  });