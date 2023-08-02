<template>
<div>
  <div class="shop-header"></div>
  <div class="shop-center">
    <div v-if="windowWidth>1000" class="shop-sidebar">
      <h4>Refinements</h4>
      <div v-for="property in refinements">
        <div class="shop-refinement">
          <h5>{{ property.name }}</h5>
          <ul v-for="tag in property.values">
            <label>
              <li>
                <input type="checkbox" v-model='tag.value' @click="checkProperty(property.name, tag.key, tag.value)"/>{{ tag.name }}
              </li>
            </label>
          </ul>
        </div>
      </div>    
    </div>
    
    <div class="shop-content">
      <div class="shop-row">
        <div class="shop-item" v-for="items in set">
          <img class="shop-img" v-bind:src="'/learn-chess/shop/' + items.img">
          <p>{{ items.name }}</p>
          <p>${{ items.price }}.00 CAD</p>
          <button class="shop-add" @click="addToCart(items)">{{ items.status }}</button>
        </div>
      </div>
    </div>

    <div class="shop-bag">
      <h4>Shopping Cart</h4>
      <div class="shop-cart" v-for="items in cart">
        <p class="shop-cart-text">{{ items }}</p>
      </div>
      <p class="shop-cart-num">${{ formatNumber(total) }} CAD</p>
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
        filter: [],
        cart: [],
        total: 0.00,
        refinements: [
          {name: 'Proportions', 
           values: [
              {name: "Small", key: 's', value: false},
              {name: "Medium", key: 'm', value: false},
              {name: "Large", key: 'l', value: false}
            ]
          },
          {name: 'Appearance', 
           values: [
              {name: "Red", key: 'r', value: false},
              {name: "Blue", key: 'b', value: false},
              {name: "Black", key: 'g', value: false}
            ]
          },
          {name: 'Movement', 
           values: [
              {name: "Magnetic", key: 'm', value: false},
              {name: "Non-Magnetic", key: 'n', value: false}
            ]
          }, 
          {name: 'Body', 
           values: [
              {name: "Wooden", key: 'w', value: false},
              {name: "Plastic", key: 'p', value: false}
            ]
          }, 
          {name: 'Collapsible', 
           values: [
              {name: "Folding", key: 'f', value: false},
              {name: "Non-Folding", key: 'n', value: false}
            ]
          },
          {name: 'Storage', 
           values: [
              {name: "Underbody", key: 'u', value: false},
              {name: "Bag", key: 'b', value: false}
            ]
          } 
        ],
        set: [
          {name: "Black Magnetic Plastic", price: 26, img:"blmp.png", status:"Add to Cart", p:'s', a:'g', m:'m', b:'p', c:'f', s:'u'},
          {name: "Red Non-Magnetic Wooden", price: 44, img:"rnw.png", status:"Add to Cart", p:'s', a:'r', m:'n', b:'w', c:'n', s:'u'},
          {name: "Blue Magnetic Wooden", price: 80, img:"bmw.png", status:"Add to Cart", p:'s', a:'b', m:'m', b:'w', c:'f', s:'b'},
          {name: "Red Magnetic Plastic", price: 39, img:"rmp.png", status:"Add to Cart", p:'m', a:'r', m:'m', b:'p', c:'n', s:'b'},
          {name: "Black Non-Magnetic Wooden", price: 28, img:"blnw.png", status:"Add to Cart", p:'m', a:'g', m:'n', b:'w', c:'f', s:'u'},
          {name: "Blue Magnetic Plastic", price: 35, img:"bmp.png", status:"Add to Cart", p:'m', a:'b', m:'m', b:'p', c:'n', s:'u'},
          {name: "Black Magnetic Wooden", price: 46, img:"blmw.png", status:"Add to Cart", p:'m', a:'g', m:'m', b:'w', c:'f', s:'b'},
          {name: "Blue Non-Magnetic Plastic", price: 55, img:"bnp.png", status:"Add to Cart", p:'m', a:'b', m:'n', b:'p', c:'n', s:'b'},
          {name: "Red Magnetic Wooden", price: 33, img:"rmw.png", status:"Add to Cart", p:'m', a:'r', m:'m', b:'w', c:'f', s:'u'},
          {name: "Blue Non-Magnetic Wooden", price: 53, img:"bnw.png", status:"Add to Cart", p:'l', a:'b', m:'n', b:'w', c:'n', s:'u'},
          {name: "Red Non-Magnetic Plastic", price: 38, img:"rnp.png", status:"Add to Cart", p:'l', a:'r', m:'n', b:'p', c:'f', s:'b'},
          {name: "Black Non-Magnetic Plastic", price: 46, img:"blnp.png", status:"Add to Cart", p:'l', a:'g', m:'n', b:'p', c:'n', s:'b'}
        ]
      }
  },
  methods: {
    formatNumber(num) {
      return parseFloat(num).toFixed(2)
    },
    formatCart(cart) {
      if (cart.length === 0) return "No items";
      return cart
    },
    addToCart(item) {
      if (this.cart.includes(item.name)) {
        this.total -= item.price;
        this.cart = this.cart.filter(function(e) { return e !== item.name })
        item.status = 'Add to cart';
      } else {
        this.total += item.price;
        this.cart.push(item.name)
        item.status = 'Remove from cart';
      }
    },
    checkProperty(property, value, check) {
      switch(property) {
        case 'Proportions':
          if (!check) {
              this.set.forEach((elem) => {
                if (elem.p != value) {
                  this.filter.push(elem)
                  this.set = this.set.filter(function(e) { return e !== elem })
                }
              });
            } else {
              this.filter.forEach((elem) => {
                if (elem.p != value) {
                  this.set.push(elem)
                  this.filter = this.filter.filter(function(e) { return e !== elem })
                }
              });
            }
            break;
        case 'Appearance':
        if (!check) {
            this.set.forEach((elem) => {
              if (elem.a != value) {
                this.filter.push(elem)
                this.set = this.set.filter(function(e) { return e !== elem })
              }
            });
          } else {
            this.filter.forEach((elem) => {
              if (elem.a != value) {
                this.set.push(elem)
                this.filter = this.filter.filter(function(e) { return e !== elem })
              }
            });
          }
          break;
        case 'Movement':
        if (!check) {
            this.set.forEach((elem) => {
              if (elem.m != value) {
                this.filter.push(elem)
                this.set = this.set.filter(function(e) { return e !== elem })
              }
            });
          } else {
            this.filter.forEach((elem) => {
              if (elem.m != value) {
                this.set.push(elem)
                this.filter = this.filter.filter(function(e) { return e !== elem })
              }
            });
          }
          break;
        case 'Body':
        if (!check) {
            this.set.forEach((elem) => {
              if (elem.b != value) {
                this.filter.push(elem)
                this.set = this.set.filter(function(e) { return e !== elem })
              }
            });
          } else {
            this.filter.forEach((elem) => {
              if (elem.b != value) {
                this.set.push(elem)
                this.filter = this.filter.filter(function(e) { return e !== elem })
              }
            });
          }
          break;
        case 'Collapsible':
        if (!check) {
            this.set.forEach((elem) => {
              if (elem.c != value) {
                this.filter.push(elem)
                this.set = this.set.filter(function(e) { return e !== elem })
              }
            });
          } else {
            this.filter.forEach((elem) => {
              if (elem.c != value) {
                this.set.push(elem)
                this.filter = this.filter.filter(function(e) { return e !== elem })
              }
            });
          }
          break;
        case 'Storage':
        if (!check) {
            this.set.forEach((elem) => {
              if (elem.s != value) {
                this.filter.push(elem)
                this.set = this.set.filter(function(e) { return e !== elem })
              }
            });
          } else {
            this.filter.forEach((elem) => {
              if (elem.s != value) {
                this.set.push(elem)
                this.filter = this.filter.filter(function(e) { return e !== elem })
              }
            });
          }
          break;
     }
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

ul {
  list-style: none;
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
  position:fixed;
  left:0;
  float: left;
}

.shop-bag {
  width: 200px;
  position: fixed; 
  right: 0;
  float: right;
  top: 50px;
}

.shop-center {
  width: 100%;
  min-height: calc(100vh - 201px);
}

.shop-refinement {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.shop-content {
  width: calc(100% - 400px);
  height: 100%;
  min-height: 502px;
  background-color: white;
  margin: 0 200px 0 200px;
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

.shop-cart-num {
  text-align: center;
  font-weight: bold;
  font-size: 25px;
}

@media only screen and (max-width: 1000px) {
.shop-sidebar {
  width: 0px;
  visibility: hidden;
}

.shop-content {
  width: 100%;
  margin: 0;
}

.shop-bag {
  position: relative;
  float: left;
  width: 100%;
  margin-bottom: 30px;
  top:auto;
}

}

</style>