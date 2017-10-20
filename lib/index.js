'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _insert = require('./insert');

var _insert2 = _interopRequireDefault(_insert);

var _find = require('./find');

var _find2 = _interopRequireDefault(_find);

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

var _remove = require('./remove');

var _remove2 = _interopRequireDefault(_remove);

var _reset = require('./reset');

var _reset2 = _interopRequireDefault(_reset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$file = _ref.file,
      file = _ref$file === undefined ? 'db' : _ref$file,
      _ref$key = _ref.key,
      key = _ref$key === undefined ? 'model' : _ref$key,
      _ref$schema = _ref.schema,
      schema = _ref$schema === undefined ? {} : _ref$schema;

  var state = { file: file, key: key, schema: schema };

  return Object.assign({}, (0, _store2.default)(state), (0, _insert2.default)(state), (0, _find2.default)(state), (0, _update2.default)(state), (0, _remove2.default)(state), (0, _reset2.default)(state));
};