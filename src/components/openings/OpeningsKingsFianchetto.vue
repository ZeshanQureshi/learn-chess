<template>
  <div class="openings-header">
    <h3>King's Fianchetto</h3>
  </div>
  <div class="openings-center">
    <div class="openings-img">
      <img src="openings-kings-fianchetto.png">
    </div>
    <p>Often known as the Hungarian Opening, White prepares to fianchetto the king's-bishop (Bg2), from where it will attack into the centre. When compared to the King's Indian assault, the delay of Nf3 introduces certain complications.</p>
    <p class="openings-pro">Pros:</p>
    <ul>
      <li>Very strong bishop.</li>
      <li>Heavy Black queenside pressure.</li>
      <li>A flexible position.</li>
    </ul>
    <p class="openings-con">Cons:</p>
    <ul>
      <li>Black usually gets center.</li>
      <li>Black can use pawns to block bishop.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OpeningsKingsFianchetto',
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