<template>
    <div class="back-top">
        <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
export default {
  name: 'BackTop',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style >
    .back-top {
        position: fixed;
        right: 5px;
        bottom: 50px;
        z-index: 10;
    }

    .back-top img {
        width: 43px;
        height: 43px;
    }
</style>
