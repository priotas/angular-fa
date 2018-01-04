import angular from 'angular';

const types = {
    string: 'string',
    boolean: 'boolean',
    integer: 'integer'
};

const options = {
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
        enum: [
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
        ]
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
    let truthy = function(prop) {
        let isFalsy =
            angular.isUndefined(prop) ||
            prop === 'false' ||
            prop === 0 ||
            prop === false;
        let isTruthy =
            angular.isDefined(prop) ||
            prop === 'true' ||
            prop === 1 ||
            prop === true;
        return isFalsy ? false : isTruthy ? true : false;
    };

    let classes = {
        'fa-spin': truthy(props.spin),
        'fa-pulse': truthy(props.pulse),
        'fa-fw': truthy(props.fixedWidth),
        'fa-border': truthy(props.border),
        'fa-li': truthy(props.listItem),
        'fa-flip-horizontal':
            props.flip === 'horizontal' || props.flip === 'both',
        'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both',
        [`fa-${props.size}`]: props.size !== null,
        [`fa-rotate-${props.rotation}`]: !!props.rotation,
        [`fa-pull-${props.pull}`]: !!props.pull
    };

    let filteredClasslist = Object.keys(classes)
        .map(key => {
            return angular.isString(classes[key]) || classes[key] === true
                ? key
                : null;
        })
        .filter(key => key);
    return filteredClasslist;
}

function maskToIcon(mask) {
    let parts = mask.split(' ');
    let iconDefinition = {
        prefix: angular.isDefined(parts[1]) ? parts[0] : 'fas',
        iconName: angular.isDefined(parts[1]) ? parts[1] : parts[0]
    };
    return iconDefinition;
}

export { classList, options, maskToIcon, types };
