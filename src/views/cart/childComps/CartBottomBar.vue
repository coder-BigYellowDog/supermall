<template>
  <div class="button-bar">
    <div class="check-content">
      <check-button 
        class="button-item" 
        :is-checked="isSelectAll"
        @click.native="checkedClick"
        ></check-button>
      <span>全选</span>
    </div>

    <div class="total-price">合计:￥{{ totalPrice }}</div>

    <div class="calculate" @click="calcClick">去计算({{ calculate }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartBottomBar",
  data() {
    return {};
  },
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    calculate() {
      return this.$store.state.cartList.filter(item => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if(this.$store.state.cartList.length === 0) 
        return false

      // 1、使用filter
      // return !this.$store.state.cartList.filter( item => {
      //   return !item.checked
      // }).length

      // 2、使用find(比filter性能高)
      return !this.$store.state.cartList.find(item => {
        return !item.checked
      })
    }
  },
  methods: {
    checkedClick() {
      // console.log("-------")
      if(this.isSelectAll){  // 全部选中
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else{  // 部分或全不选中
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick() {
      if(!this.isSelectAll){
        this.$toast.show('请选择商品')
      }
    }
  }
};
</script>

<style scoped>
.button-bar {
  position: relative;
  background-color: #eeeeee;
  height: 40px;
  line-height: 40px; /* 会被寄存checkbutton  */
  display: flex;
}

.check-content {
  width: 70px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}

.check-content span {
  font-size: 14px;
}

.button-item {
  margin-left: 10px;
  width: 20px;
  height: 20px;
  line-height: 0;
  margin-right: 5px;
}

.total-price {
  margin-left: 15px;
  font-size: 14px;
  flex: 1;
}

.calculate {
  width: 90px;
  color: #ffffff;
  background-color: pink;
  text-align: center;
  font-size: 14px;
}
</style>
