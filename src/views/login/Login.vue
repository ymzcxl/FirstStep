<template>
  <div class="login-module-box">
    <div class="top-module background-color">
      <span>返回</span>
    </div>
    <div class="register-text-module">会员注册</div>
    <div class="account-module">
      <van-cell-group>
         <van-field v-model="value2" label="文本" placeholder="请输入用户名" />
         <van-field v-model="value1" label="文本" placeholder="密码" />
      </van-cell-group>
    </div>
    <div class="password-module">
    </div>
    <div class="tip-text">密码要求6-16位，包含数字，字母，数字字母组合皆可</div>
    <div class="btn-module">
      注册
    </div>
    <div class="playform-text-module">登录即表示同意平台《隐私政策》与《用户协议》</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      value2: ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>
