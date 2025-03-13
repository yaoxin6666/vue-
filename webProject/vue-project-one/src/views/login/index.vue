<template>
<div class="login">
  <!-- 头部组件 -->
  <van-nav-bar
title="会员登录"
left-arrow
@click-left="$router.go(-1)"
>
</van-nav-bar>
<!--主体 -->
<div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input v-model="mobile" class="inp" maxlength="11" placeholder="请输入手机号码" type="text">
        </div>
        <div class="form-item">
          <input v-model="picCode" class="inp" maxlength="5" placeholder="请输入图形验证码" type="text">
          <img :src="picUrl" @click="getPicCode" alt="">
        </div>
        <div class="form-item">
          <input v-model="msgCode" class="inp" placeholder="请输入短信验证码" type="text">
          <button @click="geiCode" >{{ second===totalSecond ? '获取验证码':second + '秒后重新获取验证码' }}</button>
        </div>
      </div>

      <div class="login-btn" @click="getLogin">登录</div>
    </div>
</div>
</template>

<script>
import { getPicCode, getCode, codeLogin } from '@/api/login'
export default {
  name: 'loginIndex',
  data () {
    return {
      picCode: '', // 用户输入的图形验证码
      picKey: '', // 请求回来的图形验证码唯一标识
      picUrl: '', // 请求回来的图形验证码地址
      totalSecond: 60, // 总秒数
      second: 60, // 计时器秒数
      timer: null, // 定时器id
      mobile: '', // 手机号
      Code: '',
      msgCode: ''// 短信验证码
    }
  },
  async created () {
    this.getPicCode()
  },
  methods: {
    // 获取图形验证码
    async getPicCode () {
      const { data: { base64, key } } = await getPicCode()
      this.picKey = key
      this.picUrl = base64
      // this.$toast.success('获取图形验证码成功')
      // Toast.success('姚鑫666')
    },
    // 判断手机号和图形验证码
    validfn () {
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$toast('请输入正确的手机号')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('请输入正确的图形验证码')
        return false
      }
      return true
    },
    // 获得短息验证码
    async  geiCode () {
      if (!this.validfn()) {
        return
      }
      if (this.second === this.totalSecond && this.timer === null) {
        const res = await getCode(this.picCode, this.picKey, this.mobile)
        this.$toast('验证码发送成功')
        console.log(res)
        this.timer = setInterval(() => {
          console.log('获取验证码中')

          this.second--
          if (this.second < 1) {
            clearInterval(this.timer)
            this.timer = null // 重置定时器id
            this.second = this.totalSecond// 归位
          }
        }, 1000)
      }
    },
    // 登录
    async getLogin () {
      if (!this.validfn()) {
        return
      }
      if (!/^\d{6}$/.test(this.msgCode)) {
        return
      }
      const res = await codeLogin(this.mobile, this.msgCode)
      this.$store.commit('user/setUserInfo', res.data)
      console.log(res)
      this.$toast.success('登录成功')
      const url = this.$route.query.backUrl || '/'
      this.$router.replace(url)
    }
  },
  destroyed () {
    // 离开页面，清除定时器
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg,#ecb53c,#ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
