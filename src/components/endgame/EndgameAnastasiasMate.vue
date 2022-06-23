<template>
  <div class="endgame-header">
    <h3>Anastasia's Mate</h3>
  </div>
  <div class="endgame-center">
    <div class="endgame-img">
      <img src="endgame-anastasias-mate.png">
    </div>
    <p>A knight and rook work together in Anastasia's mate to trap the adversary king between the side of the board on one side and a friendly piece on the other. To get to the position, the queen is frequently initially sacrifaced along the a-file or h-file.</p>
  </div>
</template>

<script>
export default {
  name: 'endgameAnastasiasMate',
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