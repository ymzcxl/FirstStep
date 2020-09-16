<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar v-if="allowTabShow"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from '@/components/base/mainTabbar/MainTabBar'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  computed: {
    ...mapState({
      allowTabShow: state => state.allowTabShow
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
