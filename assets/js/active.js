(function($) {
	'use strict';
	jQuery(document).on('ready', function(){
        // Navbar Js
        $(window).on('scroll', function() {
            if ($(this).scrollTop() >150){  
                $('.navbar').addClass("is-sticky");
            }
            else{
                $('.navbar').removeClass("is-sticky");
            }
        });
        $('.navbar-nav .nav-item a').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
        $(document).on('click','.navbar-collapse.show',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });		

        // Main Slider Js
        $('.main-slider').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items:1,
            loop:true,
            nav:true,
            dots:true,
            autoplay: false,
            autoplayHoverPause: true,
            smartSpeed: 2000,
        }); 

        // Project Slider Js
        $('.project-slider').owlCarousel({
            items:1,
            loop:true,
            nav:true,
            dots:false,
            autoplay: false,
            autoplayHoverPause: true,
            smartSpeed: 2000,
        }); 

        // Blog Slider Js
        $('.slider-blog').owlCarousel({
            items:1,
            loop:true,
            nav:false,
            dots:true,
            autoplay: false,
            autoplayHoverPause: true,
            smartSpeed: 2000,
        }); 

        // Counter UP JS
        $('.counter').counterUp({
            delay: 10,
            time: 2000,
        });

        //Portfolio Section
        $(window).load(function(){
            var $container = $('.portfolioContainer');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.portfolioFilter a').click(function(){
                $('.portfolioFilter .current').removeClass('current');
                $(this).addClass('current');

                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false; 
            }); 
        }); 
        
        // Video popup
        $(document).ready(function() {
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        });

        // Wow Js
        new WOW().init();

        // Back To Top
        $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');
        $(window).on('scroll', function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        }); 
        
        $('#toTop').on('click', function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
        
    }); 	
})(jQuery);