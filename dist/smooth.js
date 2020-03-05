

    function smoothing(height, pageupClass) { 

        $(window).scroll(function() {
            if ($(this).scrollTop() > height) {
                $(pageupClass).fadeIn();
            } else {
                $(pageupClass).fadeOut();
            }
        });
    
        $("a[href^=#up]").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });

    }




