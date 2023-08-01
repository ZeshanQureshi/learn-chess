# learn-chess
## Background
Learn Chess is a website dedicated to all things chess! It features lessons on openings, midgame, and endgame tactics. It also features a shop page to purchase chess sets.

This website supports both desktop and mobile browsers.

To view a live demo of the front-end elements of the website, click [here](https://zeshanqureshi.github.io/learn-chess/).

## Development
Learn chess was developed using Vue.js (front-end) and Express.js (back-end).

Account management is handled using [Google Firebase](https://firebase.google.com/). The Checkout page and all payment processess are handled using [Stripe](https://stripe.com/en-ca).

## Directory
A directory tree for all web pages can be found below:

* Homepage
  * Openings
    * Ruy Lopez
    * Pirc Defence *
    * Italian Game *
    * French Defence *
    * Sicilian Defence *
    * Queen's Gambit *
    * King's Fianchetto *
    * Caro Kann Defence *
  * Midgame
    * Pin
    * Fork *
    * Skewer *
    * Discover *
    * Promotion *
    * En Passant *
    * Hanging Piece *
    * Perpetual Checks *
  * Endgame
    * Fool's Mate
    * Legal's Mate *
    * Ladder Mate *
    * Arabian Mate *
    * Scholar's Mate *
    * Back Rank Mate *
    * Smothered Mate *
    * Anastasia's Mate *
  * Shop
    * Checkout *
  * Account
    * Register
    * Sign In
    * Forgot Password
    * Manage *
  
__Note: Webpages marked with * can only be accessed when signed in__

_Important: Since there is no back-end server in the demo, some features such as the account management and checkout page will not be accessible. Furthermore, the lack of server-side routing means some pages will return a 404 Error when refreshed._
