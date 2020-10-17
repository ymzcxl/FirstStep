<template>
  <div class="cart-container">
    <!-- 左边(组件的)是属性名，右边（页面的）是变量名 -->
    <div class="goods-cards" v-for="item in 8" :key="item">
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
.cart-container {
  padding: 10px;
  padding-bottom: 65px;
  display: flex;
  flex-wrap: wrap;
}
::v-deep .goods-cards {
  width: 48.5%;
  border-radius: 8px;
  margin-right: 10px;
  box-shadow: 1px 1px 7px #ccc;
  margin-bottom: 20px;
}
::v-deep .goods-cards:nth-child(2n) {
  margin-right: 0;
}
</style>
