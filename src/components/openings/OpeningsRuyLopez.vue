<template>
  <div class="openings-header">
    <h3>Ruy Lopez</h3>
  </div>
  <div class="openings-center">
    <div class="openings-img">
      <img src="openings-ruy-lopez.png">
    </div>
    <p>The Ruy Lopez is one of the most well-known and studied chess openings. The majority of the world's best players have absorbed this rich beginning into their repertoire, and many of them practice  from both sides. Despite having a lot of theory, it's a fun opening for players of all skill levels.</p>
    <p class="openings-pro">Pros:</p>
    <ul>
      <li>It results in a game that is extremely complicated.</li>
      <li>It has a tendency to put long-term strain on Black.</li>
      <li>White develops quick, and can castle early.</li>
    </ul>
    <p class="openings-con">Cons:</p>
    <ul>
      <li>It's challenging to grasp its complex theory.</li>
      <li>Black has a wide range of defences from which to pick.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OpeningsRuyLopez',
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