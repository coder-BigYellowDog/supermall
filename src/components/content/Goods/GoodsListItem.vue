<template>
    <div class="goods-item">
        <img v-lazy="showImage" alt="" @load="imageLoad" @click="itemClick">
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
      goodsItem: {
          type: Object,
          default() {
              return {}
          }
      }
  },
  computed: {
      showImage() {
          return this.goodsItem.image || this.goodsItem.show.img
      }
  },
  methods: {
      // 向外发射图片监听事件 (事件总线)
      imageLoad() {
          this.$bus.$emit('itemImgLoad')
          // 判断是 home 还是 detail 的图片加载
        //   if(this.$route.path.indexOf('/home')){
        //       this.$bus.$emit('homeItemImageLoad')
        //   }else if(this.$route.path.indexOf('./detail')){
        //       this.$bus.$emit('detailItemImageLoad')
        //   }
      },
      itemClick() {  // 路由跳转
          this.$router.push('/detail/' + this.goodsItem.iid)
      }
  },

}
</script>

<style spoced>
    .goods-item {
        padding-bottom: 40px;
        position: relative;
        width: 48%;
        
    }

    .goods-item img {
        width: 100%;
        /* height: 285px; */
        border-radius: 8px;
        /* height: 295; */
    }

    .goods-info {
        font-size: 14px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .goods-info p {
        overflow: hidden;
        /* 当文本溢出包含元素时 用...代替多出的部分 */
        text-overflow: ellipsis;
        /* 规定段落中的文本不进行换行 */
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }

    .collect {
        position: relative;
    }

    .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        width: 14px;
        height: 14px;
        /* bg-color || bg-image || bg-position [ / bg-size]? || bg-repeat || bg-attachment || bg-origin || bg-clip */
        background: url("~assets/img/common/collect.svg") 0 0 / 14px 14px;  /* 0 0 是position的值 */
    }
</style>
