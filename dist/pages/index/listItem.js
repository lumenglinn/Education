"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ListItem, _BaseComponent);

  function ListItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray2", "data", "imgsArr", "newImgs", "list", "webViewUrl"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListItem, [{
    key: "_constructor",
    value: function _constructor() {
      _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        list: [],
        webViewUrl: undefined
      };
      this.$$refs = [];
    }
  }, {
    key: "handleClick",
    value: function handleClick(url) {
      this.setState({
        webViewUrl: url
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var loopArray2 = void 0;

      var webViewUrl = this.__state.webViewUrl;
      var _props$data = this.__props.data,
          data = _props$data === undefined ? {} : _props$data;

      var imgsArr = JSON.parse(data.covers || '[]');
      // 处理图片没有http，显示错误问题
      var newImgs = [];
      for (var i = 0; i < imgsArr.length; i++) {
        if (imgsArr[i].indexOf('http') === -1) {
          newImgs.push("http://" + imgsArr[i]);
        } else {
          newImgs.push(imgsArr[i]);
        }
      }
      var itemDom = null;
      if (imgsArr.length === 1) {} else if (imgsArr.length > 1) {
        loopArray2 = imgsArr.map(function (imgItem, j) {
          imgItem = {
            $original: (0, _index.internal_get_original)(imgItem)
          };
          var $loopState__temp2 = "recomm_" + j;
          return {
            $loopState__temp2: $loopState__temp2,
            $original: imgItem.$original
          };
        });
      } else {}
      Object.assign(this.__state, {
        loopArray2: loopArray2,
        data: data,
        imgsArr: imgsArr,
        newImgs: newImgs
      });
      return this.__state;
    }
  }]);

  return ListItem;
}(_index.Component), _class.$$events = ["handleClick"], _class.$$componentPath = "pages/index/listItem", _temp2);
exports.default = ListItem;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ListItem));