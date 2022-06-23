<template>
<div>
  <div class="account-center">
      <div class="account-content">
        <p>Already have an account? 
          <router-link class="account-router" to="/account/sign-in">Sign In</router-link>
        </p>
        <h4>Register an Account</h4>
        <form @keyup.enter="submitAccountInfo">
          <label>
            <input v-model="accountRegisterEmail" placeholder="Email" type="email" class="account-information"/>
          </label>
          <label>
            <input v-model="accountRegisterPassword" placeholder="Password" type="password" class="account-information"/>
          </label>
          <label>
            <input v-model="accountRegisterPasswordConfirm" placeholder="Confirm Password" type="password" class="account-information"/>
          </label>
        </form>
        <button @click="submitAccountInfo">Register</button>
        <p class="account-status">{{ accountRegisterStatus }}</p>
        <p class="account-status" v-if="isLoading"><b>Authenticating...</b></p>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'AccountRegister',
  data() {
    return {
      accountRegisterEmail: '',
      accountRegisterPassword: '',
      accountRegisterPasswordConfirm: '',
      accountRegisterStatus: '',
      isLoading: false,
      error: null
    }
  },
  methods: {
    async submitAccountInfo() {
      this.accountRegisterStatus = '';
      
      if (this.accountRegisterPassword != this.accountRegisterPasswordConfirm) {
        this.accountRegisterStatus = 'Passwords do not match.';
        return;
      }

      this.isLoading = true;

      try {
        await this.$store.dispatch('register', {
          email: this.accountRegisterEmail,
          password: this.accountRegisterPassword
        });
        this.accountRegisterStatus = "Registered Successfully!";

        setTimeout(()=>{
          this.$router.replace('/');
        }, 1000);

      } catch (err) {
        this.error = err.message || "Failed to authenticate, try later.";
        this.accountRegisterStatus = err.message;
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
  height: calc(100vh - 202px);

  padding-top:50px;

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