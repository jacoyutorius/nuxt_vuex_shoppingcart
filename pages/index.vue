<template>
  <section class="container">
    <div>
      <h2 class="subtitle">
        Nuxt Shopping Cart
      </h2>

      <div class="cart">
        Items : {{ cartItemCount }}

        <table>
          <thead>
            <tr>
              <td></td>
              <td>Image</td>
              <td>Name</td>
              <td>Shop</td>
              <td>Price</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <item-row 
              v-for="(item, i) in cart" 
              v-bind:key="i" 
              :item="item" 
              in_cart="true">
            </item-row>
          </tbody>
        </table>
      </div>

      <div class="items">
        <div>
          <h3>Filter</h3>

          <button>All</button>
          <button>In Sale</button>
        </div>

        <table>
          <thead>
            <tr>
              <td></td>
              <td>Image</td>
              <td>Name</td>
              <td>Shop</td>
              <td>Price</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <item-row 
              v-for="(item, i) in items" 
              v-bind:key="i" 
              :item="item" 
              in_cart="false">
            </item-row>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'
import ItemRow from "~/components/ItemRow"
import { mapGetters, mapMutations } from "vuex"
import { GET_ITEMS } from "../store/mutation-type"

export default {
  computed: {
    items() {
      return this.$store.state.items
    },
    ...mapGetters(["cart", "cartItemCount"])
  },
  mounted(){
    this.GET_ITEMS()
  },
  methods: {
    ...mapMutations(["GET_ITEMS"])
  },
  components: {
    ItemRow
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

img {
  max-width: 100px;
}
</style>
