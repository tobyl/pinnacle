(function ($, root, undefined) {
	
	$(function () {
		
		'use strict'
    
    $('.staff-hidden-copy').after(
      '<button class="staff-hidden-copy-show">View More</button>'
    )

    $('.staff-hidden-copy-show').click(function() {
      const prev = $(this).prev()
      prev.toggleClass('visible')
    })

    $('#HomeSlider').slick({
      dots: true,
      pauseOnHover: false,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: false,
    })
		
	})
	
})(jQuery, this)
