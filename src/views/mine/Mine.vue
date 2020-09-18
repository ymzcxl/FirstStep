<template>
  <div class="bg">你好世界
    <div class="ceshi">
      中国牛逼
    </div>
  </div>
</template>

<script>
export default {
  created () {
    console.log(
      process.env.VUE_APP_BASE_URL
    )
  }
}
</script>

<style scoped lang="scss">
  // .bg{
  //  color: $input-color;
  //   // .ceshi{
  //   //   color:green
  //   // }
  // }
</style>
