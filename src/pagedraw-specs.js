import React from 'react';

import {
    Alert,
    Badge,
    Button,
    Image,
    ProgressBar,
    Label,
    Well,
    DropdownButton,
    FormControl,
    ControlLabel
} from 'react-bootstrap';
import './bootstrap.css'

const Enum = (options, required, defaultValue) => ({type: 'Enum', options, required, defaultValue});

// Material ui types
const colorTy = (required) => Enum(['default', 'primary', 'secondary'], required);
const variantTy = (required) => Enum(['raised', 'flat', 'outlined', 'fab'], required);
const sizeTy = (required) => Enum(['small', 'medium', 'large'], required);

// React bootstrap types
const bsStyleTy = (required) => Enum(['success', 'warning', 'danger', 'info'], required, 'success');
const bsSizeTy = (required) => Enum(["large", "small", "xsmall"], required)

Alert.pdPropControls = {
    bsStyle: bsStyleTy(true),
    children: {type: "Text", defaultValue: 'Alert!', required: true}
};
Alert.pdResizable = ['width']

Button.pdPropControls = {
    bsStyle: bsStyleTy(false),
    bsSize: bsSizeTy(true),
    type: Enum(['button', 'reset', 'submit']),
    active: {type: 'Checkbox', defaultValue: false},
    disabled: {type: 'Checkbox'},
    children: {type: "Text", required: true, defaultValue: 'Click me'},
    onClick: {type: 'Function'}
}
Button.pdResizable = ['width']

ProgressBar.pdPropControls = {
    bsStyle: bsStyleTy(true),
    min: {type: "Number", required: true, defaultValue: 0},
    now: {type: "Number", required: true, defaultValue: 4},
    max: {type: "Number", required: true, defaultValue: 10},
    active: {type: "Checkbox", required: true, defaultValue: true},
    striped: {type: 'Checkbox', required: true, defaultValue: true}
};
ProgressBar.pdResizable = ['width']

Badge.pdPropControls = {
    pullRight: 'Boolean',
    children: {type: 'Text', required: true, defaultValue: '42'}
};
Badge.pdResizable = ['height', 'width'];

Image.pdPropControls = {thumbnail: 'Boolean', responsive: 'Boolean', rounded: 'Boolean', circle: 'Boolean', src: "Text"};
Image.pdResizable = ['height', 'width'];

Label.pdPropControls = {
    bsStyle: bsStyleTy(true),
    children: {type: 'Text', required: true, defaultValue: 'Label me'}
};
Label.pdResizable = [];

Well.pdPropControls = {
    bsSize: bsSizeTy(true),
    children: {type: 'Text', defaultValue: 'Well...'}
}
Well.pdResizable = ['height', 'width'];

DropdownButton.pdPropControls = {
    bsStyle: bsStyleTy(true),
    bsSize: bsSizeTy(true),
    title: {type: 'Text', defaultValue: 'Dropdown'},
    noCaret: 'Boolean',
    children: {type: [{type: 'Text'}]}
}
DropdownButton.pdResizable = ['height', 'width'];

FormControl.pdPropControls = {
    bsSize: bsSizeTy(true),
    type: 'Text',
    value: 'Text',
    placeholder: {type: 'Text', defaultValue: 'Placeholder'},
    onChange: 'Function'};
FormControl.pdResizable = ['height', 'width']

ControlLabel.pdPropControls = {
    children: {type: 'Text', defaultValue: 'This is a control', required: true}
}
ControlLabel.pdResizable = ['height', 'width'];

export default {
    Alert,
    Badge,
    Button,
    Image,
    ProgressBar,
    Label,
    Well,
    DropdownButton,
    FormControl,
    ControlLabel
};
