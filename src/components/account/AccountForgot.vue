<template>
<div>
    <div class="account-center">
      <div class="account-content">
        <p>Return to
          <router-link class="account-router" to="/account/sign-in">Sign In</router-link>
        </p>
        <h4>Forgot Password</h4>
        <form @keyup.enter="submitForgotPassword">
          <label>
            <input v-model="accountForgotEmail" placeholder="Email" type="email" class="account-information"/>
          </label>
        </form>
        <button @click="submitForgotPassword">Reset Password</button>
        <p class="account-status">{{ accountForgotEmailStatus }}</p>
        <p v-if="accountLinkToLogin" class="account-status">Return to <router-link to="/account/sign-in">Sign In</router-link></p>
        <p class="account-status" v-if="isLoading"><b>Authenticating...</b></p>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'AccountForgot',
  data() {
    return {
      accountForgotEmail: '',
      accountForgotEmailStatus: '',
      accountLinkToLogin: false,
      isLoading: false
    }
  },
  methods: {
    async submitForgotPassword() {
      if (this.accountForgotEmail == '') {
        this.accountForgotEmailStatus = 'Please enter a valid email.';
        return
      }
      
      this.accountForgotEmailStatus = '';

      this.isLoading = true;

      console.log(this.accountForgotEmail);

      try {
        await this.$store.dispatch('forgotPassword', {
          email: this.accountForgotEmail,
        });
          this.accountForgotEmailStatus = "Reset Password Successful! Please check your email.";
          this.accountLinkToLogin = true;
        

      } catch(err) {
        this.error = err.message || "Failed to reset password, try later.";
        this.accountForgotEmailStatus = err.message;
      }
      
      this.isLoading = false;
    }
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