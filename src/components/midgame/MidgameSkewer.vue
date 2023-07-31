<template>
<div>
  <div class="midgame-header">
    <h3>Skewer</h3>
  </div>
  <div class="midgame-center">
    <div class="midgame-img">
      <img src="midgame-skewer.png">
    </div>
    <p>A skewer, comparable to a pin in chess, is an attack on two pieces in a line. The distinction between a skewer and a "reverse pin" is that in a skewer, the more precious piece is the one that is directly attacked. To avoid losing material, the opponent is forced to move the more precious piece, exposing the less valuable piece, which can then be captured.</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'MidgameSkewer',
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
  min-height: calc(100vh - 321px);
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