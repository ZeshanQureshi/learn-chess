<template>
<div>
  <div class="endgame-header">
    <h3>Fool's Mate</h3>
  </div>
  <div class="endgame-center">
    <div class="endgame-img">
      <img src="endgame-fools-mate.png">
    </div>
    <p>The fool's mate, also known as the two-move checkmate, occurs in chess when the opponent is checked after making the fewest number of moves from the opening position. Only Black is capable of achieving it, resulting in checkmate with the queen on the second move. The fool's mate got its moniker because it can only happen if White makes a particularly grave error. This checkmate rarely happens in practice, not even among rank novices.</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'endgameFoolsMate',
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

.endgame-header {
  height: 100px;
  padding-top: 50px;
  box-sizing: content-box;
}

.endgame-center {
  width: 50%;
  min-height: calc(100vh - 321px);
  padding-bottom: 20px;

  margin: 0 auto;
}

.endgame-pro {
  padding-top: 10px;
  color: green;
}

.endgame-con {
  padding-top: 10px;
  color: red;
}

.endgame-img {
  max-width: 400px;
  max-height: 400px;

  margin: 0 auto;
}

@media only screen and (max-width: 1000px) {
  .endgame-center {
    width: 80%;
    height: auto;
    padding-bottom: 20px;
  }
}

@media only screen and (min-height: 1000px) {
  .endgame-center {
    height: calc(100vh - 322px);
  }


}

</style>