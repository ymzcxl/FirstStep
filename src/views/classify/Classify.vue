<template>
  <div class="classify-module">
    <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
      <template #content>
        <fs-content v-if="active==0"></fs-content>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import showModule from '@/components/busniss/ShowModule'
export default {
  components: {
    'fs-content': showModule
  },
  data () {
    return {
      active: 0,
      items: [
        { text: '数码' },
        { text: '手机' },
        { text: '家电' },
        { text: '家具' },
        { text: '服装' },
        { text: '鞋子' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.classify-module{
  height: 90vh;
}
::v-deep .van-tree-select{
  height: 100%!important;
  .van-tree-select__nav{
    flex-grow: 0.7;
    width: 150px;
  }
}
</style>
