<template>
  <div class="tab-bar-item" @click="btnclick">
    <!-- <img src="../../assets/img/tabbar/shopping.png" alt="">
    <div>首页</div>-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else >
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  // 获取父组件的path
  props:{
          path: String,
          activeColor: {
            type: String,
            default: 'red'
          }
  },
  data() {
    return {
        // isActive: true, 
    }
  },
  computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
  },
  methods: {
      btnclick(){
          // 切换路径
          // console.log('点击')
          if(this.$route !== this.$router){
            this.$router.push(this.path)
          }
        }
  },
  
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  /* 垂直居中 */
  /* line-height:50px; */
}

/* 图片样式 */
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  /* 图片下面会多 3px */
  vertical-align: middle;
  margin-bottom: 2px;
}

.active {
  color: red;
}
</style>
