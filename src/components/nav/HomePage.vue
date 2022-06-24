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
      <div class="block-two-container">
        <div class="block-two-img">
          <img class="img2" src="homepage/homepage-fianchetto.png">
        </div>
        <div class="block-two-text">
          <p>Discover unique openings.</p>
        </div>
      </div>
      <div class="block-two-container">
        <div class="block-two-img">
          <img class="img2" src="homepage/homepage-fork.png">
        </div>
        <div class="block-two-text">
          <p>Improve your midgame tactics.</p>
        </div>
      </div>
      <div class="block-two-container">
        <div class="block-two-img">
          <img class="img2" src="homepage/homepage-backrank.png">
        </div>
        <div class="block-two-text">
          <p>Develop checkmate recognition.</p>
        </div>
      </div>
      <div class="block-two-container">
        <div class="block-two-img">
          <img class="img2" src="homepage/homepage-ladder.png">
        </div>
        <div class="block-two-text">
          <p>Learn endgame patterns.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="block-three">
    <div class="block-three-center">
      <h4>How it Works</h4>

      <div class="block-three-slideshow">
        <div v-if="displayBlock3Img==1" class="block-three-img">
          <h5>1. Sign Up for a Free Account</h5>
        </div>

        <div v-if="displayBlock3Img==2" class="block-three-img">
          <h5>2. Learn from each Lesson</h5>
        </div>

        <div v-if="displayBlock3Img==3" class="block-three-img">
          <h5>3. Apply what you Learned</h5>
        </div>
      </div>

      <div class="block-three-buttons">
        <div class="block-three-buttons-span">
          <button @click="changeBlock3Img(1)" class="block-three-slideshow-button">1</button>
          <button @click="changeBlock3Img(2)" class="block-three-slideshow-button">2</button>
          <button @click="changeBlock3Img(3)" class="block-three-slideshow-button">3</button>
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
      this.displayBlock3Img = num;
    }
  }
}
</script>

<style scoped>
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

  text-align: center;
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

input {
  border: 1px black solid;
  background-color: white;
  text-align: center;
  width: 50%;
  min-width: 254px;

  display: block;
  margin : 0 auto;
  margin-bottom: 30px;
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
  width: 100%;
  height: 100%;
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
  background-color: white;
  color: black;
  height: 600px;
  width: 100%;
  box-sizing: border-box;
  padding: 50px 180px 50px 180px;
}

.block-three-center {
  width: 50%;
  height: 100%;
  margin: 0 auto;

  background-color: white;
  border-radius: 5px;

  box-sizing: border-box;
  padding: 20px;
}

.block-three-slideshow {
  height: 400px;
  width: 100%;
  border: 1px black solid;
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

 .block-three-slideshow-button {
  height: 30px;
  width: 30px;

  border-radius: 30px;

  background-color: darkgray;
 }

 .block-three-slideshow-button:hover {
  background-color: lightgray;
 }
 
@media only screen and (max-width: 1000px) {
  h1 {
    font-size: 30px;
    line-height: 100px;
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

}

</style>