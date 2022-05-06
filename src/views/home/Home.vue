<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <RecommendView :recommends="recommends"/>
  </div>
</template>
<script>
import SwiperItemVue from "../../../../HYMall/src/components/common/swiper/SwiperItem.vue";
import NavBar from "../../components/common/navbar/NavBar.vue";
// import中是default 不需要{}
import { getHomeMultidata } from "../../network/home.js";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
},
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    //  1.请求多个数据
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>
<style scoped>
.home-nav {
  background-color: #ffaeb9;
  color: white;
}
</style>
