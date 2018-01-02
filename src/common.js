import angular from 'angular';

const types = {
    string: 'string',
    boolean: 'boolean',
    integer: 'integer',
}

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
        type: types.boolean,
        default: false
    }
};

function classList(props) {

    let classes = {
        'fa-spin': props.spin,
        'fa-pulse': props.pulse,
        'fa-fw': props.fixedWidth,
        'fa-border': props.border,
        'fa-li': props.listItem,
        'fa-flip-horizontal':
            props.flip === 'horizontal' || props.flip === 'both',
        'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both',
        [`fa-${props.size}`]: props.size !== null,
        [`fa-rotate-${props.rotation}`]: !!props.rotation,
        [`fa-pull-${props.pull}`]: !!props.pull
    };

    return Object.keys(classes)
        .map(key => (angular.isString(classes[key]) || classes[key] === true ? key : null))
        .filter(key => key);
}

export { classList, options, types };
