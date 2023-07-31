<template>
<div>
  <div class="endgame-header">
    <h3>Smothered Mate</h3>
  </div>
  <div class="endgame-center">
    <div class="endgame-img">
      <img src="endgame-smothered-mate.png">
    </div>
    <p>In chess, a smothered mate is a checkmate in which the mated king is entirely surrounded (or smothered) by its own pieces, preventing it from moving.</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'endgameSmotheredMate',
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