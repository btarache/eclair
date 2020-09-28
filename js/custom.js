(function($) {

    

    // Preloader
    //-------------------------------------------------------------------------------
    window.onscroll = function () {
        window.scrollTo(0, 0);
    };

    $(window).load(function () {
        setTimeout(function () {
            window.onscroll = function () {};
            $('#page-preloader').addClass('slideOutUp');

            // Fix for IE 9
            setTimeout(function () {
                $('#page-preloader').addClass('hidden');
            }, 700);

        }, 100);

    });



    




 


// end document ready
})(jQuery);