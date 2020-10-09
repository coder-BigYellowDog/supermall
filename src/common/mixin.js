import { debounce } from './util'
import BackTop from 'components/content/BackTop/BackTop'


// 混入( 提取不同对象的共同代码 )
export const itemListenerMixin = {
  mounted () {
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.itemImgListener = () => {  
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    // console.log('调用混入中的代码')
  }
}

export const backTopListener = {
  components: {
    BackTop
  },
  data () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop() {  // 点击返回顶部
      this.$refs.scroll.scroll.scrollTo(0, 0, 800)
    },
  }
}