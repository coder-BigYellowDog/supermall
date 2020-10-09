<template>
  <div class="param-info" v-if="Object.keys(paramsInfo).length !== 0">
    <p>参数信息</p>
    <table v-for="(table, index) in paramsInfo.sizes" :key="index" class="info-size">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <br>
    <table class="info-param">
      <tr v-for="(info, index) in paramsInfo.infos" :key="index">
        <td class="info-param-key"> {{info.key}} </td>
        <td class="param-value"> {{info.value}} </td>
      </tr>
    </table>
    <br>
    <div class="info-img" v-if="paramsInfo.image.length !== 0">
      <img :src="paramsInfo.image" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    paramsInfo:{
      type: Object,
      default() {
        return {};
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

<style scoped>
  .param-info {
    font-size: 14px;
    padding: 20px 15px;
    border-bottom: 5px solid #f2f5f8;
  }

  .param-info p {
    font-size: 15px;
    margin-bottom: 10px;
  }

  .param-info table {
    width: 100%;
    /* 为表格设置合并边框模型 */
    border-collapse: collapse;
  }

  .param-info table tr {
    height: 42px;
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }

  .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }

  .info-param {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .param-value {
    color: #eb4868;
  }

  .info-img img {
    width: 100%;
  }
</style>
