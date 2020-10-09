<template>
    <div class="home-recommend">
        <div v-for="item in recommends" :key="item.image" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  props: {
      recommends: {
          type: Array,
          default() {
              return []
          }
      }
  },
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style >
    .home-recommend {
        display: flex;
        padding: 10px;
        text-align: center;
        font-size: 13px;
        width: 100%;
        border-bottom: 8px solid #eeeeee ;
    }
    .recommend-item{
        flex: 1;
        
    }
    .recommend-item img {
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
    }
</style>
