class CompilerController {
    constructor($scope, $element, Compiler, $injector) {
        'ngInject';
        this.$scope = $scope;
        this.$element = $element;
        this.Compiler = Compiler;
        this.$injector = $injector;
    }

    $onInit() {}

    render() {

        this.$element.children().remove();

        let comp = this.$injector.get(`${this.component}Directive`)[0];

        if (!comp) {
            throw `${this.component} cannot be found`;
        }

        let bindings = this.getBindings(comp);
        let attrs = bindings
            .filter(value => {
                return angular.isDefined(this.locals[value]);
            })
            .map(value => {
                return `${this.kebabCase(value)}="${this.locals[value]}"`;
            })
            .join(' ');

        let element = this.kebabCase(this.component);
        let template = `<${element} ${attrs}></${element}>`;

        this.Compiler.compile({
            template: template
        }).then(compileData => {
            let el = compileData.element; // Compiled DOM element
            compileData.link(this.$scope); // Instantiate controller and link element to scope.
            this.$element.append(el);
        });
    }

    $onChanges(changes) {
        this.render();
    }

    getBindings(comp) {
        return Object.keys(comp.bindToController);
    }

    camelCase(input) {
        return input.toLowerCase().replace(/-(.)/g, function(match, group1) {
            return group1.toUpperCase();
        });
    }

    kebabCase(camelCase) {
        return camelCase
            .replace(/^([A-Z])/, $1 => $1.toLowerCase()) // replace first char
            .replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase()); // replace rest
    }
}

let component = {
    controller: CompilerController,
    transclude: true,
    bindings: {
        component: '@',
        locals: '<'
    }
};

export default component;
