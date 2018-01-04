import angularFa from '../src/angular-fa';
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

    test('should display an empty element when no icon is provided', function() {
        createDirective();
        expect(element.html()).toEqual('');
    });

    test('should display a svg element when there is a valid icon', function() {
        createDirective({ icon: 'cog' });
        expect(element.find('svg').hasClass('fa-cog')).toBe(true);
    });

    test('supports the border property', function() {
        createDirective({ icon: 'coffee', border: true });
        expect(element.find('svg').hasClass('fa-border')).toBe(true);
        createDirective({ icon: 'coffee', border: false });
        expect(element.find('svg').hasClass('fa-border')).toBe(false);
    });

    test('supports the fixedWidth property', function() {
        createDirective({ icon: 'coffee', 'fixed-width': true });
        expect(element.find('svg').hasClass('fa-fw')).toBe(true);
        createDirective({ icon: 'coffee', 'fixed-width': false });
        expect(element.find('svg').hasClass('fa-fw')).toBe(false);
    });

    test('supports the flip property', function() {
        // horizontal
        createDirective({ icon: 'coffee', flip: 'horizontal' });
        expect(element.find('svg').hasClass('fa-flip-horizontal')).toBe(true);
        expect(element.find('svg').hasClass('fa-flip-vertical')).toBe(false);
        // vertical
        createDirective({ icon: 'coffee', flip: 'vertical' });
        expect(element.find('svg').hasClass('fa-flip-vertical')).toBe(true);
        expect(element.find('svg').hasClass('fa-flip-horizontal')).toBe(false);
        // both
        createDirective({ icon: 'coffee', flip: 'both' });
        expect(element.find('svg').hasClass('fa-flip-vertical')).toBe(true);
        expect(element.find('svg').hasClass('fa-flip-horizontal')).toBe(true);
    });

    test('supports the listItem property', function() {
        createDirective({ icon: 'coffee', 'list-item': true });
        expect(element.find('svg').hasClass('fa-li')).toBe(true);
        createDirective({ icon: 'coffee', 'list-item': false });
        expect(element.find('svg').hasClass('fa-li')).toBe(false);
    });

    test('supports the pull property', function() {
        // left
        createDirective({ icon: 'coffee', pull: 'left' });
        expect(element.find('svg').hasClass('fa-pull-left')).toBe(true);
        expect(element.find('svg').hasClass('fa-pull-right')).toBe(false);
        // right
        createDirective({ icon: 'coffee', pull: 'right' });
        expect(element.find('svg').hasClass('fa-pull-right')).toBe(true);
        expect(element.find('svg').hasClass('fa-pull-left')).toBe(false);
    });

    test('supports the pulse property', function() {
        createDirective({ icon: 'coffee', pulse: true });
        expect(element.find('svg').hasClass('fa-pulse')).toBe(true);
        createDirective({ icon: 'coffee', pulse: false });
        expect(element.find('svg').hasClass('fa-pulse')).toBe(false);
    });

    test('supports the rotation property', function() {
        [90, 180, 270].forEach(value => {
            createDirective({ icon: 'coffee', rotation: value });
            expect(element.find('svg').hasClass(`fa-rotate-${value}`)).toBe(
                true
            );
        });
    });

    test('supports the size property', function() {
        [
            'lg',
            'xs',
            'sm',
            '1x',
            '2x',
            '3x',
            '4x',
            '5x',
            '6x',
            '7x',
            '8x',
            '9x',
            '10x'
        ].forEach(value => {
            createDirective({ icon: 'coffee', size: value });
            expect(element.find('svg').hasClass(`fa-${value}`)).toBe(true);
        });
    });

    test('supports the spin property', function() {
        createDirective({ icon: 'coffee', spin: true });
        expect(element.find('svg').hasClass('fa-spin')).toBe(true);
        createDirective({ icon: 'coffee', spin: false });
        expect(element.find('svg').hasClass('fa-spin')).toBe(false);
    });

    test('supports the transform property', function() {
        createDirective({ icon: 'coffee', transform: 'grow-40 left-4 rotate-15' });
        expect(element.html()).toContain('transform=');
    });

    test('supports the mask property', function() {
        createDirective({ icon: 'coffee', mask: 'comment' });
        expect(element.html()).toContain('clippath');
        createDirective({ icon: 'coffee', mask: 'fas comment' });
        expect(element.html()).toContain('clippath');
    });

    test('supports the symbol property', function() {
        createDirective({ icon: 'coffee', symbol: 'coffee-icon' });
        expect(element.html()).toContain('<svg style="display: none;"');
        expect(element.find('symbol')).toBeDefined();
    });
});
