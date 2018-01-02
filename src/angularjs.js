import angular from 'angular';
import fontawesome from '@fortawesome/fontawesome';
import { classList, options } from './common';

const MODULE_NAME = 'angular-fa';

angular.module(MODULE_NAME, []).component('faIcon', {
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
    controller: [
        '$element',
        function($element) {
            this.$onInit = () => {
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

                let classes = {
                    classes: classList(iconOptions)
                };

                let found = fontawesome.findIconDefinition(iconDefinition);
                if (found) {
                    let icon = fontawesome.icon(iconDefinition, classes);
                    this.rendered = icon.html[0];
                    $element.empty();
                    $element.append(this.rendered);
                }
            };
        }
    ]
});

export default MODULE_NAME;
