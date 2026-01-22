import { createElement } from 'react'

export function enrichmentOption(key, props) {
    return createElement('div', { key: key }, ruleInputBox('Enrich With', key, props))
}

function ruleInputBox(label, key, props) {
    const position = [
        {
            key: 1,
            text: "Before"
        },
        {
            key: 2,
            text: "After"
        }
    ]
    const positionDropDown = createElement('select', {
        name: "position_" + key
    }, position.map((item) => {
        return createElement('option', {
            key: item.key,
            value: item.key
        }, item.text)
    }));
    return createElement('span', null, positionDropDown, ruleInputText(key, props, "target"), label, ruleInputText(key, props, "value"));
}

function ruleInputText(key, props, name) {
    return createElement('input', {
        type: "text",
        name: name + "_" + key

    }, null);
}