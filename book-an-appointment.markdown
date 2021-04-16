---
layout: default
title: Book an Appointment
permalink: /book-an-appointment
slug: book-an-appointment
---

<main class="container">
  {% include sidebar.html %}
  <section>
    <p>You can use this form to request a callback about booking an appointment at one of our two locations. Alternatively, see our <a href="/locations">locations page</a> to contact us by phone.</p>
    <p>If you wish to download our Intake and Modified Par Q forms to fill out before you come in to see us, please use the links below.</p>
    <ul>
      <li><a href="/docs/Patient-Intake-Form-and-Consent-to-Release.pdf" target="_blank" rel="noreferrer noopener">Patient Intake &amp; Consent to Release (PDF)</a></li>
      <li><a href="/docs/Modified-Par-Q-and-P4.pdf" target="_blank" rel="noreferrer noopener">Modified Par-Q and P4 (PDF)</a></li>
    </ul>
    <p>Please do not include any payment information in your submission.</p>
    <div class="field location-field">
      <label for="preferred-location">Please select a location</label>
      <select id="preferred-location" name="preferred-location">
        <option value="-1">Select…</option>
        <option value="windsor">Windsor</option>
        <option value="lasalle">LaSalle</option>
        <option value="lakeshore">Lakeshore</option>
      </select>
    </div>
    <hr class="form-separator" />
    <div id="windsor-form" class="appt-form">
      <form id="my-form" action="https://formspree.io/f/xaylvvkv" method="POST">
        <input type="text" name="location" hidden value="windsor" />
        <div class="field">
          <label>Your Name</label>
          <input type="text" name="name" required />
        </div>
        <div class="field">
          <label>Your Email</label>
          <input type="email" name="email" required />
        </div>
        <div class="field">
          <label>What services are you inquiring about?</label>
          <textarea name="message"></textarea>
        </div>
        <button id="my-form-button">Submit</button>
      </form>
    </div>
    <div id="lasalle-form" class="appt-form">
      <form id="my-form" action="https://formspree.io/f/xaylvvkv" method="POST">
        <input type="text" name="location" hidden value="lasalle" />
        <div class="field">
          <label>Your Name</label>
          <input type="text" name="name" required />
        </div>
        <div class="field">
          <label>Your Email</label>
          <input type="email" name="email" required />
        </div>
        <div class="field">
          <label>What services are you inquiring about?</label>
          <textarea name="message"></textarea>
        </div>
        <button id="my-form-button">Submit</button>
      </form>
    </div>
    <div id="lakeshore-form" class="appt-form">
      <form id="my-form" action="https://formspree.io/f/xaylvvkv" method="POST">
        <input type="text" name="location" hidden value="lakeshore" />
        <div class="field">
          <label>Your Name</label>
          <input type="text" name="name" required />
        </div>
        <div class="field">
          <label>Your Email</label>
          <input type="email" name="email" required />
        </div>
        <div class="field">
          <label>What services are you inquiring about?</label>
          <textarea name="message"></textarea>
        </div>
        <button id="my-form-button">Submit</button>
      </form>
    </div>
    <p id="my-form-status"></p>
  </section>

  {% include social_footer.html %}
</main>

<script>
  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none";
      $('.appt-form').slideUp();
      status.innerHTML = "We have received your submission, we will contact you soon.";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
</script>