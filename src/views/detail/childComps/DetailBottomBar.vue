<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div >
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
      <div class="bar-item bar-right">
        
        <div class="cart" @click="addToCar">加入购物车</div>
        <div class="buy">购买</div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {};
  },
  components: {},
  methods: {
    addToCar(){
      this.$emit("addToCar")
    }
  },
};
</script>

<style scoped>
  .bottom-bar{
    height: 49px;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    display: flex;
    text-align: center;
  }

  .bar-item{
    flex: 1;
    display: flex;
  }

  .bar-item>div{
    flex: 1;
    /* width: 50px; */
  }

  .bar-left .text{
    font-size: 13px;
  }

  .bar-left .icon{
    /* 此元素将显示为块级元素，此元素前后会带有换行符 */
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service{
    background-position: 0 -54px;
  }

  .bar-left .shop{
    background-position: 0 -98px;
  }

  .bar-right{
    font-size: 14px;
    /* width: 60px; */
    color: #ffffff;
    line-height: 49px;
  }
  
  .bar-right .cart{
    width: 80px;
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy{
    width: 80px;
    background-color: #f69;
  }

  .sport-ball{
    position: absolute;
    left: 225px;
    bottom: 20px;
  }
</style>
