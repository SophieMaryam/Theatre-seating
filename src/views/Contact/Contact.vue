<template>
  <div class="background">
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





