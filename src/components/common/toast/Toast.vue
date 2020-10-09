<template>
  <div class="toast" v-show="isShow">
    <span> {{message}} </span>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  components: {},
  methods: {
    show(message, time = 2000){
        this.message = message;
        this.isShow = true;
        
        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        }, time)
    }
  },
}
</script>



<style scoped>
  .toast {
    /* 固定定位是将某个元素固定在浏览器的某个确定的位置，不随滚动条的移动而变化 */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 15px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, .75);
    z-index: 10;
  }
</style>
