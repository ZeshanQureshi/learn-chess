<template>
    <div class="account-center">
      <div class="account-content">
        <p>Don't have an account? 
          <router-link class="account-router" to="/account/register">Register</router-link>
        </p>
        <h4>Sign In to Learn Chess</h4>
        <form @keyup.enter="submitAccountLogin">
          <label>
            <input v-model="accountLoginEmail" placeholder="Email" type="email" class="account-information"/>
          </label>
          <label>
            <input v-model="accountLoginPassword" placeholder="Password" type="password" class="account-information"/>
          </label>
        </form>
        <router-link class="account-router" to="/account/forgot"><p>Forgot your password?</p></router-link>
        <button @click="submitAccountLogin">Sign In</button>
        <p class="account-status">{{ accountLoginStatus }}</p>
        <p class="account-status" v-if="isLoading"><b>Authenticating...</b></p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AccountLogin',
  data() {
    return {
      accountLoginEmail: '',
      accountLoginPassword: '',
      accountLoginStatus: '',
      isLoading: false,
      error: null
    }
  },
  methods: {
    async submitAccountLogin() {
      this.accountLoginStatus = '';

      this.isLoading = true;

      try {
        await this.$store.dispatch('login', {
        email: this.accountLoginEmail,
        password: this.accountLoginPassword
        });
        this.accountLoginStatus = "Sign In Successful!";
        setTimeout(()=>{
          this.$router.replace('/');
        }, 1000);

      } catch(err) {
        this.error = err.message || "Failed to authenticate, try later.";
        this.accountLoginStatus = err.message;
      }
      
      this.isLoading = false;
    },
  }
}
</script>

<style scoped>
.account-router {
  color: black;
}

.account-center {
  width: 80%;
  height: calc(100vh - 151px);

  margin: 0 auto;
  text-align: center;
}

.account-content {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.account-information {
  width: 400px;
  font-size: 20px;
  height: 40px;
  padding: 5px;
}

.account-status {
  padding-top: 10px;
}

p {
  display:block;
  padding-bottom: 20px;
}

h4 {
  line-height: 80px;
  font-size: 30px;
}

input {
  background-color: rgb(216, 242, 251);
}

label { 
  display: block;
  padding-bottom: 20px;
}

button {
  border: black 1px solid;
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
}

button:hover {
  padding: 10px 13px 10px 13px;
}
 
@media only screen and (max-width: 1000px) {
  .account-information {
    min-width: 300px;
    max-width: 50%;
  }

}

</style>