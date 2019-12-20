<template>
  <div class>
    <div class="col-12 container-fluid background">
      <h1 class="text-white text-center pt-3">Contact us</h1>
    </div>
    <div class="container">
      <p>
        Our mission is to give you unforgettable memories of fantastic experiences. We want to hear your feedback – whether complaint or congratulation – so that we can continue to improve your experience of the Hall and recognise members of staff who give exceptional service.
        Please contact us using the form below, or through our social media channels, to let us know what you think. Information noted on this form will be processed in accordance with our Privacy Notice, here.
      </p>
    </div>
    <div class="container contact">
      <form>
        <p class="h4 text-center mb-4">Write to us</p>
        <label for="defaultFormContactNameEx" class="grey-text">Your name</label>
        <input type="text" id="defaultFormContactNameEx" class="form-control" />
        <br />
        <label for="defaultFormContactEmailEx" class="grey-text">Your email</label>
        <input type="email" id="defaultFormContactEmailEx" class="form-control" />
        <br />
        <label for="defaultFormContactSubjectEx" class="grey-text">Subject</label>
        <input type="text" id="defaultFormContactSubjectEx" class="form-control" />
        <br />
        <label for="defaultFormContactMessageEx" class="grey-text">Your message</label>
        <textarea type="text" id="defaultFormContactMessageEx" class="form-control" rows="3"></textarea>
        <div class="text-center mt-4">
          <button class="btn btn-outline-warning" type="submit">
            Send
            <i class="far fa-paper-plane ml-2"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
module.exports = require("./ContactPage.js");
</script>

<style src="./ContactPage.css">
</style>





