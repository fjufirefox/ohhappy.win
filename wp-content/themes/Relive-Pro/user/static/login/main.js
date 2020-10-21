(function ($) {
    "use strict";

    /*-------------------------------------
	Background image
	-------------------------------------*/
	$("[data-bg-image]").each(function() {
		var img = $(this).data("bg-image");
		$(this).css({
			backgroundImage: "url(" + img + ")"
		});
    });

    /*-------------------------------------
    After Load All Content Add a Class
    -------------------------------------*/

    window.onload = addNewClass();

    function addNewClass() {
        $('.fxt-template-animation').imagesLoaded().done(function (instance) {
            $('.fxt-template-animation').addClass('loaded');
        });
    }
    
    /*-------------------------------------
    Toggle Class
    -------------------------------------*/
    $(".toggle-password").on('click', function() {
        $(this).toggleClass("icon-icon-test icon-icon-test1");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

})(jQuery);