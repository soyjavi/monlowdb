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
    update: function update(_ref) {
      var query = _ref.query,
          data = _ref.data,
          _ref$upsert = _ref.upsert,
          upsert = _ref$upsert === undefined ? false : _ref$upsert;
      var db = state.db,
          key = state.key,
          schema = state.schema;

      var store = db.get(key);
      var item = store.find(query).value();
      var id = void 0;

      var props = (0, _modules.consolidate)(schema, data);

      if (item) {
        store.find(query).assign(_extends({}, schema, item, { updatedAt: new Date() }, props)).write();
      } else if ((!item || !item.id) && props && upsert) {
        id = (0, _uuid2.default)();
        store.push(_extends({}, schema, { id: id, createdAt: new Date() }, query, props)).write();
      }

      return id || item ? store.find({ id: id || item.id }).value() : undefined;
    }
  };
};