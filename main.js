$(document).ready(function(){
	$('body').css('display', 'none');
	$('body').fadeIn(1200);
	
	$('greeting').css('display','none');
	$('greeting').fadeIn(5000);
	
	$("#front").backstretch([		
      "assets/Background2.jpg",
      "assets/Background3.jpg",
      "assets/Background5.jpg"
      ], {
        fade: 1000,
        duration: 5000
    });

	$("#second-page-front").backstretch([
      "assets/Profile_Background.jpg"
      ], {
        fade: 1000,
        duration: 5000
    });

	$("#third-page-front").backstretch([
      "assets/Hobbies_Background.jpg"
      ], {
        fade: 1000,
        duration: 5000
    });

	$("#forth-page-front").backstretch([
      "assets/Background1.jpg"
      ], {
        fade: 1000,
        duration: 5000
    });

	$("#fifth-page-front").backstretch([
      "assets/Background7.jpg"
      ], {
        fade: 1000,
        duration: 5000
    });




 	$(".icon").on("click", function(){
 		$(".menu ul li").css("display","block");
 	});

	$(window).scroll(function() {

		$('#vincenzo').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});

		
	});

	$('.slick').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  adaptiveHeight: true,
	  arrows: false,
	  cssEase: 'linear'
	});

});