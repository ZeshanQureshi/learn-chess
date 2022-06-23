<template>
  <footer>
    <div class="footer-center">
      <hr>
        <div class="footer-container">
          <b @click="toggleOpenings">{{ openingsText }}</b>
          <ul v-if="openingsActive">
            <router-link class="router-nav" to="/openings/ruy-lopez"><li>Ruy Lopez</li></router-link>
            <router-link class="router-nav" to="/openings/pirc"><li>Pirc Defence</li></router-link>
            <router-link class="router-nav" to="/openings/italian"><li>Italian Game</li></router-link>
            <router-link class="router-nav" to="/openings/french"><li>French Defence</li></router-link>
            <router-link class="router-nav" to="/openings/sicilian"><li>Sicilian Defence</li></router-link>
            <router-link class="router-nav" to="/openings/queens-gambit"><li>Queen's Gambit</li></router-link>
            <router-link class="router-nav" to="/openings/kings-fianchetto"><li>King's Fianchetto</li></router-link>
            <router-link class="router-nav" to="/openings/caro-kann"><li>Caro Kann Defence</li></router-link>
          </ul>
        </div>
        <div class="footer-container">
          <b @click="toggleMidgame">{{ midgameText }}</b>
          <ul v-if="midgameActive">
            <router-link class="router-nav" to="/midgame/pin"><li>Pin</li></router-link>
            <router-link class="router-nav" to="/midgame/fork"><li>Fork</li></router-link>
            <router-link class="router-nav" to="/midgame/skewer"><li>Skewer</li></router-link>
            <router-link class="router-nav" to="/midgame/discovery"><li>Discovery</li></router-link>
            <router-link class="router-nav" to="/midgame/promotion"><li>Promotion</li></router-link>
            <router-link class="router-nav" to="/midgame/en-passant"><li>En Passant</li></router-link>
            <router-link class="router-nav" to="/midgame/hanging-piece"><li>Hanging Piece</li></router-link>
            <router-link class="router-nav" to="/midgame/perpetual-checks"><li>Perpetual Checks</li></router-link>
          </ul>
        </div>
        <div class="footer-container">
          <b @click="toggleEndgame">{{ endgameText }}</b>
          <ul v-if="endgameActive">
            <router-link class="router-nav" to="/endgame/fools-mate"><li>Fool's Mate</li></router-link>
            <router-link class="router-nav" to="/endgame/legals-mate"><li>Legal's Mate</li></router-link>
            <router-link class="router-nav" to="/endgame/ladder-mate"><li>Ladder Mate</li></router-link>
            <router-link class="router-nav" to="/endgame/arabian-mate"><li>Arabian Mate</li></router-link>
            <router-link class="router-nav" to="/endgame/scholars-mate"><li>Scholar's Mate</li></router-link>
            <router-link class="router-nav" to="/endgame/back-rank-mate"><li>Back Rank Mate</li></router-link>
            <router-link class="router-nav" to="/endgame/smothered-mate"><li>Smothered Mate</li></router-link>
            <router-link class="router-nav" to="/endgame/anastasias-mate"><li>Anastasia's Mate</li></router-link>
          </ul>
        </div>
        <div class="footer-container">
          <b @click="toggleShop">{{ shopText }}</b>
          <ul v-if="shopActive">
            <router-link class="router-nav" to="/shop"><li>Visit</li></router-link>
          </ul>
        </div>
        <div class="footer-container">
          <b @click="toggleAccount">{{ accountText }}</b>
            <ul v-if="accountActive">
              <router-link class="router-nav" to="/account/sign-in"><li>Sign In</li></router-link>
              <router-link class="router-nav" to="/account/manage"><li>Manage</li></router-link>
              <router-link class="router-nav" to="/account/register"><li>Registration</li></router-link>
            </ul>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  
  name: 'FooterBar',
  data () {
      return {
        openingsText: "Openings +",
        midgameText: "Midgame +",
        endgameText: "Endgame +",
        shopText: "Shop +",
        accountText: "Account +",
        openingsActive: false,
        midgameActive: false,
        endgameActive: false,
        shopActive: false,
        accountActive: false,
      }
  },
  methods: {
    toggleOpenings() {
      this.openingsText = (this.openingsActive) ? "Openings +" : "Openings ×";
      this.openingsActive = !this.openingsActive;
    },

    toggleMidgame() {
      this.midgameText = (this.midgameActive) ? "Midgame +" : "Midgame ×";
      this.midgameActive = !this.midgameActive;
    },

    toggleEndgame() {
      this.endgameText = (this.endgameActive) ? "Endgame +" : "Endgame ×";
      this.endgameActive = !this.endgameActive;
    },

    toggleShop() {
      this.shopText = (this.shopActive) ? "Shop +" : "Shop ×";
      this.shopActive = !this.shopActive;
    },

    toggleAccount() {
      this.accountText = (this.accountActive) ? "Account +" : "Account ×";
      this.accountActive = !this.accountActive;
    },
  }
}
</script>

<style scoped>
.router-nav {
  text-decoration: none;
  color: inherit;
}

footer {
  background-color: rgb(230, 229, 229);
  width: 100%;
  display: block;
  overflow: auto;

  padding: 50px;
  box-sizing: border-box;

  font-size: 12px;

}

li {
  list-style-type: none;
  cursor: pointer;
}

hr {
  height: 1px;
  border-width: 0;
  

  color:lightgrey;
  background-color:lightgray;

  margin-bottom:30px;
}

b {
  cursor: pointer;
}

.footer-center {
  height: 100%;
  
  padding: 0px 15% 0px 15%;
  box-sizing: border-box;
}

.footer-container {
  width: 20%;
  height: 100%;

  line-height: 20px;

  float: left;

  text-align: center;
}

.footer-container-half {
  width: 25%;
  height: 90px;

  line-height: 20px;

  float: left;

  position: relative;

  text-align: center;
}

@media only screen and (max-width: 1000px) {
  .footer-container {
    width: 100%;
    padding-bottom: 20px;
  }

  footer {
    height: auto;
  }
}

</style>