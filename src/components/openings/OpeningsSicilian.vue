<template>
<div>
  <div class="openings-header">
    <h3>Sicilian Defence</h3>
  </div>
  <div class="openings-center">
    <div class="openings-img">
      <img src="openings-sicilian-defence.png">
    </div>
    <p>The most frequent response to White's 1.e4 is the Sicilian Defense. The Sicilian Defense is a respectable and positionally sound opening that is used by both experts and beginners. The Sicilian is a confrontational beginning that often leads to dynamic and sharp positions.</p>
    <p class="openings-pro">Pros:</p>
    <ul>
      <li>Unbalanced games are created.</li>
      <li>Black has a lot of attacking options.</li>
      <li>High win rate for Black.</li>
    </ul>
    <p class="openings-con">Cons:</p>
    <ul>
      <li>Theory heavy.</li>
      <li>White has many counterplays.</li>
      <li>White gets a strong center.</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'OpeningsSicilian',
}
</script>

<style scoped>
h3 {
  text-align: center;
  line-height: 100px;
  font-size: 30px;
}

img {
  max-width:395px;
  max-height:395px;
  padding-bottom: 10px;

  width: 100%;

  margin-left: auto;
  margin-right: auto;
  display: block;
}

ul {
  list-style-position: outside;
  margin-left: 1em;
}

.openings-header {
  height: 100px;
  padding-top: 50px;
  box-sizing: content-box;
}

.openings-center {
  width: 50%;
  height: auto;
  padding-bottom: 20px;

  margin: 0 auto;
}

.openings-pro {
  padding-top: 10px;
  color: green;
}

.openings-con {
  padding-top: 10px;
  color: red;
}

.openings-img {
  max-width: 400px;
  max-height: 400px;

  margin: 0 auto;
}

@media only screen and (max-width: 1000px) {
  .openings-center {
    width: 80%;
    height: auto;
    padding-bottom: 20px;
  }
}

@media only screen and (min-height: 1000px) {
  .openings-center {
    height: calc(100vh - 322px);
  }


}

</style>