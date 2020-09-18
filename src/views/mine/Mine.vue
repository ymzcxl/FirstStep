<template>
  <div class="bg">你好世界
    <div class="ceshi">
      中国牛逼
    </div>
  </div>
</template>

<script>
import { axiosDatas } from '@/mixins/axios'
export default {
  mixins: [axiosDatas],
  created () {
    let data = this.getData('/users/list/', {
      pageSize: 3
    })
    console.log(data)
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
