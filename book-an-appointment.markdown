---
layout: default
title: Book an Appointment
permalink: /book-an-appointment
slug: book-an-appointment
---

<main class="container">
  {% include sidebar.html %}
  <section>
    <p>You can use this form to request a callback about booking an appointment at one of our three locations. Alternatively, see our <a href="/locations">locations page</a> to contact us by phone.</p>
    <p>Please do not include any payment information in your submission.</p>
    <!-- <p>If you wish to download our Intake and Modified Par Q forms to fill out before you come in to see us, please use the links below.</p>
    <ul>
      <li><a href="/docs/Patient-Intake-Form-and-Consent-to-Release.pdf" target="_blank" rel="noreferrer noopener">Patient Intake &amp; Consent to Release (PDF)</a></li>
      <li><a href="/docs/Modified-Par-Q-and-P4.pdf" target="_blank" rel="noreferrer noopener">Modified Par-Q and P4 (PDF)</a></li>
    </ul> -->
    <div class="appt-form">
      <form id="my-form" action="https://formspree.io/f/mvoykbng" method="POST">
        <div class="field text-field" id="name-field">
          <div class="field-inner">
            <label class="primary-label">Your full name</label>
            <input type="text" name="name" />
            <div class="field-error"></div>
          </div>
        </div>
        <div class="field text-field" id="email-field">
          <div class="field-inner">
            <label class="primary-label">Your email address</label>
            <input type="text" name="email" />
            <div class="field-error"></div>
          </div>
        </div>
        <div class="field text-field" id="phone-field">
          <div class="field-inner">
            <label class="primary-label">Your phone number</label>
            <input type="text" name="phone" />
            <div class="field-error"></div>
          </div>
          <div class="help-copy">
            We'll contact you by phone to arrange your appointment.
          </div>
        </div>
        <div class="field radio-field" id="location-field">
          <div class="field-inner">
            <label class="primary-label">Which location would you prefer?</label>
            <div>
              <input type="radio" id="windsor" name="location" value="windsor">
              <label for="windsor">Windsor</label>
            </div>
            <div>
              <input type="radio" id="lasalle" name="location" value="lasalle">
              <label for="lasalle">LaSalle</label>
            </div>
            <div>
              <input type="radio" id="lakeshore" name="location" value="lakeshore">
              <label for="lakeshore">Lakeshore</label>
            </div>
            <div class="field-error"></div>
          </div>
        </div>
        <div class="field radio-field" id="service-field">
          <div class="field-inner">
            <label class="primary-label">Which service are you looking for?</label>
            <div>
              <input type="radio" id="physio" name="service" value="physio">
              <label for="physio">Physio</label>
            </div>
            <div>
              <input type="radio" id="massage" name="service" value="massage">
              <label for="massage">Massage</label>
            </div>
            <div class="field-error"></div>
          </div>
        </div>
        <div class="field radio-field" id="payment-field">
          <div class="field-inner">
            <label class="primary-label">What payment option would you prefer?</label>
            <div>
              <input type="radio" id="wsib" name="payment" value="wsib">
              <label for="wsib">WSIB</label>
            </div>
            <div>
              <input type="radio" id="mva" name="payment" value="mva">
              <label for="mva">MVA</label>
            </div>
            <div>
              <input type="radio" id="extended" name="payment" value="extended">
              <label for="extended">Extended Health</label>
            </div>
            <div>
              <input type="radio" id="private" name="payment" value="private">
              <label for="private">Private</label>
            </div>
            <div class="field-error"></div>
          </div>
        </div>
        <div class="field notes-field" id="notes-field">
          <div class="field-inner">
            <label class="primary-label">Notes <span>(Optional)</span></label>
            <textarea name="notes"></textarea>
            <div class="field-error"></div>
          </div>
          <div class="help-copy">
            Any additional information that might be useful.
          </div>
        </div>
        <button id="my-form-button">Submit</button>
      </form>
    </div>
    <p id="my-form-status"></p>
  </section>

  {% include social_footer.html %}
</main>
