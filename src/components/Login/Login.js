import Vue from "vue";

export default {
  name: "Login",
  data () {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        email: this.email,
        password: this.password,
      }
      console.log(formData)
    }
  }
}