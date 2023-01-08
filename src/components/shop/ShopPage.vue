<template>
<div>
  <div class="shop-header"></div>
  <div class="shop-center">
    <div v-if="windowWidth>1000" class="shop-sidebar">
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
          <label><li><input type="checkbox"/>Plastic</li></label>
        </ul>
      </div>

      <div class="shop-refinement">
        <h5>Board</h5>
        <ul>
          <label><li><input type="checkbox"/>Folding</li></label>
          <label><li><input type="checkbox"/>Non-Folding</li></label>
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
      <div class="shop-row">
        <div class="shop-item" v-for="items in set1">
          <img class="shop-img" v-bind:src="'/shop/' + items.img">
          <p>{{ items.name }}</p>
          <p>{{ items.cost }}</p>
          <button class="shop-add" @click="addItemToCart(items.name, items.price)">{{ items.status }}</button>
        </div>
      </div>
      <div class="shop-row">
        <div class="shop-item" v-for="items in set2">
          <img class="shop-img" v-bind:src="'/shop/' + items.img">
          <p>{{ items.name }}</p>
          <p>{{ items.cost }}</p>
          <button class="shop-add">Add to Cart</button>
        </div>
      </div>
      <div class="shop-row">
        <div class="shop-item" v-for="items in set3">
          <img class="shop-img" v-bind:src="'/shop/' + items.img">
          <p>{{ items.name }}</p>
          <p>{{ items.cost }}</p>
          <button class="shop-add">Add to Cart</button>
        </div>
      </div>
      <div class="shop-row">
        <div class="shop-item" v-for="items in set4">
          <img class="shop-img" v-bind:src="'/shop/' + items.img">
          <p>{{ items.name }}</p>
          <p>{{ items.cost }}</p>
          <button class="shop-add">Add to Cart</button>
        </div>
      </div>
    </div>

    <div  v-if="windowWidth > 1000" class="shop-bag">
      <h4>Shopping Cart</h4>
      <div class="shop-cart">
        <p class="shop-cart-text" v-for="item in cart">{{ item }}</p>
      </div>
      <div class="shop-button">
        <button>Checkout</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ShopPage',
  data () {
      return {
        windowWidth: window.innerWidth,
        cart: ['No Items'],
        total: 0,
        set1: [
          {name: "Black Magnetic Plastic", price: 26, img:"bmp.png", cost:"$26.00", tags:"magnetic", status:"Add to Cart"},
          {name: "Red Non-Magnetic Wooden", price: 44, img:"rnw.png", cost:"$44.00", tags:"magnetic", status:"Add to Cart"},
          {name: "Blue Magnetic Wooden", price: 80, img:"bmw.png", cost:"$80.00", tags:"magnetic", status:"Add to Cart"}
        ],
        set2: [
          {name: "Red Magnetic Plastic", price: 39, img:"bmp.png", cost:"$39.00", tags:"magnetic", status:"Add to Cart"},
          {name: "Black Non-Magnetic Wooden", price: 28, img:"bmp.png", cost:"$28.00", tags:"magnetic", status:"Add to Cart"},
          {name: "Blue Magnetic Plastic", price: 35, img:"bmp.png", cost:"$35.00", tags:"magnetic", status:"Add to Cart"}
        ],
        set3: [
          {name: "Black Magnetic Wooden", price: 46, img:"bmp.png", cost:"$46.00", tags:"magnetic", status:"Add to Cart"},
          {name: "Blue Non-Magnetic Plastic", price: 55, img:"bmp.png", cost:"$55.00", tags:"magnetic", status:"Add to Cart"},
          {name: "Red Magnetic Wooden", price: 33, img:"bmp.png", cost:"$33.00", tags:"magnetic", status:"Add to Cart"}
        ],
        set4: [
          {name: "Blue Non-Magnetic Wooden", price: 53, img:"bmp.png", cost:"$53.00", tags:"magnetic", status:"Add to Cart"},
          {name: "Red Non-Magnetic Plastic", price: 38, img:"bmp.png", cost:"$38.00", tags:"magnetic", status:"Add to Cart"},
          {name: "Black Non-Magnetic Plastic", price: 46, img:"bmp.png", cost:"$46.00", tags:"magnetic", status:"Add to Cart"}
        ],
      }
  },
  watch: {
    addItemToCart(nameItem, cost) {
      this.total += cost;

      if (this.cart.length == 1) {
        this.cart.pop;
      }

      this.cart.push = [nameItem]; 
    }
  }
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

h5 {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input {
  margin-right: 3px;
}

label {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
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

.shop-bag {
  width: 200px;
  height: 100%;
  border-right: 1px black solid;
  float: right;
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
  width: calc(100% - 400px);
  height: 100%;
  background-color: white;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
}
 
.shop-item {
  width: calc(33% - 11px);
  height: 300px;
  border: 1px black solid;
  margin: 5px;
  border-radius: 5px;
  background-color: white;
  float: left;
  text-align: center;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.shop-img {
  max-width: 80%;
  max-height: calc(100% - 100px);
  margin-left: auto;
  margin-right: auto;
  display: block;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

.shop-row {
  width: 100%;
}

.shop-button {
  display: flex;
  justify-content: center;
}

button {
  padding: 5px;
  background-color: black;
  color: lightgray;
  border-radius: 5px;
  margin-top: 20px;
}

button:hover {
  cursor: pointer;
  color: white;
}

.shop-cart-text {
  text-align: center;
}

@media only screen and (max-width: 1000px) {


}

</style>