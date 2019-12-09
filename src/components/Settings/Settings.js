import Vue from "vue";

export default Vue.extend({
  name: "UserProfileDetails",
  data(){
    return {
        profile: {
          name:null,
          phone:null,
          address:null,
          postcode:null
        },
        account:{
            name:null,
            email:null,
            photoUrl:null,
            emailVerified:null,
            password:null,
            confirmPassword:null,
            uid:null
        }       
    }
  },
  methods: {
    updateProfile() {
      
    },
    uploadImage() {
      console.log("hi");
    },
    resetPassword() {
      console.log("To reset");
    }
  }
});