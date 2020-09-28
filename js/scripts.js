jQuery(document).ready(function($) {

    /* Tooltip */
	$(function() {
		$('.tooltip-social').tooltip();
	});
    
    /* Parallax */
	$(document).ready(function(){
		$(window).scroll(function(){
			var barra = $(window).scrollTop();
			var posicion =  (barra * 0.10);
			$('body').css({
				'background-position': '0 -' + posicion + 'px'
			});
		});
	});

	/* Blog Masonary */
	$('.masonry-container').waitForImages(function() {
        $('.masonry-container').show();
        $('.masonry-container').masonry({
            itemSelector: '.blog-unit'
        });
    });
	/* $('.masonry-testimonials').waitForImages(function() {
        $('.masonry-testimonials').masonry({
            itemSelector: '.testimonial-post'
        });
    }); */

    /* Up */
	$(document).ready(function(){
		$('.ir-arriba').click(function(){
			$('body, html').animate({
				scrollTop: '0px'
			},300 );
	});
    $(window).scroll(function(){
		if ($(this).scrollTop() > 0){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
			};
		});
	});

    /** Products Carousel **/
    $('#project-wrapper').waitForImages(function() {
        $('#project-wrapper').carouFredSel({
            width: "100%",
            circular: false,
            infinite: false,
            auto: false,
            align: "center",
            scroll: {
                items: 1,
                easing: "linear"
            },
            prev: {
                button: "#portfolio-prev",
                key: "left"
            },
            next: {
                button: "#portfolio-next",
                key: "right"
            }
        });
    });
    /** Brands Carousel **/
    $('#caroubr-wrapper').waitForImages(function() {
        $('#caroubr-wrapper').carouFredSel({
            width: "100%",
            margin: "0 auto",
            circular: false,
            infinite: false,
            auto: false,
            align: "center",
            scroll: {
                items: 1,
                easing: "linear"
            },
            prev: {
                button: "#portfolio-prev",
                key: "left"
            },
            next: {
                button: "#portfolio-next",
                key: "right"
            }
        });
    });
    /** Portfolio filter **/
    var $containerfolio = $('.projects');
    $containerfolio.waitForImages(function() {
        if($containerfolio.length) {
            $containerfolio.isotope({
                layoutMode: 'fitRows',
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
        }
    });
    $('.project-filter li').click(function() {
        $('.project-filter li').removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        $containerfolio.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    /** Brochure  Menu **/
    $(function() {
        Menu.init();
    });
});/** End functions **/





