import Vue from "vue";

export default Vue.extend({
  name: "Login",
  methods: {
    login: function () {
      const { username, password } = this
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push('/')
      })
    }
   }
})