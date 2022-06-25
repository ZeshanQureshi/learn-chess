<template>
<div>
  <div class="block-one">
    <div class="center-one" >
      <div class="text-one">
        <div class="text-center-one">
          <h1>Get Better at Chess</h1>
          <h2>Learn openings, midgame tactics, and endgame strategies</h2>
        </div>
      </div>
      <div class="img-one">
        <img class="img1" src="homepage/homepage-1.png">
      </div>
    </div>
  </div>
  <div class="block-two">
    <div class="center-one">
      <h4>Learn Something New</h4>
      <div class="block-two-container" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset = "350">
        <div class="block-two-img">
          <img class="img2" src="homepage/homepage-fianchetto.png">
        </div>
        <div class="block-two-text">
          <p>Discover unique openings.</p>
        </div>
      </div>
      <div class="block-two-container" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset = "350">
        <div class="block-two-img">
          <img class="img2" src="homepage/homepage-fork.png">
        </div>
        <div class="block-two-text">
          <p>Improve your midgame tactics.</p>
        </div>
      </div>
      <div class="block-two-container" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset = "350">
        <div class="block-two-img">
          <img class="img2" src="homepage/homepage-backrank.png">
        </div>
        <div class="block-two-text">
          <p>Develop checkmate recognition.</p>
        </div>
      </div>
      <div class="block-two-container" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset = "350">
        <div class="block-two-img">
          <img class="img2" src="homepage/homepage-ladder.png">
        </div>
        <div class="block-two-text">
          <p>Master endgame patterns.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="block-three">
    <div class="block-three-center">
      <h4>How it Works</h4>

      <div class="block-three-slideshow">
        <Transition name="slide">
        <div v-if="displayBlock3Img==1" class="block-three-img">
          <h5>
            <router-link to="/account/register" class="homepage-nav">Sign Up</router-link>
             for an Account</h5>
          <img class="scroll-img" src="homepage/homepage-scroll-1.png">
          <ul>
            <li>Accounts are free</li>
            <li>Registration is quick and easy</li>
            <li>No personal information required</li>
          </ul>
        </div>
        </Transition>

        <Transition name="slide">
        <div v-if="displayBlock3Img==2" class="block-three-img">
          <h5>Complete each Lesson</h5>
          <img class="scroll-img" src="homepage/homepage-scroll-2.png">
          <ul>
            <li>Take notes on key information </li>
            <li>More than 20 lessons available</li> 
            <li>Learn new tactics and strategies</li>
          </ul>
        </div>
        </Transition>

        <Transition name="slide">
        <div v-if="displayBlock3Img==3" class="block-three-img">
          <h5>Apply what you Learned</h5>
          <img class="scroll-img" src="homepage/homepage-scroll-3.png">
          <ul>
            <li>Try out a new opening</li>
            <li></li>
            <li>Play games online or over the board</li> 
            <li>Chess sets can be purchased at the 
              <router-link to="/shop" class="homepage-nav">Shop</router-link>
            </li>
          </ul>
        </div>
        </Transition>
        
      </div>

      <div class="block-three-buttons">
        <div class="block-three-buttons-span">
          <button @click="changeBlock3Img(1)"
          v-bind:class="{ 'block-three-active-button' : displayBlock3Img == 1}">1</button>
          <button @click="changeBlock3Img(2)"
          v-bind:class="{ 'block-three-active-button' : displayBlock3Img == 2}">2</button>
          <button @click="changeBlock3Img(3)"
          v-bind:class="{ 'block-three-active-button' : displayBlock3Img == 3}">3</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      displayBlock3Img: 1,
    }
  },

  methods: {
    changeBlock3Img(num) {

      this.displayBlock3Img = 0;
      setTimeout(function () { this.displayBlock3Img = num }.bind(this), 1200);
     
    }
  }
}
</script>

<style scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.homepage-nav {
  color: inherit;
}

h1 {
  font-size: 45px;
  line-height: 240px;
}

h2 {
  font-size: 20px;
}

h3 {
  line-height: 100px;
  font-size: 20px;

  text-align: center;
}

h4 {
  line-height: 50px;
  font-size: 30px;
  width: 100%;

  text-align: center;

  text-decoration: underline;
}

h5 {
  font-size: 20px;
  line-height: 40px;
}

ul {
  text-align: center;
  list-style-type: none;

  padding-bottom: 60px;
}

.block-one {
  background-color: rgb(53,62,75);
  color: white;
  height: 500px;
  width: 100%;
  margin-top: 50px;

  box-sizing: border-box;
  padding: 50px;

}

.center-one {
  width: 100%;
  height: 100%;

  text-align: center;
}

.text-one {
  height: 100%;
  width: 50%;
  float: left;
}

.text-center-one {
  float: right;
  margin-right: 20px;
}

.img-one {
  height: 100%;
  width: 50%;
  float: right;
}

.img1 {
  height: 400px;
  float: left;
  margin-left: 80px;  
}

.block-two {
  background-color: white;
  color: black;
  display: block;
  overflow: auto;
  width: 100%;

  box-sizing: border-box;
  padding: 25px;
}

.block-two-container {
  width: 25%;
  height: 100%;

  float:left;
}

.block-two-text {
  font-size: 18px;
}

.block-two-img {
  width: 100%;

  float: left;

  box-sizing: border-box;
  padding: 10px;

  position: relative;
}

.img2 {
  object-fit: contain;
  width: 100%;
  max-width: 400px;
  max-height: 400px;

  position: sticky;

  left: 0;
  right:0;
  top: 0;
  bottom: 0;
  margin: auto;

  z-index:0;
}

.block-two-text {
  width: 100%;
  height: 10%;

  float: left;
}

.block-three {
  background-color: lightgray;
  color: black;
  height: 750px;
  width: 100%;
  box-sizing: border-box;
  padding: 50px 180px 50px 180px;
}

.block-three-center {
  min-width: 50%;
  height: 100%;
  margin: 0 auto;

  background-color: white;
  border-radius: 5px;

  box-sizing: border-box;
  padding: 20px;
}

.scroll-img {
  width: 100%;
  max-width: 500px;
}

.block-three-slideshow {
  height: 500px;
  width: 100%;
}

 .block-three-img {
  height: 100%;
  width: 100%;

  text-align: center;
 }

.block-three-buttons-span {
  width: 100%;
  display:flex;
  justify-content: space-around;
  padding-top: 10px;
}

.block-three-buttons {
  width: 100%;
  height: 100px;
}

.block-three-active-button {
  background-color: rgb(53,62,75);
  color: white;
  cursor:default;
}

.block-three-active-button:hover {
  background-color: rgb(53,62,75);
}

button {
  height: 30px;
  width: 30px;

  border-radius: 30px;

  background-color: darkgray;

  cursor: pointer;
 }

 button:hover {
  background-color: lightgray;
 }
 
@media only screen and (max-width: 1000px) {
  h1 {
    font-size: 30px;
    line-height: 100px;
  }

  ul {
    padding-bottom: 30px;
  }
  
  .block-one {
    box-sizing: content-box;
    padding: 0px;
    height: 650px;
  }

  .center-one {
    width: 100%;
  }

  .text-one {
    width: 100%;
    height: 200px;
    float:left;
  }

  .text-center-one {
    width: 100%;
    margin-right: 0px;
  }

  .img-one {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 5px;
  }

  .img1 {
    object-fit: contain;
    width: 100%;
    margin-left: 0px;
  }

  .block-two-container {
    width: 100%;
    padding-bottom: 50px;
    object-fit: contain;
  }

  .img2 {
    object-fit: contain;
    width: 100%;
    max-width: 400px;
  }

  .block-three {
    padding: 0;
    padding-top: 30px;
    padding-bottom: 30px;

    height: auto;
  }
  .block-three-center {
    width: 90%;
  }

  .block-three-slideshow {
    height: 500px;
    width: 100%;
    padding: 10px 0 10px;
  }

  .block-three-img {
    display: block;
    width: 100%;
    height: auto;
    min-height: none;
    
  }

  .block-three-buttons {
    height: auto;
  }
}

@media only screen and (max-width: 500px) {
  .block-three-slideshow {
    height: 450px;
  }
}

@media only screen and (max-width: 450px) {
  .block-three-slideshow {
    height: 420px;
  }
}

@media only screen and (max-width: 400px) {
  .block-three-slideshow {
    height: 380px;
  }
}

</style>