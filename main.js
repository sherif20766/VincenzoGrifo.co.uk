$(document).ready(function(){
	$('body').css('display', 'none');
	$('body').fadeIn(1200);

	
	$("#front").backstretch([
      "assets/Background5.jpg",
      "assets/Background7.jpg",
      "assets/Background2.jpg",
      "assets/Background4.jpg"
      ], {
        fade: 1000,
        duration: 5000
    });

 	$(".icon").click(function(){
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

});