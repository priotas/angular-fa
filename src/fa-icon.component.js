import angular from 'angular';
import fontawesome from '@fortawesome/fontawesome';
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
      let found = fontawesome.findIconDefinition({
        iconName: this.icon,
        prefix: this.prefix
      });
      if (found) {
        let iconOptions = {};
        for (let key in options) {
          if (this[key]) {
            iconOptions[key] = this[key];
          } else {
            iconOptions[key] = options[key].default;
          }
        }

        let iconDefinition = {
          prefix: iconOptions.prefix,
          iconName: iconOptions.icon
        };

        let transform = angular.isString(this.transform) ? fontawesome.parse.transform(this.transform) : {};

        let mask = angular.isString(this.mask) ? fontawesome.icon(maskToIcon(this.mask)) : null;

        let params = {
          classes: classList(iconOptions),
          transform: transform,
          mask: mask,
          symbol: this.symbol
        };

        let icon = fontawesome.icon(iconDefinition, params);
        this.rendered = icon.html[0];
        $element.empty();
        $element.append(this.rendered);
      }
    };
  }
};

export default component;
