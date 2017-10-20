'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lowdb = require('lowdb');

var _lowdb2 = _interopRequireDefault(_lowdb);

var _FileSync = require('lowdb/adapters/FileSync');

var _FileSync2 = _interopRequireDefault(_FileSync);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (state) {
  var folder = _path2.default.resolve('.', 'store');
  if (!_fs2.default.existsSync(folder)) _fs2.default.mkdirSync(folder);

  var db = (0, _lowdb2.default)(new _FileSync2.default(folder + '/' + state.file + '.json'));
  var defaults = {};
  defaults[state.key] = [];
  db.defaults(defaults).write();
  state.db = db;

  return state;
};