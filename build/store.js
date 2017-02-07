"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
	function Store(data) {
		_classCallCheck(this, Store);

		this._handle = [];
		this._data = null;

		if (data) this._data = data;
	}

	_createClass(Store, [{
		key: "get",
		value: function get() {
			if (this._data instanceof Array) {
				return [].concat(_toConsumableArray(this._data));
			}
			if (this._data instanceof Object) {
				return _extends({}, this._data);
			}
			return this._data;
		}
	}, {
		key: "sub",
		value: function sub(fn) {
			var _this = this;

			if (this._data) fn(this._data);
			var len = this._handle.length;
			this._handle.push(fn);
			return { unsub: function unsub() {
					return _this._handle.splice(len, 1);
				} };
		}
	}, {
		key: "pub",
		value: function pub(data) {
			this._data = data;
			this._handle.forEach(function (fn) {
				return fn(data);
			});
		}
	}]);

	return Store;
}();

exports.default = Store;