import angularFa from '../src/angularjs';
import angularMocks from 'angular-mocks';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import brands from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(solid, brands);

describe('faIcon Directive', function() {
    var element;
    var scope;

    beforeEach(function() {
        angular.mock.module(angularFa);
    });

    let createDirective = function(params) {
        params = angular.isDefined(params) ? params : {};
        let attrs = Object.keys(params)
            .map(value => {
                return `${value}="${params[value]}"`;
            })
            .join(' ');

        inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            element = $compile(`<fa-icon ${attrs}></fa-icon>`)(scope);
            scope.$digest();
        });
    };

    it('should display an empty element when no icon is provided', function() {
        createDirective();
        expect(element.html()).toEqual('');
    });

    it('should display a svg element when there is a valid icon', function() {
        createDirective({ icon: 'cog' });
        expect(element.find('svg').hasClass('fa-cog')).toBe(true);
    });
});
