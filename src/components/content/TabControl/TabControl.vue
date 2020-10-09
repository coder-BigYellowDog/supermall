<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" 
    class="tab-control-item" :class="{ active : index === currentIndex}" @click="itemclick(index)">
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
        currentIndex : 0 
    }
  },
  methods: {
      itemclick(index) {
          this.currentIndex = index
          this.$emit('tabclick', index)
      }
  },
  components: {}
};
</script>

<style >
    .tab-control {
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 44px;
        line-height: 44px;
        background-color: #ffffff;
        z-index: 9;
    }

    .tab-control-item {
        flex: 1;
        border-bottom: 5px var();
        
    }

    .active span {
        padding-bottom: 5px;
        border-bottom: 3px solid var(--color-tint);
    }

    .active {
        color: var(--color-tint); 
        
    }
</style>
