<template>
  <div class="openings-header">
    <h3>Openings</h3>
    <p v-if="!isLoggedIn">
      <router-link class="router-account-nav" to="/account/sign-in">Sign In</router-link>
       to access all lessons.
      </p>
  </div>
  <div class="openings-center">
    <router-link class="router-nav" to="/openings/ruy-lopez">
      <div class="openings-content-left">
        <img v-bind:src="'/openings/openings-ruy-lopez.png'">
        <p>Ruy Lopez</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/openings/pirc">
      <div class="openings-content-right" v-bind:class="{ 'openings-blur' : !isLoggedIn}">
        <img v-bind:src="'/openings/openings-pirc-defence.png'">
        <p>Pirc Defence</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/openings/italian">
      <div class="openings-content-left" v-bind:class="{ 'openings-blur' : !isLoggedIn}">
        <img v-bind:src="'/openings/openings-italian-game.png'">
        <p>Italian Game</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/openings/french">
      <div class="openings-content-right" v-bind:class="{ 'openings-blur' : !isLoggedIn}">
        <img v-bind:src="'/openings/openings-french-defence.png'">
        <p>French Defence</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/openings/sicilian">
      <div class="openings-content-left" v-bind:class="{ 'openings-blur' : !isLoggedIn}">
        <img v-bind:src="'/openings/openings-sicilian-defence.png'">
        <p>Sicilian Defence</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/openings/queens-gambit">
      <div class="openings-content-right" v-bind:class="{ 'openings-blur' : !isLoggedIn}">
        <img v-bind:src="'/openings/openings-queens-gambit.png'">
        <p>Queen's Gambit</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/openings/kings-fianchetto">
      <div class="openings-content-left" v-bind:class="{ 'openings-blur' : !isLoggedIn}">
        <img v-bind:src="'/openings/openings-kings-fianchetto.png'">
        <p>King's Fianchetto</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/openings/caro-kann">
      <div class="openings-content-right" v-bind:class="{ 'openings-blur' : !isLoggedIn}">
        <img v-bind:src="'/openings/openings-caro-kann-defence.png'">
        <p>Caro Kann Defence</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'OpeningsPage',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
}
</script>

<style scoped>
.openings-blur {
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
  max-width:395px;
  max-height:395px;

  margin-left: auto;
  margin-right: auto;
  display: block;
}

.openings-header {
  height: 100px;
  padding-top: 50px;
  box-sizing: content-box;
}

.openings-center {
  width: 80%;
  height: 2000px;

  margin: 0 auto;
}

.openings-content-left {
  height: 500px;
  width: 50%;

  float: left;

  padding-right: 10px;
  padding-bottom: 40px;
  box-sizing:border-box;
}

.openings-content-right {
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
  .openings-center {
    width: 100%;
  }
  .openings-content-left {
    width: 100%;
    height: 500px;

    padding: 0;

    float:block;
  }

  .openings-content-right {
    width: 100%;
    height: 500px;

    padding: 0;
    float:block;
  }
}

</style>