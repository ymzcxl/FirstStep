<template>
  <div class="login-module-box">
    <div class="top-module">
      <div class="left-module">
        <img class="icon" src="@/assets/img/own/left_arrow_icon.png" alt="">
      </div>
      <div class="right-module">
        <img class="icon" src="@/assets/img/own/qr_code_icon.png" alt="">
      </div>
    </div>
    <div class="thome-icon">
      <img class="thome-base-icon" src="@/assets/img/own/main_icon.png" alt="">
    </div>
    <div class="couter-test">鸽子账号</div>
    <div class="couter-tips">登录鸽子账号以使用云空间、鸽子应有市场及跟多服务</div>
    <div class="account-module">
      <van-cell-group>
         <van-field v-model="couter" placeholder="手机号/邮箱地址/鸽子号" />
         <van-field v-model="password" type="password" placeholder="密码" />
         <van-field v-model="phone" placeholder="电话" />
         <van-field v-model="remark" placeholder="备注" />
      </van-cell-group>
    </div>
    <div class="tip-test">
      <span>短信验证码登陆</span>
      <span>忘记密码</span>
    </div>
    <div class="btn-primer" @click="login">登录</div>
    <div class="btn-cancel" @click="handleJump">注册账号</div>
  </div>

</template>

<script>
import { axiosDatas } from '@/mixins/axios'
export default {
  mixins: [axiosDatas],
  data () {
    return {
      couter: '',
      password: '',
      phone: '',
      remark: ''
    }
  },
  methods: {
    handleJump () {
      this.$router.push('/home')
    },
    async login () {
      let obj = {
        password: this.password,
        username: this.couter,
        tel: this.phone,
        remark: this.remark
      }
      let res = await this.postData('users/', obj)
      if (res.code === 10000) {
        // alert('注册成功')
        this.$toast('注册成功')
      } else {
        this.$toast('注册失败')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.top-module{
  display: flex;
  justify-content: space-between;
  padding: 15px 25px 0 20px;
  .icon{
    width: 25px;
    height: 25px;
  }
}
.thome-icon{
  margin-top: 53px;
  .thome-base-icon{
    width: 50px;
    height: 50px;
  }
}
.couter-test{
  font-size: 25px;
  text-align: center;
  color: #777777;
  height: 50px;
  line-height: 50px;
}
.couter-tips{
  font-size: 13px;
  text-align: center;
  color: #777777;
}
.account-module{
  padding:0 20px;
  margin-top: 50px;
}
.tip-test{
  display: flex;
  margin-top: 20px;
  padding: 0 37px;
  justify-content: space-between;
  font-size: 13px;
  color: rgb(93, 112, 238);
}
.btn-primer{
  margin: 56px 38px 17px 38px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background: #4c63f7;
  border: 1px solid #777777;
  border-radius: 20px;
  font-size: 18px;
  color: #ffffff;
  text-shadow: 0px 3px 6px 0px #ffffff;
}
.btn-cancel{
  margin: 0 38px 17px 38px;
  height: 40px;
  line-height: 40px;
  background: #d6d7df;
  border: 1px solid #777777;
  border-radius: 20px;
  font-size: 18px;
  text-align: center;
  color: #2915f7;
  text-shadow: 0px 3px 6px 0px #ffffff;
}
.van-cell::after{
  border-bottom: 1px solid #777;
}
.van-hairline--top-bottom::after{
  margin: 0 30px;
  border-bottom: 1px solid #777;
}
</style>
0
