"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var props = {};

  Object.keys(schema).forEach(function (attr) {
    if (data[attr]) props[attr] = data[attr];
  });

  return props;
};