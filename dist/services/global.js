"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHomeSetting = undefined;

var getHomeSetting = exports.getHomeSetting = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _request2.default)({
              url: "http://120.79.22.119:8091" + "/api/setting/getHomeSettingList"
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getHomeSetting() {
    return _ref.apply(this, arguments);
  };
}();
// 获取accessToken


exports.getAccessToken = getAccessToken;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _request = require("../utils/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Descripttion:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Date: 2019-09-09 00:18:14
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @LastEditTime: 2019-09-14 09:19:15
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


function getAccessToken(code) {
  // console.log(Taro.getStorageSync('sessionId'), 99)
  // if (Taro.getStorageSync('sessionId')) return;
  return (0, _request2.default)({
    url: "http://120.79.22.119:8091" + "/api/weixin/login",
    data: {
      js_code: code
    },
    // withoutAccessToken: true,
    success: function success(res) {
      if (res.success) {
        _index2.default.setStorageSync('sessionId', res.result.sessionId);
        _index2.default.eventCenter.trigger('login');
      }
    }
  });
}