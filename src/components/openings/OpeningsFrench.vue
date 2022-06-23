<template>
  <div class="openings-header">
    <h3>French Defence</h3>
  </div>
  <div class="openings-center">
    <div class="openings-img">
      <img src="openings-french-defence.png">
    </div>
    <p>One of the most popular Black answers to 1.e4 is the French Defense. Since the 1800s, it has been a staple of masters' repertoires and a favourite among positional players. This beginning, which usually leads to slower games, is a wonderful choice for players of all levels.</p>
    <p class="openings-pro">Pros:</p>
    <ul>
      <li>Solid and strong structure.</li>
      <li>Opportunity to counterattack.</li>
      <li>Simple to pick up.</li>
    </ul>
    <p class="openings-con">Cons:</p>
    <ul>
      <li>Black's light bishop is restricted.</li>
      <li>Low attacking presence.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OpeningsFrench',
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