<template>
  <div class="cart-container">
    <!-- 左边(组件的)是属性名，右边（页面的）是变量名 -->
    <div class="ceshi" v-for="item in 4" :key="item">
      <fs-goods-card @handleClick="handleClick" :title="title" />
    </div>
  </div>
</template>

<script>
import GoodsCard from "@/components/busniss/GoodsCard";
export default {
  components: {
    "fs-goods-card": GoodsCard,
  },
  data() {
    return {
      title: "2020秋冬季新款韩版加绒卫衣女装原宿风休闲宽松印花长袖上衣",
    };
  },
  methods: {
    handleClick(val) {
      console.log(val);
      // this.$router.push("/home");
    },
  },
};
</script>

<style scoped lang="scss">
.ceshi {
  display: flex;
  flex-wrap: nowrap;
}
</style>
