// 所有跟登录有关的请求
import request from '@/utils/request'
// 获取图形验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}
// 获取手机验证码
export const getCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}
// 登录
export const codeLogin = (mobile, smsCode) => {
  return request.post('/passport/login', {
    form: {
      isParty: false,
      partyData: {},
      mobile,
      smsCode
    }
  })
}
