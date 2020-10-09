<template>
  <div>
    <swiper class="topswiper">
      <swiper-item class="swiper-item" v-for="(item, index) in swiperTopImage" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/Swiper/'
export default {
  name: "DetailSwiper",
  props: {
    swiperTopImage: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
  .topswiper {
    height: 300px;
    overflow: hidden;
  }
</style>
