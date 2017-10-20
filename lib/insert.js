'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _modules = require('./modules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (state) {
  return {
    insert: function insert() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var db = state.db,
          key = state.key,
          schema = state.schema;

      var store = db.get(key);
      var id = (0, _uuid2.default)();
      var props = (0, _modules.consolidate)(schema, data);

      store.push(_extends({}, schema, props, { createdAt: new Date(), id: id })).write();

      return store.find({ id: id }).value();
    }
  };
};