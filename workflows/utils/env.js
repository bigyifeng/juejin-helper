const env = process.env || {};

module.exports = {
  /* 掘金Cookie */
  COOKIE: "_ga=GA1.2.1397930116.1656926758; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227116446198534407721%2522%252C%2522user_unique_id%2522%253A%25227116446198534407721%2522%252C%2522timestamp%2522%253A1656926757987%257D; _ga_S695FMNGPJ=GS1.2.1689065580.1.0.1689065580.60.0.0; _tea_utm_cache_2018={%22utm_source%22:%22web_nav%22}; _tea_utm_cache_2608={%22utm_source%22:%22web_nav%22}; _tea_utm_cache_576092=undefined; msToken=h4LSyb3gaQLAxPLoJ7cujVUC46ePSPrJjFrP3xdicK95lQpl_8Mmyo1phGYxciUrdDm5SVJg8mf3Li_umn7hTZtg0Vj9QdYbehnwgKre5ozCeCUyy2YpHk1oOm50ito=; csrf_session_id=548355c77ffe20d57bfb16adcdf4bfcb; passport_csrf_token=cfca4f5f8f6048c021143c4cd81bff63; passport_csrf_token_default=cfca4f5f8f6048c021143c4cd81bff63; n_mh=iKJwgWOXsyG1BeO2jEaQPInak02p3QQm9lN7bQKyNz0; passport_auth_status=cc8f96eacf5153f297a0cdcb6b90a9dc%2C; passport_auth_status_ss=cc8f96eacf5153f297a0cdcb6b90a9dc%2C; sid_guard=94468a4f90921d76ab2f398ccb19ed22%7C1720746281%7C31536000%7CSat%2C+12-Jul-2025+01%3A04%3A41+GMT; uid_tt=61e2fe7bc84ac891649c50cded7aaa95; uid_tt_ss=61e2fe7bc84ac891649c50cded7aaa95; sid_tt=94468a4f90921d76ab2f398ccb19ed22; sessionid=94468a4f90921d76ab2f398ccb19ed22; sessionid_ss=94468a4f90921d76ab2f398ccb19ed22; sid_ucp_v1=1.0.0-KGRjOWVjZWY1NTA3OTNkZmE0MWY0YTk5NGM4ZTI5NTE5MjI4ODA4MWUKFgiuzJDSm_UzEKmCwrQGGLAUOAJA8QcaAmxmIiA5NDQ2OGE0ZjkwOTIxZDc2YWIyZjM5OGNjYjE5ZWQyMg; ssid_ucp_v1=1.0.0-KGRjOWVjZWY1NTA3OTNkZmE0MWY0YTk5NGM4ZTI5NTE5MjI4ODA4MWUKFgiuzJDSm_UzEKmCwrQGGLAUOAJA8QcaAmxmIiA5NDQ2OGE0ZjkwOTIxZDc2YWIyZjM5OGNjYjE5ZWQyMg; store-region=cn-sc; store-region-src=uid",
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
