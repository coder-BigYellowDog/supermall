export default {
  add(context, payload){
    return new Promise((resolve, reject) => {// payload新添加的商品
      // 方法一
      let oldProduct = null
      for(let item of context.state.cartList){
        if(item.iid === payload.iid){
          oldProduct = item
        }
      }
      // 方法二
      // let oldProduct = state.cartList.find( item => item.iid === payload.iid)
  
      if(oldProduct){
        // 提交到 mutations 执行
        // oldProduct.count += 1
        context.commit('addCounter', oldProduct);  // 提交到 mutations 中执行

        resolve('商品数量+1')
      }else{
        // 为新商品添加 count 属性，则以后取出时也有 count 属性（即 oldpayload中有 count 属性）
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit('addToCart', payload);

        resolve('添加新商品')
      }})
  }
}