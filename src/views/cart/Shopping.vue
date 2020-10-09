<template>
  <div class="cart">
    <nav-tab class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-tab>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>

import NavTab from 'components/common/NavTab/NavTab'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'

export default {
  name:  'Shopping',
  data() {
    return {
    }
  },
  components: {
    NavTab,
    CartList,
    CartBottomBar
  },
  computed: {
    // 通过 mapGetters 计算属性可直接使用 getters 的方法
    ...mapGetters([
      'cartLength'
    ])
  },
}
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #ffffff;
    font-weight: 700;
  }
</style>
