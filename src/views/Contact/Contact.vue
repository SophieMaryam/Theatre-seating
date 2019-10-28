<template>
  <div class="">
    <div class="col-12 container-fluid background">
      <h1>Contact us</h1>
    </div>
    <div class="container">
      <p>
        Our mission is to give you unforgettable memories of fantastic experiences. We want to hear your feedback – whether complaint or congratulation – so that we can continue to improve your experience of the Hall and recognise members of staff who give exceptional service.

        Please contact us using the form below, or through our social media channels, to let us know what you think. Information noted on this form will be processed in accordance with our Privacy Notice, here.
      </p>
    </div>
    <div class="container contact">
      <div class="row">
        <div class="col-md-3 image-col">
          <div class="contact-info">
            <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
            <h2 class="text-white">Contact Us</h2>
          </div>
        </div>
        <div class="col-md-9 form-col">
          <div class="contact-form">
            <div class="form-group">
              <label class="control-label col-sm-2" for="fname">First Name:</label>
              <div class="col-sm-10">          
                <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname">
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="lname">Last Name:</label>
              <div class="col-sm-10">          
                <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname">
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="email">Email:</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="comment">Comment:</label>
              <div class="col-sm-10">
                <textarea class="form-control" rows="5" id="comment"></textarea>
              </div>
            </div>
            <div class="form-group">        
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn red-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = require("./Contact.js");
</script>

<style src="./Contact.css">
</style>





