<template>
<div>
  <div class="midgame-header">
    <h3>Midgame</h3>
    <p v-if="!isLoggedIn">
      <router-link class="router-account-nav" to="/account/sign-in">Sign In</router-link>
       to access all lessons.
      </p>
  </div>
  <div class="midgame-center">
    <router-link class="router-nav" to="/midgame/pin">
      <div class="midgame-content-left">
        <img v-bind:src="'/learn-chess/midgame/midgame-pin.png'">
        <p>Pin</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/midgame/fork">
      <div class="midgame-content-right" v-bind:class="{ 'midgame-blur' : !isLoggedIn}">
        <img v-bind:src="'/learn-chess/midgame/midgame-fork.png'">
        <p>Fork</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/midgame/skewer">
      <div class="midgame-content-left" v-bind:class="{ 'midgame-blur' : !isLoggedIn}">
        <img v-bind:src="'/learn-chess/midgame/midgame-skewer.png'">
        <p>Skewer</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/midgame/discovery">
      <div class="midgame-content-right" v-bind:class="{ 'midgame-blur' : !isLoggedIn}">
        <img v-bind:src="'/learn-chess/midgame/midgame-discovery.png'">
        <p>Discovery</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/midgame/promotion">
      <div class="midgame-content-left" v-bind:class="{ 'midgame-blur' : !isLoggedIn}">
        <img v-bind:src="'/learn-chess/midgame/midgame-promotion.png'">
        <p>Promotion</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/midgame/en-passant">
      <div class="midgame-content-right" v-bind:class="{ 'midgame-blur' : !isLoggedIn}">
        <img v-bind:src="'/learn-chess/midgame/midgame-en-passant.png'">
        <p>En Passant</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/midgame/hanging-piece">
      <div class="midgame-content-left" v-bind:class="{ 'midgame-blur' : !isLoggedIn}">
        <img v-bind:src="'/learn-chess/midgame/midgame-hanging-piece.png'">
        <p>Hanging Piece</p>
      </div>
    </router-link>
    <router-link class="router-nav" to="/midgame/perpetual-checks">
      <div class="midgame-content-right" v-bind:class="{ 'midgame-blur' : !isLoggedIn}">
        <img v-bind:src="'/learn-chess/midgame/midgame-perpetual-check.png'">
        <p>Perpetual Checks</p>
      </div>
    </router-link> 
  </div>
</div>
</template>

<script>
export default {
  name: 'MidgamePage',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
}
</script>

<style scoped>
.midgame-blur {
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

.midgame-header {
  height: 100px;
  padding-top: 50px;
  box-sizing: content-box;
}

.midgame-center {
  width: 80%;
  height: 2000px;

  margin: 0 auto;
}

.midgame-content-left {
  height: 500px;
  width: 50%;

  float: left;

  padding-right: 10px;
  padding-bottom: 40px;
  box-sizing:border-box;
}

.midgame-content-right {
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
  .midgame-center {
    width: 100%;
  }
  .midgame-content-left {
    width: 100%;
    height: 500px;

    padding: 0;

    float:block;
  }

  .midgame-content-right {
    width: 100%;
    height: 500px;

    padding: 0;
    float:block;
  }
}

</style>