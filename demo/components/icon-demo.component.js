import angular from 'angular';
import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { options, types } from '../../src/common';
import template from './icon-demo.html';

library.add(fas, fab);

class DemoController {
  constructor() {
    this.prefixes = ['fas', 'fab'];
    this.locals = {};
    this.props = [];
    this.types = types;
  }

  $onInit() {
    let props = angular.copy(options);
    delete props.icon;
    delete props.prefix;

    angular.forEach(props, (value, key) => {
      this.props.push({
        name: key,
        title: key.charAt(0).toUpperCase() + key.slice(1),
        type: value.type,
        isEnum: angular.isArray(value.enum) || false,
        enum: value.enum
      });
    });
  }

  kebabCase(camelCase) {
    return camelCase
      .replace(/^([A-Z])/, $1 => $1.toLowerCase()) // replace first char
      .replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase()); // replace rest
  }

  search() {
    const found = findIconDefinition({
      prefix: this.locals.prefix,
      iconName: this.locals.icon
    });

    this.updateComponentPreview();

    this.locals = angular.copy(this.locals);
  }

  updateComponentPreview() {
    let attrs = Object.keys(this.locals)
      .map(value => {
        return `${this.kebabCase(value)}="${this.locals[value]}"`;
      })
      .join(' ');
    this.component = `<fa-icon ${attrs}></fa-icon>`;
  }

  toggleBoolean(property) {
    if (angular.isDefined(this.locals[property])) {
      delete this.locals[property];
    } else {
      this.locals[property] = true;
    }
    this.updateComponentPreview();
    this.locals = angular.copy(this.locals);
  }

  updateProperty(property) {
    this.locals[property] = this.properties[property];
    this.updateComponentPreview();
    this.locals = angular.copy(this.locals);
  }

  updatePrefix() {
    this.updateComponentPreview();
    this.locals = angular.copy(this.locals);
  }

  reset() {
    this.properties = {};
    this.locals = {};
    this.component = '';
  }

  newRandomIcon() {
    const items = [
      'phone',
      'camera',
      'comment',
      'bell',
      'bluetooth',
      'file',
      'inbox',
      'keyboard'
    ];
    this.randomIcon = items[Math.floor(Math.random() * items.length)];
    let flips = ['vertical', 'horizontal', 'both'];
    this.randomFlip = flips[Math.floor(Math.random() * flips.length)];
    let booleans = ['true', 'false'];
    this.randomPulse = booleans[Math.floor(Math.random() * booleans.length)];
  }
}

let component = {
  controller: DemoController,
  template: template,
  bindings: {}
};

export default component;
