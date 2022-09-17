(function ($, root, undefined) {
	
	$(function () {
		
		'use strict'
    
    $('.staff-hidden-copy').after('<button class="staff-hidden-copy-show">View More</button>')

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

  // form handler

  var errorList = {}

  function getOptions(data) {
    return { method: 'POST', body: data, headers: { 'Accept': 'application/json' } }
  }

  function submitForm(data) {
    var status = document.getElementById('my-form-status')
    fetch('https://formspree.io/f/mvoykbng', getOptions(data))
      .then(res => {
        if (res.ok) {
          status.innerHTML = "Thank you! We will be in touch within 2 business days."
          form.reset()
          form.classList.add('complete')
        } else {
          res.json()
            .then(data => {
              if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
              } else {
                status.innerHTML = "Oops! There was a problem submitting your form"
              }
          })
        }
      })
      .catch(error => {
        console.log('error in submit: ', error)
        status.innerHTML = "Oops! There was a problem submitting your form"
      })
  }

  function getRadioValue(field) {
    var radios = document.getElementsByName(field)
    for(var i = 0; i < radios.length; i++) {
      if (radios[i].checked) return radios[i].value
    }
    return ''
  }

  function requiredField(key, value) {
    if (!value) throw new Error('This field is required.', { cause: key })
  }

  function numbersOnly(key, value) {
    var re = new RegExp('^[0-9]+$')
    if (!re.test(value)) throw new Error('This field should only contain numbers.', { cause: key })
  }

  function validEmail(key, value) {
    var re = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    if (!re.test(value)) throw new Error('Must be a valid email address', { cause: key })
  }

  function appendError(field, error) {
    var fieldDiv = document.getElementById(field + '-field')
    var errorDiv = fieldDiv.querySelector('.field-error')
    fieldDiv.classList.add('has-error')
    errorDiv.textContent = error
  }

  function clearError(field) {
    delete errorList[field]
    var fieldDiv = document.getElementById(field + '-field')
    var errorDiv = fieldDiv.querySelector('.field-error')
    fieldDiv.classList.remove('has-error')
    errorDiv.textContent = null
  }

  // IMPORTANT: add these in reverse order!

  var cleans = {
    name: [requiredField],
    email: [validEmail, requiredField],
    phone: [numbersOnly, requiredField],
    location: [requiredField],
    service: [requiredField],
    payment: [requiredField],
    notes: [],
  }

  function cleanForm(data) {
    for (var [key, value] of data.entries()) {
      const cleaners = cleans[key]
      if (cleaners.length > 0) {
        cleaners.forEach(cl => {
          try {
            cl(key, value)
          } catch(e) {
            errorList[e.cause] = e.message
          }
        })
      }
    }

    var errorKeys = Object.keys(errorList)
    if (errorKeys.length < 1) return true

    errorKeys.forEach(key => appendError(key, errorList[key]))
    document.querySelector('.has-error').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  var form = document.getElementById('my-form')
  
  form.addEventListener('input', function(e) {
    clearError(e.target.name)
  })

  async function handleSubmit(event) {
    
    event.preventDefault()

    var data = new FormData(event.target)

    data.append('location', getRadioValue('location'))
    data.append('service', getRadioValue('service'))
    data.append('payment', getRadioValue('payment'))
    
    var clean = cleanForm(data)
    if (clean) submitForm(data)

  }

  form.addEventListener("submit", handleSubmit)
	
})(jQuery, this)
