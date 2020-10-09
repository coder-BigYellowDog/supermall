<template>
    <div class="goods">
        <goods-list-item v-for="(item, index) in goodsList" :key="index" :goodsItem="item"></goods-list-item>
    </div>
</template>

<script>

import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  props: {
      goodsList: {
          type: Array,
          default() {
              return []
          }
      }
  },

  components: {
      GoodsListItem
  }
}
</script>

<style >
    .goods {
        display: flex;
        /* 包裹 */
        flex-wrap: wrap;
        /* 均等分 */
        justify-content: space-around;  
        padding: 2px;
        }


</style>
