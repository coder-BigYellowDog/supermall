export default {
  // mutations 唯一的目的就是修改 state 的状态
    // mutations 中的每一个方法完成的事情尽可能单一
    addCounter(state, oldProduct){
      oldProduct.count++
    },
    addToCart(state, payload){
      payload.checked = true;
      state.cartList.push(payload);
      
    }
}