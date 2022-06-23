<template>
<div>
  <div class="account-center">
    <div class="account-header"></div>
      <div class="account-content">
        <button @click="logout">Sign Out</button>
        <p>{{ accountManageStatus }}</p>

        <h4>Change Email</h4>
        <label>
          <input v-model="accountManageEmail" placeholder="New Email" type="email" class="account-information"/>
        </label>
        <label>
          <input v-model="accountManageEmailConfirm" placeholder="Confirm New Email" type="email" class="account-information"/>
        </label>
        <button @click="changeEmail">Change Email</button>
        <p class="account-status">{{ accountManageEmailStatus }}</p>
        <p class="account-status" v-if="isLoadingEmail"><b>Authenticating...</b></p>

        <h4>Change Password</h4>
        <label>
          <input v-model="accountManagePassword" placeholder="New Password" type="password" class="account-information"/>
        </label>
        <label>
          <input v-model="accountManagePasswordConfirm" placeholder="Confirm New Password" type="password" class="account-information"/>
        </label>
        <button @click="changePassword">Change Password</button>
        <p class="account-status">{{ accountManagePasswordStatus }}</p>
        <p class="account-status" v-if="isLoadingPassword"><b>Authenticating...</b></p>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'AccountManage',
  data() {
    return {
      accountManageEmail:'',
      accountManageEmailConfirm: '',
      accountManagePassword:'',
      accountManagePasswordConfirm: '',
      accountManageStatus:'',
      accountManageEmailStatus:'',
      accountManagePasswordStatus:'',
      isLoadingPassword:false,
      isLoadingEmail: false
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');

      this.accountManageStatus = 'Sign Out Successful!'

      setTimeout(()=>{
        this.$router.replace('/account/sign-in');
      }, 1000);
    },
    
    async changeEmail() {
      this.accountManageEmailStatus = "";
      this.accountManagePasswordStatus = "";

      if (this.accountManageEmail != this.accountManageEmailConfirm) {
        this.accountManageEmailStatus = "Emails do not match";
        return
      }
      
      this.isLoadingEmail = true;

      try {
        await this.$store.dispatch('changeEmail', {
          email: this.accountManageEmail,
          tokenId: this.$store.getters.token
        });

        this.accountManageEmailStatus = "Email changed successfully!";

        this.accountManageEmail ='';
        this.accountManageEmailConfirm = '';

      } catch(err) {
        console.log(err);
        this.accountManageEmailStatus = err.message;
      }

      this.isLoadingEmail = false;
    },

    async changePassword() {
      this.accountManageEmailStatus = "";
      this.accountManagePasswordStatus = "";

      if (this.accountManagePassword != this.accountManagePasswordConfirm) {
        this.accountManagePasswordStatus = "Passwords do not match";
        return
      }
      
      this.isLoadingPassword = true;

      try {
        await this.$store.dispatch('changePassword', {
          password: this.accountManagePassword,
          tokenId: this.$store.getters.token
        });

        this.accountManagePasswordStatus = "Password changed successfully!";

        this.accountManagePassword = '';
        this.accountManagePasswordConfirm = '';

      } catch(err) {
        console.log(err);
        this.accountManagePasswordStatus = err.message;
      }

      this.isLoadingPassword = false;
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

.account-header {
  height: 50px;
  width: 100%;
}

p {
  display:block;
  padding-bottom: 20px;
}

h4 {
  padding-top: 30px;
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

@media only screen and (max-height: 1000px) {
  .account-center {
    height: 800px;
  }

}
</style>