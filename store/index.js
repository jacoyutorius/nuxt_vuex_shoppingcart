import Vuex from "vuex"
import { ADD_ITEM, REMOVE_ITEM, GET_ITEMS } from "./mutation-type"
import axios from "axios"

const store = () => new Vuex.Store({
  state: {
    items: [],
    cart : []
  },
  getters: {
    cart(state){
      return state.cart;
    },
    cartItemCount(state) {
      return state.cart.length;
    }
  },
  mutations: {
    [ADD_ITEM] (state, item) {
      console.log("mutations - addItem")
      if (state.cart.indexOf(item) < 0){
        state.cart.push(item)
      }
    },
    [REMOVE_ITEM] (state, item) {
      console.log("mutations - removeItem")
      state.cart.splice(state.cart.indexOf(item), 1)
    },
    [GET_ITEMS] (state) {
      return axios.get("/data.json")
        .then(res => res.data)
        .then(data => {
          state.items = data;
        });
    }
  }
})
export default store;