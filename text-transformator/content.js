import { createElement } from 'react';

function toggle() {
    return createElement('p', null, 'this is toggle');
}

function optionParameter() {
    return createElement('p', null, 'this is option parameter');
}

function conversion() {
    return createElement('p', null, 'this is conversion button');
}

function outputVisualization() {
    return createElement('p', null, 'this is output visualization');
}


export const Toggle = toggle();
export const OptionParameter = optionParameter();
export const Conversion = conversion();
export const OutputVisualization = outputVisualization();