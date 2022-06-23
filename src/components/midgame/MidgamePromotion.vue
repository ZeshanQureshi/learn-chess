<template>
<div>
  <div class="midgame-header">
    <h3>Promotion</h3>
  </div>
  <div class="midgame-center">
    <div class="midgame-img">
      <img src="midgame-promotion.png">
    </div>
    <p>Promotion in chess refers to the exchange of a pawn for a new queen, rook, bishop, or knight of the same colour. It happens as soon as the pawn reaches the last rank, with the player selecting the promotion piece. The new piece does not have to be one that has already been caught. The pawn must be promoted; it cannot remain a pawn.</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'MidgamePromotion',
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

.midgame-header {
  height: 100px;
  padding-top: 50px;
  box-sizing: content-box;
}

.midgame-center {
  width: 50%;
  height: auto;
  padding-bottom: 20px;

  margin: 0 auto;
}

.midgame-pro {
  padding-top: 10px;
  color: green;
}

.midgame-con {
  padding-top: 10px;
  color: red;
}

.midgame-img {
  max-width: 400px;
  max-height: 400px;

  margin: 0 auto;
}

@media only screen and (max-width: 1000px) {
  .midgame-center {
    width: 80%;
    height: auto;
    padding-bottom: 20px;
  }
}

@media only screen and (min-height: 1000px) {
  .midgame-center {
    height: calc(100vh - 322px);
  }


}

</style>