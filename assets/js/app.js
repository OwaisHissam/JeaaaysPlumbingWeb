// For carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
            
        },
        1000:{
            items:1,
            nav:true,
        }
    }
})


// for Tabs
$(document).ready(function() {
$('#menu').on('click', function (e) {
    $('.toggle').toggle();
});
            var widget = $('.tab');

            var tabs = widget.find('ul a'),
                content = widget.find('.content > div');

            tabs.on('click', function (e) {

                e.preventDefault();

                // Get the data-index attribute, and show the matching content div

                var index = $(this).data('index');

                tabs.removeClass('tab-active');
                content.removeClass('content-active');

                $(this).addClass('tab-active');
                content.eq(index).addClass('content-active');
            });

        });