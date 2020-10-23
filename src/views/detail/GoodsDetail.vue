<template>
  <div class="goods-detail-module">
    <div class="img-module">
      <img
        class="img-container"
        src="https://gd3.alicdn.com/imgextra/i2/2209413955572/O1CN01wFV3Rf1r21VauXAgU_!!2209413955572.jpg_400x400.jpg"
        alt=""
      />
    </div>
    <!-- 内容区域 -->
    <div class="introuce-module">
      <!-- 价目表 -->
      <div class="price-module">
        <div class="real-price-module">
          <span class="price-symbol">￥</span>
          <span class="monney-text">629</span>
        </div>
        <div class="discount-module">
          <span class="price-symbol">折后￥</span>
          <span class="monney-text no-margin">599</span>
        </div>
      </div>
      <!-- 类型模块 -->
      <div class="type-module">
        <span class="type-item" v-for="item in 3" :key="item">满630减30</span>
      </div>
      <div class="title-module">
        <div class="title-text">
          <span class="company-text">天猫</span>
          <span class="title"
            >tcl 5.5公斤小型伯伦洗衣机，全自动，适合宿舍租房迷你
            XQB55-xxxx</span
          >
          <span class="discount-test">优惠促销</span>
        </div>
      </div>
    </div>
    <!-- 快递介绍 -->
    <div class="express-module">
      <!-- 第一行 -->
      <div class="adress-module">
        <div class="express-text">
          <span class="express-go-text">发货</span>
          <span class="adress-text">电器太古仓</span>
          <span class="is-free-text">快递：免运费</span>
        </div>
        <div class="sale-num-text">月销1000+</div>
      </div>
      <!-- 第二行 -->
      <div class="adress-module">
        <div class="express-text">
          <span class="express-go-text">权益</span>
          <span class="adress-text">凭蚂蚁积分可以先用后付，收货满意再付</span>
        </div>
        <div class="open-legal-text">开通</div>
      </div>
      <!-- 第三行 -->
      <div class="adress-module">
        <div class="express-text">
          <span class="express-go-text">活动</span>
          <span class="color-red">领取红包现金</span>
          <span class="is-free-text">特价版专用，领取红包购物立减</span>
        </div>
        <div class="sale-num-text"></div>
      </div>
    </div>
    <!-- 快递介绍 -->
    <div class="express-module">
      <!-- 第一行 -->
      <div class="adress-module">
        <div class="express-text">
          <span class="express-go-text">发货</span>
          <span class="adress-text">电器太古仓</span>
          <span class="is-free-text">快递：免运费</span>
        </div>
        <div class="sale-num-text">月销1000+</div>
      </div>
      <!-- 第二行 -->
      <div class="adress-module">
        <div class="express-text">
          <span class="express-go-text">权益</span>
          <span class="adress-text">凭蚂蚁积分可以先用后付，收货满意再付</span>
        </div>
        <div class="open-legal-text">开通</div>
      </div>
      <!-- 第三行 -->
      <div class="adress-module">
        <div class="express-text">
          <span class="express-go-text">活动</span>
          <span class="color-red">领取红包现金</span>
          <span class="is-free-text">特价版专用，领取红包购物立减</span>
        </div>
        <div class="sale-num-text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.goods-detail-module {
  padding: 0 10px;
  background: rgba(249, 249, 249);
  min-height: 100vh;
}

.introuce-module {
  background: #fff;
  padding-bottom: 30px;
  border-radius: 0 8px;
}
.img-container {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.price-module {
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #f40;
  padding: 8px 10px;
}
.monney-text {
  margin-right: 10px;
  font-size: 18px;
}
.discount-module {
  display: flex;
  align-items: center;
  padding: 2px 10px;
  color: #fff;
  border-radius: 15px;
  background: #f40;
}
.no-margin {
  margin-right: 0;
}
.type-module {
  padding: 0 10px;
}
.type-item {
  margin-right: 5px;
  padding: 2px 6px;
  border-radius: 8px;
  color: #fff;
  background: pink;
}
.title-module {
  padding: 0 10px;
  margin-top: 10px;
}
.title-text {
  // display: flex;
  font-size: 14px;
  font-weight: bold;
  .company-text {
    display: inline-block;
    padding: 1px 6px 2px 6px;
    font-size: 12px;
    vertical-align: text-bottom;
    font-weight: normal;
    margin-right: 5px;
    color: #fff;
    border-radius: 15px;
    background: #f40;
  }
  .title {
    line-height: 23px;
  }
  .discount-test {
    display: inline-block;
    padding: 1px 2px;
    font-size: 12px;
    border-radius: 4px;
    font-weight: normal;
    background: orange;
    color: #fff;
    margin-left: 5px;
  }
}
.express-module {
  margin-top: 20px;
  border-radius: 8px;
  background: #fff;
}
.adress-module {
  border-bottom: 0.1px solid #eee;
  padding: 0 10px;
  font-size: 13px;
  height: 44px;
  line-height: 44px;
  display: flex;
  justify-content: space-between;
  .express-go-text {
    color: #999;
    margin-right: 20px;
  }
  .adress-text {
    margin-right: 20px;
  }
  .sale-num-text {
    color: #999;
  }
  .open-legal-text {
    color: orange;
    text-align: right;
  }
  .color-red {
    margin-top: -10px;
    background: red;
    padding: 0 4px 0 4px;
    margin-right: 10px;
    border-radius: 8px;
    color: #fff;
    font-size: 6px;
  }
}
</style>
