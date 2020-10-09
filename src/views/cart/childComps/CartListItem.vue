<template>
  <div id="cart-list-item">
    <div class="item-selector">
      <check-button :is-checked="itemInfo.checked" @click.native="Checked"></check-button>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片"/>
    </div>
    <div class="item-info">
      <div class="item-title"> {{itemInfo.title}} </div>
      <div class="item-desc"> {{itemInfo.desc}} </div>
      <div class="info-bottom">
        <div class="item-price left"> ￥{{itemInfo.price}} </div>
        <div class="item-count right"> x{{itemInfo.count}} </div>
      </div>
    </div>
  </div>
</template>

<script>

import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: 'CartListItem',
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  components: {
    CheckButton
  },
  methods: {
    Checked() {
      this.itemInfo.checked = !this.itemInfo.checked;
    }
  },
}
</script>

<style scoped>
  #cart-list-item {
    width: 100%;
    display: flex;    /* 横向布局 */
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 25px;
    display: flex;
    justify-content: center;    /* (X轴) 在弹性盒对象的 <div> 元素中的各项周围留有空白。项目位于容器中心 */
    align-items: center;    /* (Y轴) 弹性盒子元素在该行的侧轴（纵轴）上居中放置 */
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;    /* 规定段落中的文本不进行换行 */
    text-overflow: ellipsis;    /* 溢出的部分显示省略符号 */
  }

  .item-img {
    padding: 5px;
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {  /* .item-info 下的 .item-desc */
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
</style>
