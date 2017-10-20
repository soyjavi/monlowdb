"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state) {
  return {
    find: function find() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          query = _ref.query,
          field = _ref.field,
          sortBy = _ref.sortBy,
          _ref$limit = _ref.limit,
          limit = _ref$limit === undefined ? 1 : _ref$limit;

      var store = state.db.get(state.key);
      var item = void 0;
      if (limit === 1) {
        item = store.find(query);
      } else {
        item = store.filter(query).map(field).sortBy(sortBy).take(limit || 4096);
      }

      return item.value();
    }
  };
};