import request from '@/utils/request';
// 账户登录
export async function accountLogin(params) {
  return request('/oraflapi/auth/pcLogin', {
    method: 'POST',
    body: params,
  });
}
// 获取用户信息
export async function queryUserInfo(params) {
  return request('/oraflapi/auth/getPcSysUser', {
    method: 'POST',
    body: params,
  });
}
// 找回密码 
export async function fakeForgetPwd(params) {
  return request('/oraflapi/auth/forgetPcSysUser', {
    method: 'POST',
    body: params,
  });
}
//发送短信验证码
export async function getCode(params) {
  return request('/oraflapi/auth/sendCode4Pc', {
    method: 'POST',
    body: params,
  });
}
// 重置密码 
export async function fakeResetPwd(params) {
  return request('/oraflapi/auth/changePcSysUser', {
    method: 'POST',
    body: params,
  });
}

