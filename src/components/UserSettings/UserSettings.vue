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
            <form @submit.prevent="updateProfile">
              <h1>Contact Details</h1>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="fullName">Full Name</label>
                  <input
                    type="text"
                    v-model="profile.name"
                    class="form-control"
                    id="fullName"
                    placeholder="Full Name"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    v-model="profile.email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="mobile">Mobile</label>
                  <input
                    type="number"
                    v-model="profile.mobile"
                    class="form-control"
                    id="mobile"
                    placeholder="Mobile"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputAddress">Address</label>
                  <input
                    type="text"
                    v-model="profile.address"
                    class="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputAddress2">Address 2</label>
                  <input
                    type="text"
                    v-model="profile.household"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" v-model="profile.city" class="form-control" id="inputCity" />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">Country</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Postal Code</label>
                  <input
                    type="text"
                    v-model="profile.postalCode"
                    class="form-control"
                    id="inputZip"
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Save</button>
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

