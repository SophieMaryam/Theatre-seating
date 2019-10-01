<template>
  <div id="login">
    <div class="login-form">
      <h1 class="text-center">Login</h1>
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div class="submit pt-4 pb-2 text-center">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div class="pt-2 text-center">
        Not a user? Register
        <router-link to="/register">here</router-link>
      </div>
    </div>
  </div>
</template>

<script>
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
</script>

<style scoped>

  #login {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  .login-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #8B0000;
    background-color: #eee;
  }

  .submit button {
    border: 1px solid #8B0000;
    color: #8B0000;;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #8B0000;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>