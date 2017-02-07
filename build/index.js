'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withStore = exports.createStore = undefined;

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _reactDataStore = require('./react-data-store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _store2.default;
exports.createStore = _reactDataStore.createStore;
exports.withStore = _reactDataStore.withStore;