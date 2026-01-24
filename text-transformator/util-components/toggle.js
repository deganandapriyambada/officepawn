import { createElement } from 'react'

export function createToggle(name, props, key) {
    let isChecked = false;
    if (key == 1) {
        isChecked = props.modificationOptions.status.capitalization;
    } else if (key == 2) {
        isChecked = props.modificationOptions.status.visualization;
    } else if (key == 3) {
        isChecked = props.modificationOptions.status.replacement;
    } else if (key == 4) {
        isChecked = props.modificationOptions.status.enrichment;
    }
    const checkbox = createElement('input', {
        type: "checkbox",
        name: name,
        checked: isChecked,
        onChange: (e) => {
            updateAvailableOption(props, key, e.target.checked);
        }

    }, null);
    const checkboxLabel = createElement('span', null, name);
    const checkboxSlider = createElement('span', { className: "slider round" }, "\u00A0");
    return createElement('label', { className: "switch" }, checkboxLabel, checkbox, checkboxSlider)
}


function updateAvailableOption(props, key, value) {
    let toBeUpdatedModificationOption = { ...props.modificationOptions.status };
    if (key == 1) {
        toBeUpdatedModificationOption.capitalization = value;
    } else if (key == 2) {
        toBeUpdatedModificationOption.visualization = value;
    } else if (key == 3) {
        toBeUpdatedModificationOption.replacement = value;
    } else if (key == 4) {
        toBeUpdatedModificationOption.enrichment = value;
    }
    props.setModificationOption((prev) => {
        return {
            ...prev,
            status: toBeUpdatedModificationOption
        }
    })
}