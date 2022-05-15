import { debounce } from "./utils"

export const itemListenerMinxin = {
  data(){
    return{
      itemImgListener: null
    }
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh, 300)

    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    console.log('我是混入中的内容');
  }
}
