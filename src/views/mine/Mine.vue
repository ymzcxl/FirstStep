<template>
  <div class="my-home-containter">
    <!-- 头部 -->
    <div class="top-module">
      <div class="head-module">
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1738657804,3125367699&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="btn-module">
        <span class="login-text">登录/注册</span>
        <div class="log-text">
          <img class="log-icon" src="@/assets/img/mine/mine_log.png" alt="" />
          <span class="font-color">签到领积分</span>
        </div>
      </div>
      <div class="btns-module">
        <img class="icon" src="@/assets/img/mine/mine_set_up.png" alt="" />
        <img class="icon" src="@/assets/img/mine/mine_common.png" alt="" />
      </div>
    </div>
    <!-- 中部 -->
    <div class="content-module">
      <div class="item">
        <span>11</span>
        <span class="text">积分</span>
      </div>
      <div class="item">
        <span>11</span>
        <span class="text">优惠券</span>
      </div>
      <div class="item">
        <span>11</span>
        <span class="text">代金券</span>
      </div>
      <div class="item">
        <span>11</span>
        <span class="text">鸟币</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="order-module">
      <div class="title-module">
        <div class="order-text">我的订单</div>
        <div>
          <span>全部订单</span>
          <img
            class="arrow-icon"
            src="@/assets/img/mine/mine_arrow.png"
            alt=""
          />
        </div>
      </div>
      <div class="btn-func-module">
        <div class="items">
          <img class="to-icon" src="@/assets/img/mine/to_pay.png" alt="" />
          <span class="func-text">待付款</span>
        </div>
        <div class="items">
          <img class="to-icon" src="@/assets/img/mine/to_get.png" alt="" />
          <span class="func-text">待收货</span>
        </div>
        <div class="items">
          <img class="to-icon" src="@/assets/img/mine/to_use.png" alt="" />
          <span class="func-text">待使用</span>
        </div>
        <div class="items">
          <img class="to-icon" src="@/assets/img/mine/to_common.png" alt="" />
          <span class="func-text">待评价</span>
        </div>
        <div class="items">
          <img class="to-icon" src="@/assets/img/mine/to_comsumer.png" alt="" />
          <span class="func-text">售后</span>
        </div>
      </div>
      <div class="img-module">
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3360077528,648283578&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { axiosDatas } from "@/mixins/axios";
export default {
  mixins: [axiosDatas],
  created() {
    const data = this.getData("/users/list/", {
      pageSize: 3,
    });
  },
};
</script>

<style scoped lang="scss">
.my-home-containter {
  position: relative;
  text-align: center;
  min-height: 100vh;
  background: #f7f7f7;
}
.top-module {
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 168px;
  position: relative;
  background: rgb(182, 182, 253);
}
.head-module {
  overflow: hidden;
  padding-right: 15px;
  img {
    width: 47px;
    height: 47px;
    border-radius: 50%;
  }
}
.btn-module {
  display: flex;
  font-size: 14px;
  color: #fff;
  flex-direction: column;
  .log-text {
    margin-top: 5px;
    font-size: 8px;
    border-radius: 8px;
    padding: 0 5px 0 0;
    height: 14px;
    opacity: 0.44;
    background: #8b8a8a;
  }
  .log-icon {
    padding: 0 4px;
    padding-top: 2px;
    width: 8px;
    height: 8px;
  }
}
.btns-module {
  position: absolute;
  right: 15px;
  top: 33px;
}
.icon {
  width: 24px;
  height: 24px;
  margin-left: 14px;
}
.content-module {
  position: absolute;
  display: flex;
  top: 133px;
  left: 20px;
  right: 20px;
  margin: auto;
  box-shadow: 1px 1px 3px #ccc;
  // width: 381px;
  height: 88px;
  background: #ffffff;
  border-radius: 20px;
  .item {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 12px;
    .text {
      margin-top: 9px;
    }
  }
}
.order-module {
  // width: 379px;
  margin: 60px 20px 20px 20px;
  height: 260px;
  border-radius: 20px;
  background: #ffffff;
  padding-top: 20px;
  box-shadow: 1px 1px 3px #ccc;
}
.title-module {
  display: flex;
  margin-bottom: 35px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 12px;
}
.order-text {
  font-size: 14px;
  font-weight: bold;
}
.arrow-icon {
  margin-top: 2px;
  vertical-align: top;
  margin-left: 4px;
  width: 12px;
  height: 12px;
}
.btn-func-module {
  display: flex;
  .items {
    display: flex;
    font-size: 12px;
    align-items: center;
    flex: 1;
    flex-direction: column;
  }
  .func-text {
    margin-top: 8px;
  }
}
.to-icon {
  width: 37px;
  height: 37px;
}
.img-module {
  // width: 356px;
  padding: 0 20px;
  height: 113px;
  border-radius: 8px;
  overflow: hidden;
  margin: auto;
  margin-top: 20px;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
