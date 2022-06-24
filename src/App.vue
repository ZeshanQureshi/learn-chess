<template>
  <navigation-bar></navigation-bar>

  <router-view v-slot="{ Component }">
  <transition
    mode="out-in"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <component :is="Component" />
  </transition>
</router-view>

  <footer-bar></footer-bar>
</template>

<script>
import NavigationBar from './components/nav/NavigationBar.vue'
import FooterBar from './components/nav/FooterBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    FooterBar
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },  
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue != oldValue) {
        this.$router.replace('/account/sign-in');
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anek+Latin&display=swap');

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  font-family: 'Anek Latin', sans-serif;
}

::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: rgb(215, 215, 215);
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 25px; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
