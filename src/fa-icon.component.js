import angular from 'angular';
import {
  findIconDefinition,
  icon as faIcon,
  parse
} from '@fortawesome/fontawesome-svg-core';
import { classList, options, maskToIcon } from './common';

const component = {
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
  controller: function($element) {
    'ngInject';
    this.$onChanges = changes => {
      this.renderIcon();
    };

    this.$postLink = () => {
      this.renderIcon();
    };

    this.renderIcon = () => {
      const found = findIconDefinition({
        iconName: this.icon,
        prefix: this.prefix
      });
      if (found) {
        const iconOptions = {};
        for (let key in options) {
          if (this[key]) {
            iconOptions[key] = this[key];
          } else {
            iconOptions[key] = options[key].default;
          }
        }

        const iconDefinition = {
          prefix: iconOptions.prefix,
          iconName: iconOptions.icon
        };

        const transform = angular.isString(this.transform)
          ? parse.transform(this.transform)
          : {};

        const mask = angular.isString(this.mask)
          ? faIcon(maskToIcon(this.mask))
          : null;

        const params = {
          classes: classList(iconOptions),
          transform: transform,
          mask: mask,
          symbol: this.symbol
        };

        const icon = faIcon(iconDefinition, params);
        this.rendered = icon.html[0];
        $element.empty();
        $element.append(this.rendered);
      }
    };
  }
};

export default component;
