<template>
<div>
  <header class="top-bar">
      <div class="nav-logo">
        <router-link class="router-nav" to="/">
            <img class="icon" v-bind:src="'/nav/nav-icon.png'">
            <p class="logo">Learn Chess</p>
        </router-link>
      </div>

      <div class="nav-content">
        <ul v-if="windowWidth > 1000">
          <router-link class="router-nav" to="/openings"><li>Openings</li></router-link>
          <router-link class="router-nav" to="/midgame"><li>Midgame</li></router-link>
          <router-link class="router-nav" to="/endgame"><li>Endgame</li></router-link>
          <!--<router-link class="router-nav" to="/shop"><li>Shop</li></router-link>-->
        </ul>
        
        <div v-else class="dropdown">
            <button @click="toggle" class="dropbtn">{{ dropDownText }}</button>
            <div class="dropdown-content" v-if="active">
              <router-link class="router-nav" to="/openings"><li>Openings</li></router-link>
              <router-link class="router-nav" to="/midgame"><li>Midgame</li></router-link>
              <router-link class="router-nav" to="/endgame"><li>Endgame</li></router-link>
              <!--<router-link class="router-nav" to="/shop"><li>Shop</li></router-link>-->
            </div>
        </div>
      </div>
      
      <div class="nav-account">
        <router-link v-if="!isLoggedIn" class="router-nav" to="/account/sign-in">
          <button>Sign In</button>
        </router-link>
        <router-link v-else class="router-nav" to="/account/manage">
          <button>Manage</button>
        </router-link>
      </div>
  </header>
</div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
      return {
        active: false,
        windowWidth: window.innerWidth,
        dropDownText: "Menu",
      }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    toggle () {
      this.dropDownText = (this.active) ? "Menu" : "×";
      this.active = !this.active;
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    }
  },
  watch:{
    $route (){
        this.active = false;
        this.dropDownText = "Menu";
    }
}
}
</script>

<style scoped>
.router-nav {
  text-decoration: none;
  color: inherit;
}

.top-bar {
  z-index: 100;
}

p {
  display: inline-block;
  text-decoration: none;
}

p:hover{
  color: white;
  cursor: pointer;
}

button {
  display: inline-block;
  text-decoration: none;
  font-size: 18px;

  border: 1px solid black;
  background-color: black;
  color: lightgray;
  padding: 5px;
  border-radius: 5px;
}

button:hover{
  color: white;
  cursor: pointer;
}

header {
  background: rgba(31, 41, 55, 0.9);
  color: lightgray;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  backdrop-filter: blur(2px);

  border-bottom: 1px solid black;
}

ul {
  display:flex;

  height: 100%;
  width: 100%;

  justify-content: space-around;
}

li {
  display: inline-block;
  
  font-size: 18px;
  line-height: 50px;
}

li:hover{
  color: white;
  cursor: pointer;
}

.logo {
  font-size: 30px;
}

.icon {
  height:20px;
  padding-right: 5px;
}

.nav-logo {
  width: 200px;
  height: 100%;

  line-height: 50px;
  padding: 0px 15px 0px 15px;

  display: inline-block;
  float: left;
}

.nav-logo:hover {
  color: white;
  cursor: pointer;
}

.nav-content {
  width: calc(100vw - 420px);
  height: 100%;

  text-align: center;

  line-height: 50px;

  display: inline-block;
  float:left;
}

.nav-account {
  height: 100%;

  line-height: 50px;
  padding: 0px 15px 0px 15px;

  display: inline-block;
  float: right;
}

.nav-account:hover {
  color: white;
  cursor: pointer;
}

@media only screen and (max-width: 1000px) {
  
  .logo {
    font-size: 24px;
  }
  .nav-logo {
    width: 160px;
  }

  .icon {
    height: 16px;
  }

  .dropbtn {
    background-color: black;
    color: lightgray;
    padding: 5px;
    width: 52px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 18px;
    border: none;

    margin-left: auto;
    margin-right: auto;
  }

  .dropdown {
    position: relative;
    margin: 0 auto;
    display: inline-block;
  }

  .dropdown-content {
    display: block;
    position: absolute;
    background-color: rgb(31, 41, 55);
    width: 100px;
    z-index: 99;
  }

  .dropdown-content li {
    color: lightgray;
    padding: 12px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content li:hover {
    color: white;
  }

}
</style>