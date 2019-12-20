<template>
  <div class="products container">
    <div class="intro row h-100 align-items-center">
      <div class="col-md-6 ml-3">
        <h3>Profile settings</h3>
        <p>Change your profile settings here</p>
      </div>
    </div>

    <div class="profile-content">
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active pt-3"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div class="container">
            <form @submit.prevent="updateProfile" class="pl-5 pr-5">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name
                      v-model="profile.name"
                      placeholder="Full name"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="profile.phoneNumber"
                      placeholder="Phone"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="profile.address"
                      placeholder="Address"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-8">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="profile.postalCode"
                      placeholder="Postcode"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <b-button type="btn btn-primary submit">Save changes</b-button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./UserSettings.css">
</style>

<script>
module.exports = require("./UserSettings.js");
</script>

