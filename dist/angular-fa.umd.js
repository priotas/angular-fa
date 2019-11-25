(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('angular'), require('@fortawesome/fontawesome-svg-core')) :
  typeof define === 'function' && define.amd ? define(['angular', '@fortawesome/fontawesome-svg-core'], factory) :
  (global = global || self, global.angularFa = factory(global.angular, global.fontawesomeSvgCore));
}(this, (function (angular, fontawesomeSvgCore) { 'use strict';

  angular = angular && angular.hasOwnProperty('default') ? angular['default'] : angular;

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
      var isFalsy = angular.isUndefined(prop) || prop === 'false' || prop === 0 || prop === false;
      var isTruthy = angular.isDefined(prop) || prop === 'true' || prop === 1 || prop === true;
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
      return angular.isString(classes[key]) || classes[key] === true ? key : null;
    }).filter(function (key) {
      return key;
    });
    return filteredClasslist;
  }

  function maskToIcon(mask) {
    var parts = mask.split(' ');
    var iconDefinition = {
      prefix: angular.isDefined(parts[1]) ? parts[0] : 'fas',
      iconName: angular.isDefined(parts[1]) ? parts[1] : parts[0]
    };
    return iconDefinition;
  }

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
    controller: ['$element', function controller($element) {
      'ngInject';

      var _this = this;

      this.$onChanges = function (changes) {
        _this.renderIcon();
      };

      this.$postLink = function () {
        _this.renderIcon();
      };

      this.renderIcon = function () {
        var found = fontawesomeSvgCore.findIconDefinition({
          iconName: _this.icon,
          prefix: _this.prefix
        });
        if (found) {
          var iconOptions = {};
          for (var key in options) {
            if (_this[key]) {
              iconOptions[key] = _this[key];
            } else {
              iconOptions[key] = options[key].default;
            }
          }

          var iconDefinition = {
            prefix: iconOptions.prefix,
            iconName: iconOptions.icon
          };

          var transform = angular.isString(_this.transform) ? fontawesomeSvgCore.parse.transform(_this.transform) : {};

          var mask = angular.isString(_this.mask) ? fontawesomeSvgCore.icon(maskToIcon(_this.mask)) : null;

          var params = {
            classes: classList(iconOptions),
            transform: transform,
            mask: mask,
            symbol: _this.symbol
          };

          var icon = fontawesomeSvgCore.icon(iconDefinition, params);
          _this.rendered = icon.html[0];
          $element.empty();
          $element.append(_this.rendered);
        }
      };
    }]
  };

  var MODULE_NAME = 'angular-fa';

  angular.module(MODULE_NAME, []).component('faIcon', component);

  return MODULE_NAME;

})));
