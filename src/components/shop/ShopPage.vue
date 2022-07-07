<template>
<div>
  <div class="shop-header"></div>
  <div class="shop-center">
    Coming Soon!
    <!--
    <div class="shop-sidebar">
      <h4>Refinements</h4>
      <div class="shop-refinement">
        <h5>Size</h5>
        <ul>
          <label><li><input type="checkbox"/>Small</li></label>
          <label><li><input type="checkbox"/>Medium</li></label>
          <label><li><input type="checkbox"/>Large</li></label>
        </ul>
      </div>

      <div class="shop-refinement">
        <h5>Colour</h5>
        <ul>
          <label><li><input type="checkbox"/>Red</li></label>
          <label><li><input type="checkbox"/>Blue</li></label>
          <label><li><input type="checkbox"/>Black</li></label>
        </ul>
      </div>

      <div class="shop-refinement">
        <h5>Movement</h5>
        <ul>
          <label><li><input type="checkbox"/>Magnetic</li></label>
          <label><li><input type="checkbox"/>Non-Magnetic</li></label>
        </ul>
      </div>

      <div class="shop-refinement">
        <h5>Material</h5>
        <ul>
          <label><li><input type="checkbox"/>Wooden</li></label>
          <label><li><input type="checkbox"/>Metaliic</li></label>
          <label><li><input type="checkbox"/>Plastic</li></label>
          <label><li><input type="checkbox"/>Glass</li></label>
        </ul>
      </div>

      <div class="shop-refinement">
        <h5>Board</h5>
        <ul>
          <label><li><input type="checkbox"/>Folding</li></label>
          <label><li><input type="checkbox"/>Single Piece</li></label>
        </ul>
      </div>

      <div class="shop-refinement">
        <h5>Storage</h5>
        <ul>
          <label><li><input type="checkbox"/>Underboard</li></label>
          <label><li><input type="checkbox"/>None</li></label>
        </ul>
      </div>
    </div>
    

    <div class="shop-content">
      <div class="shop-item"></div>
      <div class="shop-item"></div>
      <div class="shop-item"></div>
      <div class="shop-item"></div>
      <div class="shop-item"></div>

    </div>
      -->
  </div>
</div>
</template>

<script>
export default {
  name: 'ShopPage',

}
</script>

<style scoped>
h4 {
  width: 100%;
  font-size: 20px;
  line-height: 40px;

  text-align: center;
  text-decoration: underline;

  float: left;
}

input {
  margin-right: 3px;
}

label:hover {
  text-decoration: underline;
  color: rgb(53,62,75);
}
.shop-header {
  height: 50px;
  width: 100%;
}

.shop-sidebar {
  width: 200px;
  height: 100%;
  border-right: 1px black solid;
  float: left;
}

.shop-center {
  width: 100%;
  height: calc(100vh - 202px);
  display: flex;
}

.shop-refinement {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.shop-content {
  width: 100%;
  height: 100%;
  background-color: white;
  float: right;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
}
 
.shop-item {
  width: 25%;
  height: 300px;
  border: 1px black solid;
  margin: 5px;
  border-radius: 5px;
  background-color: white;
  float: left;
}

@media only screen and (max-width: 1000px) {


}

</style>