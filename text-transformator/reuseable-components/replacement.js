import { createElement } from 'react'

export function replacementOption(key, props) {
    return createElement('div', { key: key }, ruleInputBox(key, 'replace', props), ruleInputBox(key, 'with', props))
}

function ruleInputBox(key, text, props) {

    function addRule(key, value) {
        parameter = key.split("_")[0];
        index = key.split("_")[1];
        toBeModificationOptions = { ...props.modificationOptions };
        console.log(toBeModificationOptions.replacement)
    }

    const inputText = createElement('input',
        {
            type: "text",
            name: text + "_" + key,
            onChange: (e) => {
                addRule(e.target.name, e.target.value);
            }

        }, null);
    return createElement('span', null, text, inputText);
}