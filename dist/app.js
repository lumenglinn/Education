"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("./npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

require("./npm/@tarojs/async-await/index.js");

var _dva = require("./utils/dva.js");

var _dva2 = _interopRequireDefault(_dva);

var _index3 = require("./npm/@tarojs/redux/index.js");

var _index4 = require("./models/index.js");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
var dvaApp = _dva2.default.createApp({
  initialState: {},
  models: _index5.default
});
var store = dvaApp.getStore();
(0, _index3.setStore)(store);

if (_index3.ReduxContext.Provider) {
  _index3.ReduxContext.Provider({
    store: store
  });
  _index3.ReduxContext.Provider({
    store: store
  });
}

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    _classCallCheck(this, _App);

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    var _this = _possibleConstructorReturn(this, (_App.__proto__ || Object.getPrototypeOf(_App)).apply(this, arguments));

    _this.config = {
      pages: ['pages/index/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: true
      },
      requiredBackgroundModes: ["audio"]
      // tabBar: {
      //   color: '#666',
      //   selectedColor: '#b4282d',
      //   backgroundColor: '#fafafa',
      //   borderStyle: 'black',
      //   list: [{
      //     pagePath: 'pages/index/index',
      //     iconPath: './assets/tab-bar/home.png',
      //     selectedIconPath: './assets/tab-bar/home-active.png',
      //     text: '首页'
      //   }, {
      //     pagePath: 'pages/cateList/index',
      //     iconPath: './assets/tab-bar/cate.png',
      //     selectedIconPath: './assets/tab-bar/cate-active.png',
      //     text: '分类'
      //   }, {
      //     pagePath: 'pages/cart/index',
      //     iconPath: './assets/tab-bar/cart.png',
      //     selectedIconPath: './assets/tab-bar/cart-active.png',
      //     text: '购物车'
      //   }, {
      //     pagePath: 'pages/mine/index',
      //     iconPath: './assets/tab-bar/user.png',
      //     selectedIconPath: './assets/tab-bar/user-active.png',
      //     text: '个人'
      //   }]
      // }
    };
    return _this;
  }

  _createClass(_App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      // let { path } = this.$router.params;
      // wx.login({
      //   success(res) {
      //     if (res.code) {
      //       getAccessToken(res.code);
      //     } else {
      //       console.log('登录失败！' + res.errMsg)
      //     }
      //   }
      // })
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: "_createData",
    value: function _createData() {}
  }]);

  return _App;
}(_index.Component);

exports.default = _App;

App(require('./npm/@tarojs/taro-weapp/index.js').default.createApp(_App));
_index2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});