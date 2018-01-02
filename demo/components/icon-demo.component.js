import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import brands from '@fortawesome/fontawesome-free-brands';
import { options, types } from '../../src/common';
import template from './icon-demo.html';

fontawesome.library.add(solid, brands);

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
                type: value.type
            });
        });
    }

    kebabCase(camelCase) {
        return camelCase
            .replace(/^([A-Z])/, $1 => $1.toLowerCase()) // replace first char
            .replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase()); // replace rest
    }

    search() {
        let found = fontawesome.findIconDefinition({
            prefix: this.locals.prefix,
            iconName: this.locals.icon
        });
        if (found) {
            this.updateComponentPreview();
        }

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
}

let component = {
    controller: DemoController,
    template: template,
    bindings: {}
};

export default component;
