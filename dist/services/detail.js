"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductDetail = undefined;

var getProductDetail = exports.getProductDetail = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(param) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _request2.default)({
              url: "http://120.79.22.119:8091" + "/api/articleDetail/queryById?id=" + param.id
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getProductDetail(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _request = require("../utils/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Descripttion:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Date: 2019-08-11 15:41:31
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */