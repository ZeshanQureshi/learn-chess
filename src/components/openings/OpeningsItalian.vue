<template>
<div>
  <div class="openings-header">
    <h3>Italian Game</h3>
  </div>
  <div class="openings-center">
    <div class="openings-img">
      <img src="openings-italian-game.png">
    </div>
    <p>The Italian Game is one of the most ancient chess openings, dating back millennia. Slower, positional games as well as open, tactical clashes might result from the classic 1.e4 opening. The Italian Game is a component of the repertory of players of all levels, despite its popularity among beginners.</p>
    <p class="openings-pro">Pros:</p>
    <ul>
      <li>Simple play.</li>
      <li>Concentration on the center.</li>
      <li>Rapid advancement.</li>
    </ul>
    <p class="openings-con">Cons:</p>
    <ul>
      <li>Bishop is exposed until defended.</li>
      <li>Less pressure on Black center.</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'OpeningsItalian',
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