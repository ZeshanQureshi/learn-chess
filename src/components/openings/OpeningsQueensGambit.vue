<template>
<div>
  <div class="openings-header">
    <h3>Queen's Gambit</h3>
  </div>
  <div class="openings-center">
    <div class="openings-img">
      <img src="openings-queens-gambit.png">
    </div>
    <p>The Queen's Gambit is one of White's most well-known and well-known 1.d4 openings. The Queen's Gambit, unlike other 1.e4 openings, frequently turns into a strategic game rather than an all-out tactical war. Despite the fact that it has been around for centuries, every elite player's repertoire includes this opening. It's also a great option for intermediate and beginner players.</p>
    <p class="openings-pro">Pros:</p>
    <ul>
      <li>Battles for control of the centre.</li>
      <li>It applies direct pressure to Black Gains.</li>
    </ul>
    <p class="openings-con">Cons:</p>
    <ul>
      <li>White may have to wait a long time to reclaim the pawn.</li>
      <li>Black may try to counterattack d4.</li>
      <li>Reduced pressure on Black king's side.</li>
    </ul>
  </div>
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
  min-height: calc(100vh - 321px);
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