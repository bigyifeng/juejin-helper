const env = process.env || {};

module.exports = {
  /* 掘金Cookie */
  COOKIE: "_ga=GA1.2.1397930116.1656926758; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227116446198534407721%2522%252C%2522user_unique_id%2522%253A%25227116446198534407721%2522%252C%2522timestamp%2522%253A1656926757987%257D; sid_guard=3f42123c80c106c0605656f0c02016dc%7C1689065579%7C31535999%7CWed%2C+10-Jul-2024+08%3A52%3A58+GMT; uid_tt=0784c51695dd40d531a60f161a26b88c; uid_tt_ss=0784c51695dd40d531a60f161a26b88c; sid_tt=3f42123c80c106c0605656f0c02016dc; sessionid=3f42123c80c106c0605656f0c02016dc; sessionid_ss=3f42123c80c106c0605656f0c02016dc; sid_ucp_v1=1.0.0-KDM5M2U3Njg0ZmVhNWM2YjI0NTE5MTc5MTdlYjY4NzgyZjE4ODQ2NTQKFQiuzJDSm_UzEOuwtKUGGLAUOAhACxoCbGYiIDNmNDIxMjNjODBjMTA2YzA2MDU2NTZmMGMwMjAxNmRj; ssid_ucp_v1=1.0.0-KDM5M2U3Njg0ZmVhNWM2YjI0NTE5MTc5MTdlYjY4NzgyZjE4ODQ2NTQKFQiuzJDSm_UzEOuwtKUGGLAUOAhACxoCbGYiIDNmNDIxMjNjODBjMTA2YzA2MDU2NTZmMGMwMjAxNmRj; store-region=cn-sc; store-region-src=uid; _ga_S695FMNGPJ=GS1.2.1689065580.1.0.1689065580.60.0.0; _tea_utm_cache_2608={%22utm_source%22:%22web%22%2C%22utm_medium%22:%22zhannx%22%2C%22utm_campaign%22:%22report2023%22}; _tea_utm_cache_2018={%22utm_source%22:%22web%22%2C%22utm_medium%22:%22zhannx%22%2C%22utm_campaign%22:%22report2023%22}; csrf_session_id=548355c77ffe20d57bfb16adcdf4bfcb; msToken=yXYnZMysDFfZUXKpYyr_KT58CckF8tYEnO41ftPMdmdWb6O0-22gF9DD013b3YGWJOuXbT9zvlJROmzLnfXxB_yXhBrTSQeBacsGcFKfd-C81eywEF2pc0rlHzfFZ1We",
  /* 多用户掘金Cookie, 当有1名以上用户时填写, 支持同时最多可配置5名用户 */
  COOKIE_2: env.COOKIE_2,
  COOKIE_3: env.COOKIE_3,
  COOKIE_4: env.COOKIE_4,
  COOKIE_5: env.COOKIE_5,
  /**
   * 邮箱配置
   * user 发件人邮箱, pass, 发件人密码, to收件人
   */
  EMAIL_USER: env.EMAIL_USER,
  EMAIL_PASS: env.EMAIL_PASS,
  EMAIL_TO: env.EMAIL_TO,
  /**
   * 钉钉配置
   * https://open.dingtalk.com/document/robots/custom-robot-access
   */
  DINGDING_WEBHOOK: env.DINGDING_WEBHOOK,
  /**
   * PushPlus配置
   * http://www.pushplus.plus/doc/guide/openApi.html
   */
  PUSHPLUS_TOKEN: env.PUSHPLUS_TOKEN,
  /**
   * 企业微信机器人配置
   * https://developer.work.weixin.qq.com/document/path/91770
   */
  WEIXIN_WEBHOOK: env.WEIXIN_WEBHOOK,
  /**
   * server酱推送key
   * https://sct.ftqq.com/sendkey
   */
  SERVERPUSHKEY: env.SERVERPUSHKEY,
  /**
   * 飞书配置
   */
  FEISHU_WEBHOOK: env.FEISHU_WEBHOOK
};
