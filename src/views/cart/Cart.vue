<template>
  <div class="cart-container">
    <van-card
      v-for="item in 8"
      :key="item"
      num="2"
      price="2.00"
      desc="描述信息"
      tag="高级货"
      title="阿玛尼直售"
      thumb="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4053899535,255821126&fm=26&gp=0.jpg"
    >
      <template #tags>
        <van-tag plain type="danger">口红</van-tag>
        <van-tag plain type="danger">奥迪</van-tag>
      </template>
      <template #footer>
        <!-- <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button> -->
      </template>
    </van-card>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
::v-deep .van-card__content{
  text-align: left;
}
</style>
