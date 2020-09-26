<template>
  <div id="app">
    <router-view/>
    <main-tab-bar v-if="allowTabShow"/>
  </div>
</template>

<script>
import MainTabBar from '@/components/base/mainTabbar/MainTabBar';
import { mapState } from 'vuex';

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
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  height: 90vh;
  padding-bottom: 65px;
}
</style>
