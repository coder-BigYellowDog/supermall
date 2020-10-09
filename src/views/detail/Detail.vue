<template>
  <div class="detail">
    <detail-nav-tab class="detail-nav-tab" @titleClick="titleClick" ref="nav"></detail-nav-tab>
    <scroll class="content" 
    ref="scroll" 
    :probe-type="3" 
    @scroll="scroll"
    >
      <detail-swiper :swiperTopImage="topImages"></detail-swiper>
      <detail-base-info :baseInfo="goods"></detail-base-info>
      <detail-shop-info :shopInfo="shop"></detail-shop-info>
      <detail-goods-info :imagesInfo="detailInfo" @goodsImgLoad="goodsImgLoad"></detail-goods-info>
      <detail-params-info :params-info="goodsParams" ref="params"></detail-params-info>
      <detail-comment-info :commentInfo="comment" ref="comment"></detail-comment-info>
      <goods-list :goodsList="recommend" ref="recommend"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar class="detail-bottom-bar" @addToCar="addToCar"></detail-bottom-bar>
    <toast :message="message" :show="show"></toast>
  </div>
</template>
<script>
import DetailNavTab from "./childComps/DetailNavTab";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "components/content/Goods/GoodsList";
import DetailBottomBar from "./childComps/DetailBottomBar";


import Scroll from "components/common/Scroll/Scroll.vue";
import Toast from "components/common/toast/Toast.vue";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParams
} from "network/detail";
import { debounce } from "common/util.js";
import { itemListenerMixin, backTopListener } from "common/mixin.js";

export default {
  name: "Detail",

  // 通过混入方法 调用 refresh 代码
  mixins: [itemListenerMixin, backTopListener],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParams: {},
      comment: {},
      recommend: [],
      itemImgListener: null,
      themeTopY: [],
      getThemeTopY: null,
      currentIndex: null,
      message: '',
      show: false
    }
  },
  components: {
    DetailNavTab,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    Toast
  },

  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;
    // 2.根据iid请求数据详情
    getDetail(this.iid).then(res => {
      // 2.1获取顶部的图片轮播数据
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 2.2 获取商品数据
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 2.3 创建店铺信息对象
      this.shop = new Shop(data.shopInfo);

      // 2.4 获取商品详细信息
      this.detailInfo = data.detailInfo;

      // 2.5 获取参数数据
      this.goodsParams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 2.6 获取评论信息
      // 判断有无评论信息
      if (data.rate.cRate !== 0) {
        this.comment = data.rate.list[0];
      }

      this.getThemeTopY = debounce(() => {
        this.themeTopY = [];
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.params.$el.offsetTop);
        this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopY.push(Number.MAX_VALUE)
        
        console.log(this.themeTopY);
      },200)
    });

    // 3. 获取推荐数据
    getRecommend().then(res => {
      console.log(res);
      this.recommend = res.data.list;
    });
  },

  // mounted 中要执行的 refresh 已经写在 mixin.js ,通过 mixins 调用
  mounted() {
    // // 1.防抖动函数，图片加载完成的事件监听
    // const refresh = debounce(this.$refs.scroll.refresh, 50)
    // // 3.监听item中图片加载完成
    // this.itemImgListener = () => {  // 这里会被调用30次
    //   refresh()
    // }
    // this.$bus.$on('itemImgLoad', this.itemImgListener)
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  methods: {
    goodsImgLoad() {  //  等图片加载完 再刷新
      console.log('-----')
      this.$refs.scroll.refresh();
      // this.getThemeTopY();
     this.getThemeTopY();
    },

    titleClick(index) {  // 标题点击事件
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 500);
    },

    scroll(position){  //  标题与滚动条联动
      let positionY = -position.y;
      length = this.themeTopY.length
      for(var i=0; i < length - 1; i ++){
        i = parseInt(i);
        if( (this.currentIndex !== i) && (i < length - 1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])){
          this.currentIndex = i
          console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      // 1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 600
    },

    addToCar(){
      // console.log("加入到购物车")
      // 1、获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2、将商品添加到购物车
      // 不要直接使用 this.$store.cartList.push(product),要通过 mutations 中的方法添加到 state
      this.$store.dispatch('add', product).then( res => {
        
        this.$toast.show(res, 1500)
      })
    }
  },

  
};
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh;
  
}

.detail-nav-tab {
  position: relative;
  background-color: #ffffff;
  z-index: 10;
}

.content {
  background-color: #ffffff;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  z-index: 9;
}

</style>
