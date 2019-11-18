<template>
  <div class="page-footer font-small">
  <hr class="container footer-hr"></hr>
    <div class="text-black">
      <div class="container container-fluid pt-5 mb-4 text-center text-md-left">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mb-4">
            <h6 class="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
            <p>
              Visiting address
              Amstel 115 - 125
              1018 EM Amsterdam
            </p>
            <p>
              Postal address
              Postbus 20202
              1000 HE Amsterdam
            </p>
            <p>
              Opening hours ticket office
              Mon to Sun 4 pm to 6 pm
              (or until start of show)
              On Saturdays, Sundays and holidays without a program, Orius ticket office is closed.
            </p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3">
            <h6 class="text-uppercase font-weight-bold">
              <strong>Ticket Sales</strong>
            </h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
            <p> <strong> Online </strong>
            <br>
            <router-link to="tickets"> View the complete list of shows </router-link>
            </p>
            <p> <strong> By phone </strong>
            <br>
            +31 (0)628354238
            <br>
            Mon to Fri 9am to 9pm
            <br>
            Sat to Sun 10am to 8pm </p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-3">
            <h6 class="text-uppercase font-weight-bold">
              <strong> Follow Orius Online </strong>
            </h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
            <div class="col-md-6 col-lg-7 text-center text-md-right">
              <a class="fb-ic ml-0">
                <i class="fab fa-facebook black-text mr-4"> </i>
              </a>
              <a class="tw-ic">
                <i class="fab fa-twitter black-text mr-4"> </i>
              </a>
              <a class="gplus-ic">
                <i class="fab fa-google-plus black-text mr-4"> </i>
              </a>
              <a class="li-ic">
                <i class="fab fa-linkedin  black-text mr-4"> </i>
              </a>
              <a class="ins-ic">
                <i class="fab fa-instagram  black-text mr-lg-4"> </i>
              </a>
            </div>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-3">
            <h6 class="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
            <div class="col-md-6 col-lg-7 text-center text-md-right">
              <ul class="useful-links">
                <li>
                  <a href="#!" class="link-color">Terms and Agreements</a>
                </li>
                <li>
                  <a href="#!" class="link-color">FAQ</a>
                </li>
                <li>
                  <a href="#!" class="link-color">Contact</a>
                </li>
                <li>
                  <a href="#!" class="link-color">Help</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright text-center py-3">© 2019 Copyright:
        <a href="https://mdbootstrap.com/bootstrap-tutorial/"> Sophie van Wersch</a>
      </div>
    </div>
  </div>
</template>

<style src="./Footer.css">
</style>

<script>
  module.exports = require("./Footer.js");
</script>

