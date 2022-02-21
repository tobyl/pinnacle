---
layout: default
title: Gives Back
permalink: /gives-back
slug: gives-back
---

<main class="container">
  <div class="two-columns">
    <div class="half-column">
      <h3>Pinnacle Physiotherapy Gives Back!</h3>
      <p><img class="antoninos-logo" src="/assets/img/antoninos-logo.png" />This year, Pinnacle Physiotherapy would like to <strong>GIVE BACK</strong> to the Windsor-Essex community and award one Frontline Business/Organization and one Frontline Individual per month with Antonino's Original Pizza for Lunch!</p>
      <p>Our Pinnacle Physiotherapy team will review the nominations and randomly select winners, contact them and then share the delivery on our social media. Pinnacle Physiotherapy may just surprise you or your staff with Antonino's Original Pizza for lunch!</p>
      <p>Use the form on this page to tell us about your nominee, please do not nominate more than one person or business/organization.</p>
    </div> <!-- half-column -->
    <div class="half-column">
      <h3>Tell Us About Your Nominee</h3>
      <form id="gives-back-form" action="https://formspree.io/f/mayvoogy" method="POST">
        <div id="inner-form">
          <p class="field">
            <label class="primary-label" for="first_name">Your first name</label>
            <input id="first_name" type="text" name="first_name" required />
          </p>
          <p class="field">
            <label class="primary-label" for="last_name">Your last name</label>
            <input id="last_name" type="text" name="last_name" required />
          </p>
          <p class="field">
            <label class="primary-label" for="email">Your email address</label>
            <input id="email" type="email" name="email" required />
          </p>
          <!-- <hr class="form-separator" /> -->
          <p class="field">
            <label class="primary-label" for="nominee">Who would you like to nominate</label>
            <input type="radio" id="business" name="nominee" value="business" required />
            <label for="business">Frontline Business/Organization</label><br />
            <input type="radio" id="worker" name="nominee" value="worker" required />
            <label for="worker">Frontline Worker</label>
          </p>
          <p class="field">
            <label class="primary-label" for="nominee_first_name">Business/Organization or Worker’s Full Name</label>
            <input id="nominee_first_name" type="text" name="nominee_name" required />
          </p>
          <p class="field">
            <label class="primary-label" for="nominee_email">Nominee email address</label>
            <input id="nominee_email" type="email" name="nominee_email" required />
          </p>
          <p class="field">
            <label class="primary-label" for="nominee_phone">Nominee phone number</label>
            <input id="nominee_phone" type="tel" name="nominee_phone" required />
          </p>
          <p class="field">
            <label class="primary-label" for="reason">Reason for nomination</label>
            <textarea id="reason" name="reason" required></textarea>
          </p>
          <div class="g-recaptcha" data-sitekey="6LcRQ4IeAAAAAEBy0kObpDJUOxFZCLTxu26DKdtr"></div>
          <button id="my-form-button">Submit</button>
        </div> <!-- inner-form -->
        <p id="my-form-status"></p>
      </form>
    </div> <!-- half-column -->
  </div> <!-- two-columns -->
</main>

{% include social_footer.html %}

<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<script>
  var form = document.getElementById("gives-back-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your nomination!";
        form.reset()
        var innerForm = document.getElementById('inner-form');
        innerForm.classList.add('closed');
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)
</script>
