<template>
<div>
  <div class="openings-header">
    <h3>Pirc Defence</h3>
  </div>
  <div class="openings-center">
    <div class="openings-img">
      <img src="openings-pirc-defence.png">
    </div>
    <p>The Pirc Defense is a newly developed strategy for Black to counter White's 1.e4 opening. The Pirc  centers around black's rapid kingside fianchetto.</p>
    <p class="openings-pro">Pros:</p>
    <ul>
      <li>Black has a lot of flexibility in terms of how they can play.</li>
      <li>It's a strong, active defence.</li>
      <li>White is readily provoked by Black.</li>
    </ul>
    <p class="openings-con">Cons:</p>
    <ul>
      <li>White has a variety of options for dealing with the Pirc.</li>
      <li>White can put strain on Black by playing aggressively.</li>
      <li>White can also play cautiously to limit Black's options.</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'OpeningsPirc',
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