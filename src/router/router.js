import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index.js';

import HomePage from '../components/nav/HomePage.vue';
import OpeningsPage from '../components/openings/OpeningsPage.vue';
import OpeningsRuyLopez from '../components/openings/OpeningsRuyLopez.vue';
import OpeningsPirc from '../components/openings/OpeningsPirc.vue';
import OpeningsItalian from '../components/openings/OpeningsItalian.vue';
import OpeningsFrench from '../components/openings/OpeningsFrench.vue';
import OpeningsSicilian from '../components/openings/OpeningsSicilian.vue';
import OpeningsQueensGambit from '../components/openings/OpeningsQueensGambit.vue';
import OpeningsKingsFianchetto from '../components/openings/OpeningsKingsFianchetto.vue';
import OpeningsCaroKann from '../components/openings/OpeningsCaroKann.vue';
import MidgamePage from '../components/midgame/MidgamePage.vue';
import MidgamePin from '../components/midgame/MidgamePin.vue';
import MidgameFork from '../components/midgame/MidgameFork.vue';
import MidgameSkewer from '../components/midgame/MidgameSkewer.vue';
import MidgameDiscovery from '../components/midgame/MidgameDiscovery.vue';
import MidgamePromotion from '../components/midgame/MidgamePromotion.vue';
import MidgameEnPassant from '../components/midgame/MidgameEnPassant.vue';
import MidgameHangingPiece from '../components/midgame/MidgameHangingPiece.vue';
import MidgamePerpetualChecks from '../components/midgame/MidgamePerpetualChecks.vue';
import EndgamePage from '../components/endgame/EndgamePage.vue';
import EndgameLadderMate from '../components/endgame/EndgameLadderMate.vue';
import EndgameAnastasiasMate from '../components/endgame/EndgameAnastasiasMate.vue';
import EndgameArabianMate from '../components/endgame/EndgameArabianMate.vue';
import EndgameFoolsMate from '../components/endgame/EndgameFoolsMate.vue';
import EndgameLegalsMate from '../components/endgame/EndgameLegalsMate.vue';
import EndgameScholarsMate from '../components/endgame/EndgameScholarsMate.vue';
import EndgameSmotheredMate from '../components/endgame/EndgameSmotheredMate.vue';
import EndgameBackRankMate from '../components/endgame/EndgameBackRankMate.vue';
import ShopPage from '../components/shop/ShopPage.vue';
import AccountLogin from '../components/account/AccountLogin.vue';
import AccountRegister from '../components/account/AccountRegister.vue';
import AccountManage from '../components/account/AccountManage.vue';
import AccountForgot from '../components/account/AccountForgot.vue';
import NotFound from '../components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory('/learn-chess/'),
  routes: [
    { path:'/', component: HomePage },
    { path:'/openings', component: OpeningsPage },
    { path:'/openings/ruy-lopez', component: OpeningsRuyLopez },
    { path:'/openings/pirc', component: OpeningsPirc, meta: {requiresLogin: true} },
    { path:'/openings/italian', component: OpeningsItalian, meta: {requiresLogin: true} },
    { path:'/openings/french', component: OpeningsFrench, meta: {requiresLogin: true} },
    { path:'/openings/sicilian', component: OpeningsSicilian, meta: {requiresLogin: true} },
    { path:'/openings/queens-gambit', component: OpeningsQueensGambit, meta: {requiresLogin: true} },
    { path:'/openings/kings-fianchetto', component: OpeningsKingsFianchetto, meta: {requiresLogin: true} },
    { path:'/openings/caro-kann', component: OpeningsCaroKann, meta: {requiresLogin: true} },
    { path:'/midgame', component: MidgamePage },
    { path:'/midgame/pin', component: MidgamePin },
    { path:'/midgame/fork', component: MidgameFork, meta: {requiresLogin: true} },
    { path:'/midgame/skewer', component: MidgameSkewer, meta: {requiresLogin: true} },
    { path:'/midgame/discovery', component: MidgameDiscovery, meta: {requiresLogin: true} },
    { path:'/midgame/promotion', component: MidgamePromotion, meta: {requiresLogin: true} },
    { path:'/midgame/en-passant', component: MidgameEnPassant, meta: {requiresLogin: true} },
    { path:'/midgame/hanging-piece', component: MidgameHangingPiece, meta: {requiresLogin: true} },
    { path:'/midgame/perpetual-checks', component: MidgamePerpetualChecks, meta: {requiresLogin: true} },
    { path:'/endgame', component: EndgamePage },
    { path:'/endgame/ladder-mate', component: EndgameLadderMate, meta: {requiresLogin: true} },
    { path:'/endgame/smothered-mate', component: EndgameSmotheredMate, meta: {requiresLogin: true} },
    { path:'/endgame/anastasias-mate', component: EndgameAnastasiasMate, meta: {requiresLogin: true} },
    { path:'/endgame/arabian-mate', component: EndgameArabianMate, meta: {requiresLogin: true} },
    { path:'/endgame/fools-mate', component: EndgameFoolsMate },
    { path:'/endgame/legals-mate', component: EndgameLegalsMate, meta: {requiresLogin: true} },
    { path:'/endgame/scholars-mate', component: EndgameScholarsMate, meta: {requiresLogin: true} },
    { path:'/endgame/back-rank-mate', component: EndgameBackRankMate, meta: {requiresLogin: true} },
    { path:'/shop', component: ShopPage },
    { path:'/account/sign-in', component: AccountLogin, meta: {requiresNotLogin: true} },
    { path:'/account/register', component: AccountRegister, meta: {requiresNotLogin: true} },
    { path:'/account/manage', component: AccountManage, meta: {requiresLogin: true} },
    { path:'/account/forgot', component: AccountForgot },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
  scrollBehavior() {
    return {top: 0 };
  },
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresLogin && !store.getters.isAuthenticated) {
    next('/account/sign-in');
  } else if (to.meta.requiresNotLogin && store.getters.isAuthenticated) {
    next('/account/manage');
  } else {
    next();
  }

});

export default router;
