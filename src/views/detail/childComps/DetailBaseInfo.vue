<template>
<!-- 判断对象是否为空 -->
  <div class="base-info" v-if="Object.keys(baseInfo).length !== 0">
    <div class="title">
      {{baseInfo.title}}
    </div>
    <div class="info-price">
      <span class="n-price">{{baseInfo.newPrice}}</span>
      <span class="o-price">{{baseInfo.oldPrice}}</span>
      <span v-if="baseInfo.discount" class="discount">{{baseInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{baseInfo.columns[0]}}</span>
      <span>{{baseInfo.columns[1]}}</span>
      <span>{{baseInfo.services[baseInfo.services.length - 1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in baseInfo.services.length - 1" :key="index">
        <img :src="baseInfo.services[index - 1].icon" alt="">
        <span>{{baseInfo.services[index - 1].name}}</span>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
  .base-info {
    width: 100%;
    margin-top: 15px;
    padding: 0 10px;
    color: #999999;
    border-bottom: 5px solid #f2f5f8;
  }
  .title {
    font-size: 14px;
    text-align: justify;
    color: #222222;
  }

  .info-price {
    margin-top: 10px;
  }
  .info-price .n-price {
    color: var(--color-tint);
    font-size: 20px;
  }
  .info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    /* 定义穿过文本的一条线 */
    text-decoration: line-through;
  }
  .info-price .discount {
    font-size: 12px;
    position: relative;
    top: -5px;
    margin-left: 5px;
    padding: 4px 3px;
    color: #ffffff;
    border-radius: 10px;
    background-color: var(--color-tint);
  }

  .info-other{
    display: flex;
    /* 项目位于各行之间留有空白的容器内 */
    justify-content: space-between;
    font-size: 13px;
    margin-top: 15px;
    border-bottom: 2px solid rgba(100, 100, 100, 0.1);
  }

  .info-service {
    line-height: 40px;
    display: flex;
    justify-content: space-between;
  }

  .info-service-item img {
    position: relative;
    top: 2px;
    width: 14px;
    height: 14px;
  }

  .info-service-item span {
    font-size: 13px;
    margin-left: 5px;
    color: #333333;
  }

</style>
