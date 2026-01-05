import { createElement } from 'react'

export function replacementOption(key) {
    return createElement('div', { key: key }, ruleInputBox('Replace'), ruleInputBox('With'))
}

function ruleInputBox(text) {
    const inputText = createElement('input', { type: "text" }, null);
    return createElement('span', null, text, inputText);
}