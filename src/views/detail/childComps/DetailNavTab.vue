<template>
  <div>
    <nav-tab>
        <div slot="left" class="back" @click="backClick">
            <img src="~assets/img/common/back.png" alt="">
        </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in title" :key="index" 
             class="title-item"
             :class="{active: index === currentIndex}"
             @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-tab>
  </div>
</template>

<script>
import NavTab from "components/common/NavTab/NavTab";

export default {
  name: "DetailNavTab",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavTab
  },
  methods: {
      titleClick(index) {
          this.currentIndex = index
          this.$emit('titleClick', index)
      },
      backClick() {
          this.$router.go(-1);
      }
  },
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 14px;
}
.title-item {
  flex: 1;
}
.back img{
    width: 24px;
    height: 24px;
    margin-top: 10px;
}
.active {
    color: var(--color-high-text);
}
</style>
