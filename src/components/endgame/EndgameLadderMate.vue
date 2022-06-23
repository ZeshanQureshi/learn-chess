<template>
  <div class="endgame-header">
    <h3>Ladder Mate</h3>
  </div>
  <div class="endgame-center">
    <div class="endgame-img">
      <img src="endgame-ladder-mate.png">
    </div>
    <p>Two significant pieces, such as two queens, two rooks, or one rook and one queen, cooperate to move the opposing king to one side of the board in the ladder mate.</p>
  </div>
</template>

<script>
export default {
  name: 'endgameLadderMate',
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
  height: auto;
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