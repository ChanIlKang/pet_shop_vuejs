<template>
  <header>
    <div class="navbar navbar-light bg-light">
      <div class="navbar-brand">
        <h1>
          <router-link :to="{name: 'Home'}">
            {{ siteName }}
          </router-link>
        </h1>
      </div>

      <!--      Login & Out Button-->
      <div class="nav navbar-nav navbar-right cart">

        <!--      Login Button-->
        <div v-if="!mySession">
          <button type="button"
                  class="btn btn-default btn-lg"
                  v-on:click="signIn">
            Login
          </button>
        </div>
        <!--      LogOut Button-->
        <div v-else>
          <button type="button"
                  class="btn btn-default btn-lg"
                  v-on:click="signOut">
            <img class="photo"
                 :src="mySession.photoURL"/>
            LogOut
          </button>
        </div>
      </div>
      <!--      Check Out Button-->
      <div class="nav navbar-nav ms-auto cart text-right">
        <router-link active-class="active"
                     :to="{name: 'Form'}"
                     class="btn btn-secondary btn-lg">
            <span><i class="fa-solid fa-cart-shopping"></i>
              {{ cartItemCount }}
            </span>
          <span>Check Out</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>


export default {
  name: "Header-",
  data() {
    return {
      siteName: "Vue.Js Pet Shop"
    }
  },
  props: [
    'cartItemCount'
  ],
  methods: {
    showCheckOut() {
      this.$router.push({name: 'Form'})
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  color: blue;
  /*color: black;*/
}
</style>