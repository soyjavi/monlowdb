"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state) {
  return {
    reset: function reset() {
      state.db.set(state.key, []).write();
    }
  };
};