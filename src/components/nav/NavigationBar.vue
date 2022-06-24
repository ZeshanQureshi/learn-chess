<template>
<div>
  <header class="top-bar">
    <nav v-if="windowWidth >= 1000" class="desktop">
      <ul>
        <router-link class="router-nav" to="/">
          <div class="nav-logo">
            <img class="icon" v-bind:src="'/nav/nav-icon.png'">
            <li class="logo">Learn Chess</li>
          </div>
        </router-link>
        <router-link class="router-nav" to="/openings"><li>Openings</li></router-link>
        <router-link class="router-nav" to="/midgame"><li>Midgame</li></router-link>
        <router-link class="router-nav" to="/endgame"><li>Endgame</li></router-link>
        <router-link class="router-nav" to="/shop"><li>Shop</li></router-link>
        <router-link v-if="!isLoggedIn" class="router-nav" to="/account/sign-in"><li>Sign In</li></router-link>
        <router-link v-else class="router-nav" to="/account/manage"><li>Manage Account</li></router-link>
      </ul>
    <div>

    </div>  
    </nav>
    <nav v-else class="mobile">
      <div class="navbar">
        <router-link class="router-nav" to="/">
          <div class="nav-logo">
            <img class="icon" v-bind:src="'/nav/nav-icon.png'">
            <li class="logo">Learn Chess</li>
          </div>
        </router-link>
        <div @click="toggle" class="dropdown">
          <button >{{ dropDownText }}</button>
          <div v-if="active" class="dropdown-content">
            <router-link class="router-nav" to="/openings"><a>Openings</a></router-link>
            <router-link class="router-nav" to="/midgame"><a>Midgame</a></router-link>
            <router-link class="router-nav" to="/endgame"><a>Endgame</a></router-link>
            <router-link class="router-nav" to="/shop"><a>Shop</a></router-link>
            <router-link v-if="!isLoggedIn" class="router-nav" to="/account/sign-in"><a>Sign In</a></router-link>
            <router-link v-else class="router-nav" to="/account/manage"><a>Manage Account</a></router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
      return {
        windowWidth: window.innerWidth,
        active: false,
        dropDownText: "=",
      }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    toggle () {
      this.dropDownText = (this.active) ? "=" : "×";
      this.active = !this.active;
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
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

.mobile {
  display: none;
}

.desktop {
  display: block;
}

header {
  background: rgba(31, 41, 55, 0.9);
  color: lightgray;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  backdrop-filter: blur(2px);

  border-bottom: 1px solid black;;
}

nav {
  height: 100%;
  width: 100%;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  font-size: 25px;
  line-height: 50px;
  text-align: center;
}

nav li {
  display: inline-block;
  text-decoration: none;
}

nav li:hover{
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

.nav-logo:hover {
  color: white;
  cursor: pointer;
}

@media only screen and (max-width: 1000px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  p {
    display: inline-block;
  }

  button {
    color: lightgray;
    position: fixed;
    display: inline-block;
    line-height: 50px;
  }

  .dropdown {
    overflow: hidden;
    width: 160px;
  }

  nav {
    height: 100%;
    width: 100%;
  }

  nav div {
    list-style: none;
    padding: 0;
    justify-content: space-around;
    font-size: 25px;
    line-height: 50px;
    text-align: center;
    display: flex;
  }

  .dropdown-content {
    display: block;
    position: inherit;
    background: rgba(31, 41, 55, 0.95);
    backdrop-filter: blur(2px);
    min-width: 160px;
    margin-top: 50px;
  }

  .dropdown-content a {
    float: none;
    color: lightgray;
    padding: 5px;
    text-decoration: none;
    display: block;
    text-align: center;
  }

  .icon {
    padding: 16px 3px 0px 0px;
  }
}
</style>