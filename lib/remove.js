"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state) {
  return {
    remove: function remove(_ref) {
      var query = _ref.query;

      return state.db.get(state.key).remove(query).write();
    }
  };
};