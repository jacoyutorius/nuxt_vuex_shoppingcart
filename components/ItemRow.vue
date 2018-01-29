<template>
  <tr>
    <td>{{ item.id }}</td>
    <td><img :src="item.image_url" :alt="item.image_url"></td>
    <td>{{ item.name }}</td>
    <td>{{ item.shop }}</td>
    <td :style="priceStyle">{{ price }}</td>
    <td>
      <button v-if="in_cart != 'true'" class="button" @click="ADD_ITEM(item)">Add</button>
      <button v-else class="button" @click="REMOVE_ITEM(item)">Remove</button>
    </td>
  </tr>
</template>

<script>
import { mapActions, mapMutations } from "vuex"
import { ADD_ITEM, REMOVE_ITEM } from "../store/mutation-type"

export default {
  props: [ "item", "in_cart" ],
  computed: {
    price() {
      return "¥" + (this.item.in_sale ? this.item.sale_price : this.item.price);
    },
    priceStyle(){
      return this.item.in_sale ? "color: red" : "";
    }
  },
  methods: {
    item_price(item) {
      return item.in_sale ? item.sale_price : item.price;
    },
    item_price_style(item) {
      return item.in_sale ? "color:red" : "";
    },
    ...mapMutations(["ADD_ITEM", "REMOVE_ITEM"])
  }
}
</script>