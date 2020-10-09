<template>
  <div id="home">
    <nav-tab class="home-nav">
      <div slot="center">购物街</div>
    </nav-tab>
    <tab-control ref="tabControl1"
                   :titles="['流行', '新款', '精选']" 
                   @tabclick="tabClick"
                   class="tabcontrol"
                   v-show="isTabFixed"></tab-control>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore"
            >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view></feature-view>
      <!-- 商品类型分类组件 -->
      <tab-control ref="tabControl2"
                   :titles="['流行', '新款', '精选']" 
                   @tabclick="tabClick"></tab-control>
      <goods-list :goodsList="showGoods"></goods-list>
    </scroll>
    <!-- 组件事件监听：必须给对应的事件加上 .native 修饰符，才能进行监听 -->
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureView";

import NavTab from "components/common/NavTab/NavTab.vue";
import TabControl from "components/content/TabControl/TabControl.vue";
import GoodsList from "components/content/Goods/GoodsList";
import Scroll from "components/common/Scroll/Scroll.vue";
import BackTop from 'components/content/BackTop/BackTop'

import { getHomeMultidataRequest, getHomeGoodsRequest } from "network/home";
import { debounce } from "common/util.js"
import { itemListenerMixin, backTopListener } from 'common/mixin.js'

export default {
  name: "Home",
  
  // 使用（混入）中的代码
  mixins: [itemListenerMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      isTabFixed: false,
      tabOffsetTop: 0,
      saveY: 0,
      itemImgListener: null
    };
  },
  components: {
    NavTab,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  
  created() {
    // 1.请求多条数据
    this.getHomeMultidata();

    // 2.请求商品信息
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // // 如果想见 showGoods写在methods 
    // // 手动点击一次，pop
    // this.tabClick(0)

  },

  // mounted 中要执行的 refresh 已经写在 mixin.js ,通过 mixins 调用
  mounted() {
    // // 1.防抖动函数，图片加载完成的事件监听
    // const refresh = debounce(this.$refs.scroll.refresh, 50)
    // // 3.监听item中图片加载完成
    // // 保存函数
    // this.itemImgListener = () => {  // 这里会被调用30次
    //   refresh()
    // }
    // this.$bus.$on('itemImgLoad', this.itemImgListener)
  },
  activated() {  // 路由再次活跃时调用
    this.$refs.scroll.refresh()
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {  // 记录离开首页时的 Y 坐标
    this.saveY =  this.$refs.scroll.getScrollY()
    // console.log(this.saveY)
    // 取消全局事件监听
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },

  computed: {
    showGoods() {
      // 开始已经请求了pop、new、sell存储在goods中
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    // 事件监听方法
    // 将 this.currentType改成与点击的类型一致
    tabClick(index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // // 需要created中默认点击一次（建议使用计算属性）
      // this.showGoods =  this.goods[this.currentType].list

      // 统一两个tabControl的currentIndex值
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backTop() {  // 点击返回顶部
      this.$refs.scroll.scroll.scrollTo(0, 0, 800)
    },
    // 也可通过 混入调用(见详情页)
    contentScroll(position) {  // 接收子组件的位置信息
      // 1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 600

      // 2.决定tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
      
    },
    loadMore() {  // 上拉加载更多
      
      // 请求当前 currentType 的更多数据
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad() {  // 所有的组件都有一个属性 $el: 用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      // console.log(this.tabOffsetTop)
    },
    

    // 封装网络请求数据的方法
    getHomeMultidata() {
      getHomeMultidataRequest().then(res => {
        this.banners = res.data.banner.list; // 转化成数组
        this.recommends = res.data.recommend.list; // 转化成数组
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;  // 这里的page不是this.goods[type].page中的page
      getHomeGoodsRequest(type, page).then(res => {
        //网络请求方法
        this.goods[type].list.push(...res.data.list);
        // 为下次获取数据做准备，修改商品数组的page
        this.goods[type].page += 1;
        // 完成下拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  /* 视口高度，把高度限定在可见范围内 */
  height: 100vh;
  /* padding-bottom: 44px; */
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
  /* 固定导航位置 */

}
.tabcontrol {
  position: relative;
  z-index: 9;
}


.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* height: calc(100% - 93px); */
  overflow: hidden;
}
</style>
