<template>
  <div class="classify-module">
    <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
      <template #content>
        <van-image
          v-if="active === 0"
          src="https://img.yzcdn.cn/vant/apple-1.jpg"
        />
        <van-image
          v-if="active === 1"
          src="https://img.yzcdn.cn/vant/apple-2.jpg"
        />
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      items: [{ text: '分组 1' }, { text: '分组 2' }]
    }
  }
}
</script>

<style scoped lang="scss">
.classify-module{
  height: 100vh;
}
::v-deep .van-tree-select{
  height: 100%!important;
}
</style>
