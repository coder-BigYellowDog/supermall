<template>
    <div class="nav-tab">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'NavTab' ,
  data() {
    return {

    }
  },
  components: {

  }
}
</script>
    
<style >
    .nav-tab {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 4px 4px rgba(100, 100, 100, .1) ;
        
    }

    .left , .right {
        width: 60px;
        
    }

    .center {
        flex: 1;
    }
</style>
