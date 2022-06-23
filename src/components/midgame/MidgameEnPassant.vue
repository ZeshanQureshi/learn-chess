<template>
<div>
  <div class="midgame-header">
    <h3>En Passant</h3>
  </div>
  <div class="midgame-center">
    <div class="midgame-img">
      <img src="midgame-en-passant.png">
    </div>
    <p>In chess, the en passant capture is a move. A pawn that has recently advanced two squares in one move can be captured by an enemy piece that is horizontally adjacent. As though the advancing pawn had only moved one square, the capturing pawn moves to the square that the advancing pawn passed over. This type of capture is only allowed on the turn after the two-square advance; it cannot be done on a subsequent turn.</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'MidgameEnPassant',
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