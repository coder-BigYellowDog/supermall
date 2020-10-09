<template>
  <div class="check-button" :class="{ active : isChecked}">
    <img src="~assets/img/cart/tick.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  components: {}
}
</script>

<style scoped>
  img {
    position: relative;
    top: 3px;
    left: 1px;
    width: 15px;
    height: 12px;
  }

  .check-button {
    /* background-color: salmon; */
    border: 1.5px solid #aaa;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  .active {
    background-color: salmon;
    border-color: salmon;
  }
</style>
