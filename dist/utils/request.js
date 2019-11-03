"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   * @Descripttion:
                                                                                                                                                                                                                                                                   * @Date: 2019-08-05 00:21:38
                                                                                                                                                                                                                                                                   * @LastEditTime: 2019-09-14 09:18:47
                                                                                                                                                                                                                                                                   */


exports.default = request;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _global = require("../services/global.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request(options) {
  options.header = _extends({}, options.header, {
    sessionId: _index2.default.getStorageSync('sessionId')
  });
  return _index2.default.request(_extends({}, options, {
    success: function success(res) {
      if (res.data.code === 401) {
        wx.login({
          success: function success(res) {
            if (res.code) {
              (0, _global.getAccessToken)(res.code);
            } else {
              console.log('登录失败！' + res.errMsg);
            }
            _index2.default.eventCenter.on('login', function (options) {
              return request(options);
            });
          }
        });
      }
      options.success && options.success(res.data);
      return res.data;
    }
  }));
}
// export default function(options) {
//   return Taro.request(options).then((res) => {
//     const { statusCode, data } = res;
//     if (statusCode >= 200 && statusCode < 300) {
//       return data;
//     } else {
//       throw new Error(`网络请求错误，状态码${statusCode}`);
//     }
//   })
// }