<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!--  -->
    <tab-control :titles="['流行', '精品', '新款']" @tabClick="tabClick" ref="tabControl1" class="tab-control"
      v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
      @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends" />
      <feature-view></feature-view>
      <tab-control :titles="['流行', '精品', '新款']" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods" />

    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>


// import中是default 不需要{}
import { getHomeMultidata, getHomeGoods } from "../../network/home.js";
import { debounce } from 'common/utils'
import { itemListenerMinxin } from "../../common/mixin.js";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from './childComps/FeatureView'

import TabControl from '../../components/content/tabControl/TabControl'
import NavBar from "../../components/common/navbar/NavBar.vue";
import GoodsList from '../../components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'
import BackTop from '../../components/content/backTop/BackTop'

export default {
  name: "Home",
  components: {

    HomeSwiper,
    RecommendView,
    FeatureView,

    TabControl,
    NavBar,
    GoodsList,
    Scroll,
    BackTop,
  },
  mixins :[itemListenerMinxin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentType: 'pop',

      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,

    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    //  1.请求多个数据
    this.getHomeMultidata()
    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },

  mounted() {
    // // 1.图片加载完成的事件监听
    // const refresh = debounce(this.$refs.scroll.refresh, 300)

    // // 对监听的事件进行保存
    // this.itemImgListener =  () => {
    //   refresh()
    // }
    // this.$bus.$on('itemImgLoad', this.itemImgListener)
  },
  destroyed() {
    console.log('hmoe destroyed');
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 1.保存Y值
    this.saveY = this.$refs.scroll.getScrollY()

    // 2.取消全局事件的监听
    this.$bus.$off('itemImgLoad',this.itemImgListener)
  },
  methods: {
    /**
     * 事件监听的相关方法
     */

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
      if (this.$refs.tabControl1 !== undefined) {
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      }

    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      // console.log(Number(position.y));
      // console.log(position.y);
      // 1.判断BackTop是否显示
      this.isShowBackTop = (Math.abs(position.y) > 1000)

      // 2.决定tabControl是否吸顶(position：fixed)
      this.isTabFixed = (Math.abs(position.y) > this.tabOffsetTop)

    },
    loadMore() {
      this.getHomeGoods(this.currentType)

      // this.$refs.scroll.scroll.refresh()
      console.log("lodmore");
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    },

  }

};
</script>
<style scoped>
#home {
  /* position: relative; */
  /* padding-top: 44px; */
  height: 100vh;

}

.home-nav {
  background-color: #ffaeb9;
  color: white;

  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}



.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* margin-top: 44px; */

}

.tab-control {
  position: relative;
  z-index: 9;
}
</style>
