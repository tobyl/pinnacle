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

  $.instagramFeed({
      'username': 'pinnacle.physiotherapy',
      'container': "#instagram-feed",
      'display_profile': false,
      'display_biography': false,
      'display_gallery': true,
      'display_captions': false,
      'callback': null,
      'styling': true,
      'items': 12,
      'items_per_row': 6,
      'margin': 0.25,
      'cache_time': 360,
      'on_error': console.error
  })

  $('#preferred-location').change(function () {
    var location = $('#preferred-location option:selected').val()
    if (location !== '-1') {
      $('.appt-form').slideUp()
      $('#my-form-status').html("")
      $('#' + location + '-form').slideDown()
    }
  })
	
})(jQuery, this)
