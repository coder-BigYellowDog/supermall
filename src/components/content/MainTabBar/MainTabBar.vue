<template>
  <div>
    <tab-bar>
      <!-- 父组件 App 向 子组件TabBarItem 传 path -->
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/classification">
        <img slot="item-icon" src="~assets/img/tabbar/classification.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/classification_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopping">
        <img slot="item-icon" src="~assets/img/tabbar/shopping.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopping_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" >
        <img slot="item-icon" src="~assets/img/tabbar/mine.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/mine_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../../common/TabBar/TabBar';
import TabBarItem from '../../common/TabBar/TabBarItem';
export default {
  name: 'MainTabBar' ,
  data() {
    return {

    }
  },
  components: {
      TabBar,
      TabBarItem
  }
}
</script>

<style >

</style>
