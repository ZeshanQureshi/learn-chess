<template>
  <div class="openings-header">
    <h3>Caro Kann Defence</h3>
  </div>
  <div class="openings-center">
    <div class="openings-img">
      <img src="openings-caro-kann-defence.png">
    </div>
    <p>The Caro-Kann Defense is well-known for its sturdiness. The defining move, 1...c6, is the fourth most common response to 1.e4 and nearly twice as popular as the fifth. It prepares for 2...d5 without blocking in the light-squared bishop, which is regarded as the French Defense's fundamental flaw (1.e4 e6).</p>
    <p class="openings-pro">Pros:</p>
    <ul>
      <li>White gets resourceful light bishop.</li>
      <li>Strong pawn structure.</li>
    </ul>
    <p class="openings-con">Cons:</p>
    <ul>
      <li>Slow development.</li>
      <li>White has counterplay.</li>
      <li>Black gets trapped light bishop.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OpeningsQueensGambit',
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