<template>
  <div class="midgame-header">
    <h3>Hanging Piece</h3>
  </div>
  <div class="midgame-center">
    <div class="midgame-img">
      <img src="midgame-hanging-piece.png">
    </div>
    <p>A hanging item is one that is undefended and vulnerable to capture. In other terms, a dangling item is vulnerable to attack since it is undefended or "loose." The term "en prise" refers to a piece that can be captured (a synonym for being exposed to capture).</p>
  </div>
</template>

<script>
export default {
  name: 'MidgameHangingPiece',
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