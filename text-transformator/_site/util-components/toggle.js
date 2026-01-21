import { createElement } from 'react'

export function createToggle(name) {
    const checkbox = createElement('input', { type: "checkbox" }, null);
    const checkboxLabel = createElement('span', null, name);
    const checkboxSlider = createElement('span', { className: "slider round" }, "\u00A0");
    return createElement('label', { className: "switch" }, checkboxLabel, checkbox, checkboxSlider)
}
