(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("fontawesome"));
	else if(typeof define === 'function' && define.amd)
		define("angular-fa", ["angular", "fontawesome"], factory);
	else if(typeof exports === 'object')
		exports["angular-fa"] = factory(require("angular"), require("fontawesome\""));
	else
		root["angular-fa"] = factory(root["angular"], root["fontawesome"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.faIcon = undefined;

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _faIcon = __webpack_require__(2);

var _faIcon2 = _interopRequireDefault(_faIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MODULE_NAME = 'angular-fa';

_angular2.default.module(MODULE_NAME, []).component('faIcon', _faIcon2.default);

exports.faIcon = _faIcon2.default;
exports.default = MODULE_NAME;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _fontawesome = __webpack_require__(3);

var _fontawesome2 = _interopRequireDefault(_fontawesome);

var _common = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = {
    template: '',
    bindings: {
        border: '@',
        fixedWidth: '@',
        flip: '@',
        icon: '@',
        mask: '@',
        listItem: '@',
        prefix: '@',
        pull: '@',
        pulse: '@',
        rotation: '@',
        size: '@',
        spin: '@',
        transform: '@',
        symbol: '@'
    },
    controller: ['$element', '$attrs', function ($element) {
        var _this = this;

        this.$onChanges = function (changes) {
            _this.renderIcon();
        };

        this.$postLink = function () {
            _this.renderIcon();
        };

        this.renderIcon = function () {
            var found = _fontawesome2.default.findIconDefinition({
                iconName: _this.icon,
                prefix: _this.prefix
            });
            if (found) {
                var iconOptions = {};
                for (var key in _common.options) {
                    if (_this[key]) {
                        iconOptions[key] = _this[key];
                    } else {
                        iconOptions[key] = _common.options[key].default;
                    }
                }

                var iconDefinition = {
                    prefix: iconOptions.prefix,
                    iconName: iconOptions.icon
                };

                var transform = _angular2.default.isString(_this.transform) ? _fontawesome2.default.parse.transform(_this.transform) : {};

                var mask = _angular2.default.isString(_this.mask) ? _fontawesome2.default.icon((0, _common.maskToIcon)(_this.mask)) : null;

                var params = {
                    classes: (0, _common.classList)(iconOptions),
                    transform: transform,
                    mask: mask,
                    symbol: _this.symbol
                };

                var icon = _fontawesome2.default.icon(iconDefinition, params);
                _this.rendered = icon.html[0];
                $element.empty();
                $element.append(_this.rendered);
            }
        };
    }]
};

exports.default = component;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.types = exports.maskToIcon = exports.options = exports.classList = undefined;

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var types = {
    string: 'string',
    boolean: 'boolean',
    integer: 'integer'
};

var options = {
    border: {
        type: types.boolean,
        default: false
    },
    fixedWidth: {
        type: types.boolean,
        default: false
    },
    flip: {
        type: types.string,
        default: null,
        enum: ['horizontal', 'vertical', 'both']
    },
    icon: {
        type: types.string,
        required: true
    },
    mask: {
        type: types.string,
        default: null
    },
    listItem: {
        type: types.boolean,
        default: false
    },
    prefix: {
        type: types.string,
        default: 'fas',
        enum: ['fab', 'fal', 'far', 'fas']
    },
    pull: {
        type: types.string,
        default: null,
        enum: ['right', 'left']
    },
    pulse: {
        type: types.boolean,
        default: false
    },
    rotation: {
        type: types.integer,
        default: null,
        enum: [90, 180, 270]
    },
    size: {
        type: types.string,
        default: null,
        enum: ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']
    },
    spin: {
        type: types.boolean,
        default: false
    },
    transform: {
        type: types.string,
        default: null
    },
    symbol: {
        type: types.string,
        default: ''
    }
};

function classList(props) {
    var _classes;

    var truthy = function truthy(prop) {
        var isFalsy = _angular2.default.isUndefined(prop) || prop === 'false' || prop === 0 || prop === false;
        var isTruthy = _angular2.default.isDefined(prop) || prop === 'true' || prop === 1 || prop === true;
        return isFalsy ? false : isTruthy ? true : false;
    };

    var classes = (_classes = {
        'fa-spin': truthy(props.spin),
        'fa-pulse': truthy(props.pulse),
        'fa-fw': truthy(props.fixedWidth),
        'fa-border': truthy(props.border),
        'fa-li': truthy(props.listItem),
        'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
        'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
    }, _defineProperty(_classes, 'fa-' + props.size, props.size !== null), _defineProperty(_classes, 'fa-rotate-' + props.rotation, !!props.rotation), _defineProperty(_classes, 'fa-pull-' + props.pull, !!props.pull), _classes);

    var filteredClasslist = Object.keys(classes).map(function (key) {
        return _angular2.default.isString(classes[key]) || classes[key] === true ? key : null;
    }).filter(function (key) {
        return key;
    });
    return filteredClasslist;
}

function maskToIcon(mask) {
    var parts = mask.split(' ');
    var iconDefinition = {
        prefix: _angular2.default.isDefined(parts[1]) ? parts[0] : 'fas',
        iconName: _angular2.default.isDefined(parts[1]) ? parts[1] : parts[0]
    };
    return iconDefinition;
}

exports.classList = classList;
exports.options = options;
exports.maskToIcon = maskToIcon;
exports.types = types;

/***/ })
/******/ ]);
});