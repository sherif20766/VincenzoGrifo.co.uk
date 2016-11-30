	
$(document).ready(function(){

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