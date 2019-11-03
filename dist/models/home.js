'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   * @Descripttion: 首页
                                                                                                                                                                                                                                                                   * @Date: 2019-08-10 21:10:21
                                                                                                                                                                                                                                                                   * @LastEditTime: 2019-10-27 20:52:02
                                                                                                                                                                                                                                                                   */


var _index = require('../services/index.js');

exports.default = {
  namespace: 'index',
  state: {
    list: {},
    records: []
  },
  subscriptions: {
    setup: function setup(_ref) {
      // dispatch({type: 'getHomeSetting'});

      var dispatch = _ref.dispatch,
          history = _ref.history;
    }
  },
  effects: {
    getHomeSetting: /*#__PURE__*/regeneratorRuntime.mark(function getHomeSetting(_ref2, _ref3) {
      var payload = _ref2.payload;
      var call = _ref3.call,
          put = _ref3.put;
      var res;
      return regeneratorRuntime.wrap(function getHomeSetting$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_index.getHomeSetting, payload);

            case 2:
              res = _context.sent;

              if (!(res.data.success === true)) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return put({
                type: 'updateData',
                payload: _extends({}, res.data.result)
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, getHomeSetting, this);
    }),
    getList: /*#__PURE__*/regeneratorRuntime.mark(function getList(_ref4, _ref5) {
      var payload = _ref4.payload;
      var call = _ref5.call,
          put = _ref5.put,
          select = _ref5.select;

      var res, _ref6, records;

      return regeneratorRuntime.wrap(function getList$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call(_index.getList, payload);

            case 2:
              res = _context2.sent;
              _context2.next = 5;
              return select(function (state) {
                return state.index;
              });

            case 5:
              _ref6 = _context2.sent;
              records = _ref6.records;

              if (!(res.data.success === true)) {
                _context2.next = 10;
                break;
              }

              _context2.next = 10;
              return put({
                type: 'updateData',
                payload: {
                  list: res.data.result,
                  records: records.concat(res.data.result.records)
                }
              });

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, getList, this);
    })
  },
  reducers: {
    updateData: function updateData(state, _ref7) {
      var payload = _ref7.payload;

      return _extends({}, state, payload);
    }
  }
};