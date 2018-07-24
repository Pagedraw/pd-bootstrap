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

const Enum = (options) => ({__ty: 'Enum', options});

// Material ui types
const colorTy = Enum(['default', 'primary', 'secondary']);
const variantTy = Enum(['raised', 'flat', 'outlined', 'fab']);
const sizeTy = Enum(['small', 'medium', 'large']);

// React bootstrap types
const bsStyleTy = Enum(['success', 'warning', 'danger', 'info']);
const bsSizeTy = Enum(["large", "small", "xsmall"])

Alert.pdPropControls = {bsStyle: bsStyleTy, children: "Text"};
Alert.pdResizable = ['height', 'width']

Button.pdPropControls = {bsStyle: bsStyleTy, bsSize: bsSizeTy, type: Enum(['button', 'reset', 'submit']), active: 'Boolean', disabled: 'Boolean', block: 'Boolean', children: "Text"},
Button.pdResizable = ['height', 'width']

ProgressBar.pdPropControls = {bsStyle: bsStyleTy, min: "Number", now: 'Number', max: "Number", active: "Boolean", striped: 'Boolean'};
ProgressBar.pdResizable = ['width']

Badge.pdPropControls = {pullRight: 'Boolean', children: 'Text'};
Badge.pdResizable = ['height', 'width'];

Image.pdPropControls = {thumbnail: 'Boolean', responsive: 'Boolean', rounded: 'Boolean', circle: 'Boolean', src: "Text"};
Image.pdResizable = ['height', 'width'];

Label.pdPropControls = {bsStyle: bsStyleTy, children: 'Text'};
Label.pdResizable = [];

Well.pdPropControls = {bsSize: bsSizeTy, children: 'Text'}
Well.pdResizable = ['height', 'width'];

DropdownButton.pdPropControls = {bsStyle: bsStyleTy, bsSize: bsSizeTy, title: 'Text', noCaret: 'Boolean', children: 'Text'}
DropdownButton.pdResizable = ['height', 'width'];

FormControl.pdPropControls = {bsSize: bsSizeTy, type: 'Text', value: 'Text', placeholder: 'Text', onChange: 'Function'};
FormControl.pdResizable = ['height', 'width']

ControlLabel.pdPropControls = {children: 'Text'}
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
