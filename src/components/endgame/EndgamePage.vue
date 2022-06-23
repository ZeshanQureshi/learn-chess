<template>
  <div class="endgame-header">
    <h3>Endgame</h3>
    <p v-if="!isLoggedIn">
      <router-link class="router-account-nav" to="/account/sign-in">Sign In</router-link>
       to access all lessons.
      </p>
  </div>
  <div class="endgame-center">
    <router-link class="router-nav" to="/endgame/fools-mate">
      <div class="endgame-content-left">
        <img v-bind:src="'/endgame/endgame-fools-mate.png'">
        <p>Fool's Mate</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/endgame/legals-mate">
      <div class="endgame-content-right" v-bind:class="{ 'endgame-blur' : !isLoggedIn}">
        <img v-bind:src="'/endgame/endgame-legals-mate.png'">
        <p>Legal's Mate</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/endgame/ladder-mate">
      <div class="endgame-content-left" v-bind:class="{ 'endgame-blur' : !isLoggedIn}">
        <img v-bind:src="'/endgame/endgame-ladder-mate.png'">
        <p>Ladder Mate</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/endgame/arabian-mate">
      <div class="endgame-content-right" v-bind:class="{ 'endgame-blur' : !isLoggedIn}">
        <img v-bind:src="'/endgame/endgame-arabian-mate.png'">
        <p>Arabian Mate</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/endgame/scholars-mate">
      <div class="endgame-content-left" v-bind:class="{ 'endgame-blur' : !isLoggedIn}">
        <img v-bind:src="'/endgame/endgame-scholars-mate.png'">
        <p>Scholar's Mate</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/endgame/back-rank-mate">
      <div class="endgame-content-right" v-bind:class="{ 'endgame-blur' : !isLoggedIn}">
        <img v-bind:src="'/endgame/endgame-back-rank-mate.png'">
        <p>Back Rank Mate</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/endgame/smothered-mate">
      <div class="endgame-content-left" v-bind:class="{ 'endgame-blur' : !isLoggedIn}">
        <img v-bind:src="'/endgame/endgame-smothered-mate.png'">
        <p>Smothered Mate</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/endgame/anastasias-mate">
      <div class="endgame-content-right" v-bind:class="{ 'endgame-blur' : !isLoggedIn}">
        <img v-bind:src="'/endgame/endgame-anastasias-mate.png'">
        <p>Anastasia's Mate</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'EndgamePage',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
}
</script>

<style scoped>
.endgame-blur {
  filter: blur(5px);
}
.router-account-nav {
  text-decoration: underline;
  color: inherit;
}

.router-nav {
  text-decoration: none;
  color: inherit;
}

h3 {
  text-align: center;
  line-height: 50px;
  font-size: 30px;
}

p {
  text-align: center;
  line-height: 50px;
}

img {
  max-width:3950px;
  max-height:395px;

  margin-left: auto;
  margin-right: auto;
  display: block;
}

.endgame-header {
  height: 100px;
  padding-top: 50px;
  box-sizing: content-box;
}

.endgame-center {
  width: 80%;
  height: 2000px;

  margin: 0 auto;
}

.endgame-content-left {
  height: 500px;
  width: 50%;

  float: left;

  padding-right: 10px;
  padding-bottom: 40px;
  box-sizing:border-box;
}

.endgame-content-right {
  height: 500px;
  width: 50%;

  float: right;
    
  padding-left: 10px;
  padding-bottom: 40px;
  box-sizing:border-box;
}



@media only screen and (max-width: 1000px) {
  img {
    max-width: 400px;
    width: 100%;
  }
  .endgame-center {
    width: 100%;
  }
  .endgame-content-left {
    width: 100%;
    height: 500px;

    padding: 0;

    float:block;
  }

  .endgame-content-right {
    width: 100%;
    height: 500px;

    padding: 0;
    float:block;
  }
}

</style>