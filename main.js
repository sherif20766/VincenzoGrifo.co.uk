	
$(document).ready(function(){
	$('body').css('display', 'none');
	$('body').fadeIn(1200);

	
	$("#front").backstretch([
      "assets/Background1.jpg",
      "assets/Background3.jpg",
      "assets/Background2.jpg",
      "assets/Background4.jpg",
      "assets/Background5.jpg",
      "assets/Background6.jpg",
      "assets/Background7.jpg"

      ], {
        fade: 1000,
        duration: 5000
    });



var $header = $("header"),
    $clone  = $header.before($header.clone().addClass("clone"));	

	$(window).scroll(function() {

		var fromTop = $(window).scrollTop();
            $("body").toggleClass("down", (fromTop > 120));


		$('#vincenzo').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});

		
	});

});