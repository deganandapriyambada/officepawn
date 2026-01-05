import { createElement } from 'react'

export function enrichmentOption(key) {
    return createElement('div', { key: key }, ruleInputBox('Enrich With'))
}

function ruleInputBox(label) {
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
    const positionDropDown = createElement('select', null, position.map((item) => {
        return createElement('option', { key: item.key }, item.text)
    }));
    return createElement('span', null, positionDropDown, ruleInputText(), label, ruleInputText());
}

function ruleInputText() {
    return createElement('input', { type: "text" }, null);
}