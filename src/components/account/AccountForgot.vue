<template>
    <div class="account-center">
      <div class="account-content">
        <p>Return to
          <router-link class="account-router" to="/account/sign-in">Sign In</router-link>
        </p>
        <h4>Forgot Password</h4>
        <label>
          <input placeholder="Email" type="email" class="account-information"/>
        </label>
        <button>Reset Password</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AccountForgot',
  
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