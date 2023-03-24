<template>
  <div>
    <Header :cartItemCount="cartItemCount"></Header>
    <main>
      <div v-for="(product, key) in products" :key="key">
        <div class="row">
          <div class="col-md-5 offset-md-0">
            <figure>
              <img alt="productImage" class="product" :src="require(`../${product.image}`)"/>
            </figure>
          </div>
          <div class="col-md-5 offset-md-0 description">
            <!--            <h1>{{ product.title }}</h1>-->
            <div class="col-md-6 offset-md-0 description">
              <router-link
                  :to="{ name : 'Id', params: {id: product.id}}">
                {{ product.title }}
              </router-link>
              <p v-html="product.description"></p>
            </div>
            <p v-html="product.description"></p>
            <p class="price">{{ formattedPrice }}</p>
            <button class="btn btn-primary btn-lg"
                    @click="addToCart(product)"
                    v-if="canAddToCart(product)">
              Add to cart
            </button>
            <button disabled="true" class="btn btn-primary btn-lg" v-else>
              Add to cart
            </button>
            <transition name="bounce" mode="out-in">
            <span class="inventory-message"
                  v-if="product.availableInventory - cartCount(product.id) === 0">
              Sold Out!</span>
              <span class="inventory-message"
                    v-else-if="product.availableInventory - cartCount(product.id) < 5">
              {{ product.availableInventory - cartCount(product.id) }} Left!</span>
              <span class="inventory-message" v-else>
              Buy Now!</span>

            </transition>
            <div class="rating">
            <span v-bind:class="{'rating-active': checkRating(n, product)}"
                  :key="key"
                  v-for="(n, key) in 5">☆
            </span>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: "Main-",
  components: {Header},
  data() {
    return {
      // products: [],
      cart: []
    }
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    cartItemCount() {
      return this.cart.length || ''
    },
    formattedPrice() {
      let price = this.products.price;

      if (!parseInt(price)) {
        return "";
      }

      if (price > 99999) {
        let priceString = (price / 100).toFixed(2);
        let priceArray = priceString.split("").reverse();
        let index = 3;

        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ",");
          index += 4;
        }

        return "$" + priceArray.reverse().join("");
      } else {
        return "$" + (price / 100).toFixed(2);
      }
    }
  },
  methods: {
    addToCart(aProduct) {
      this.cart.push(aProduct.id);
    },
    checkRating(n, myProduct) {
      return (myProduct.rating - n) >= 0
    },
    canAddToCart(aProduct) {
      return aProduct.availableInventory > this.cartCount(aProduct.id);
    },
    cartCount(id) {
      let count = 0;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    }
  },
  created() {
    this.$store.dispatch('initStore');
    // axios.get('http://localhost:3000/products')
    //     .then((response) => {
    //       this.products = response.data.products;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
  }
}
</script>

<style scoped>
.product {
  margin-top: 30px;
  margin-left: 20px;
  max-height: 300px;
  max-width: 100%;
}

.bounce-enter-active {
  animation: shake 0.72s cubic-bezier(.37, .07, .19, .97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

@keyframes shake {
  10%, 90% {
    color: red;
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    color: red;
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0)
  }
}
</style>