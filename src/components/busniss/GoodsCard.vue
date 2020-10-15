<template>
  <!-- div：块盒 span,img是行盒子 -->
  <div class="goods-module" @click="handleClick">
    <div class="top-module">
      <img
        class="img-module"
        src="https://gd3.alicdn.com/imgextra/i2/2209413955572/O1CN01wFV3Rf1r21VauXAgU_!!2209413955572.jpg_400x400.jpg"
        alt=""
      />
    </div>
    <div class="bottom-module">
      <div class="price-module">
        <span>￥</span>
        <span>99.9</span>
      </div>
      <div class="title-module">{{ title }}</div>
      <div class="business-module">
        <span>366天信誉</span>
        <span>999人付款</span>
      </div>
      <div class="other-modle">
        <img
          class="business-img"
          src="https://gd3.alicdn.com/imgextra/i2/2209413955572/O1CN01wFV3Rf1r21VauXAgU_!!2209413955572.jpg_400x400.jpg"
          alt=""
        />
        <span>杨小陈店铺</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "暂无介绍",
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      // vue: 向父元素发射一个方法
      this.$emit("handleClick", {
        id: "1111",
        title: "孔老板",
        size: 4,
      });
    },
  },
};
// 相邻的盒子 父子 两种：设置padding  overflow:hidden
</script>

<style scoped lang="scss">
.goods-module {
  margin: 20px auto;
  width: 317px;
  height: 430px;
  padding: 20px 20px 0 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.top-module {
  background: #ccc;
  height: 275px;
  .img-module {
    width: 100%;
    height: 275px;
  }
}
.bottom-module {
  font-size: 16px;
  // display: flex;
  // flex-direction: column; //竖向排列
}
.price-module {
  margin-top: 20px;
  color: #f40;
}
.title-module {
  margin-top: 10px;
  font-size: 12px;
  color: #666;
}
.business-module {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 10px;
}
.other-modle {
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
  justify-content: space-between;
  .business-img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
}
</style>
