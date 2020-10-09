<template>
  <div class="cart-list">
    <scroll  class="content" ref="scroll">
      <!-- <div v-for="(item, index) in cartList" :key="index">{{item}}</div> -->
      <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/Scroll/Scroll'
import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'

export default {
  name: 'CartList',
  data() {
    return {
    }
  },
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    // 计算属性可直接使用
    ...mapGetters([
      'cartLength',
      'cartList'
    ])
  },
  activated () {
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
  .cart-list{
    height: calc(100% - 44px - 49px - 40px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>
