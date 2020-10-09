<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-top">
      <img :src="shopInfo.logo" alt="">
      <span class="title">{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shopInfo.sells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shopInfo.cGoods}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">
        进店逛逛
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  filters: {
    sellCountFilter(value) {
      if(value < 1000) return value;
      // 四舍五入为指定小数位数的数字
      return (value / 1000).toFixed(1) + '万';
    }
  }

}
</script>

<style scoped>
  .shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shop-top {
    line-height: 45px;
    display: flex;
    /* 居中对齐弹性盒的各项 <div> 元素 */
    align-items: center;
  }

  .shop-top img {
    width: 45px;
    height: 45px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }

  .shop-top .title {
    margin-left: 10px;
    vertical-align: center;
  }

  .shop-middle {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }

  .shop-middle-item {
    flex: 1;
  }

  .shop-middle-left {
    display: flex;
    /* 元素中的各项周围留有空白 */
    justify-content: space-evenly;
    text-align: center;
    color: #333333;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .sells-count,
  .goods-count {
    font-size: 18px;
  }

  .sells-text,
  .goods-text {
    font-size: 12px;
    margin-top: 10px;
  }

  .shop-middle-right {
    font-size: 13px;
    color: #333333;
  }

  .shop-middle-right table {
    margin-left: 30px;
    width: 120px;
  }

  .shop-middle-right table td {
    padding: 5px 0;
  }

  .shop-middle-right .score {
    color: #5ea732;
  }

  .shop-middle-right .score-better {
    color: #f13e3a;
  }

  .shop-middle-right .better span {
    padding: 3px;
    text-align: center;
    color: #ffffff;
    background-color: #5ea732;
  }

  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }

  .shop-bottom {
    margin-top: 15px;
    text-align: center;
  }

  .enter-shop{
    font-size: 14px;
    line-height: 30px;
    display: inline-block;
    width: 150px;
    height: 30px;
    text-align: center;
    border-radius: 10px;
    background-color: #f2f5f8;
  }
</style>
