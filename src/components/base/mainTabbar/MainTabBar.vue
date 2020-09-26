<template>
  <!-- <div id="app">
      <router-view></router-view> -->
  <tab-bar>
    <tab-bar-item path="/home" active-color="#008c8c">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-select" src="@/assets/img/tabbar/home-select.svg" alt="">
      <div slot="item-text">
        首页
      </div>
    </tab-bar-item>
    <tab-bar-item path="/classify" active-color="#008c8c" >
      <img slot="item-icon" src="@/assets/img/tabbar/kind.svg" alt="">
      <img slot="item-icon-select" src="@/assets/img/tabbar/kind-select.svg" alt="">
      <div slot="item-text">
        分类
      </div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="#008c8c">
      <img slot="item-icon" src="@/assets/img/tabbar/cart.svg" alt="">
      <img slot="item-icon-select" src="@/assets/img/tabbar/cart-select.svg" alt="">
      <div slot="item-text">
        购物车
      </div>
    </tab-bar-item>
    <tab-bar-item path="/mine" active-color="#008c8c">
      <img slot="item-icon" src="@/assets/img/tabbar/me.svg" alt="">
      <img slot="item-icon-select" src="@/assets/img/tabbar/me-select.svg" alt="">
      <div slot="item-text">
        我的
      </div>
    </tab-bar-item>
  </tab-bar>
  <!-- </div> -->
</template>

<script>
// import TabBar from './components/common/tabbar/TabBar'
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style>
</style>
