

    function smoothing(height) { 

        $(window).scroll(function() {
            if ($(this).scrollTop() > height) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
        });
    
        $("a[href^=#up]").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });

    }




