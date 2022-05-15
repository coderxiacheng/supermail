<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>

  <!-- <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" alt="" />
      <div>首页</div>

    </div> -->
  <!-- <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/category.svg" alt="" />
      分类
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/cart.svg" alt="" />
      购物车
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/profile.svg" alt="" />
      我的
    </div> -->
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    },
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    isActive() {
      // $route哪个处于活跃就是哪一个对象
      // 用route传过来的path与props传过来的path进行对比
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { 'color': this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 1px;
}
</style>
