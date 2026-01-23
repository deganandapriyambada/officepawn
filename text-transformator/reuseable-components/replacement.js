import { createElement } from 'react'

export function replacementOption(key, props) {
    return createElement('div', { key: key }, ruleInputBox(key, 'replace', props), ruleInputBox(key, 'with', props))
}

function ruleInputBox(key, text, props) {

    function updateRule(key, value) {
        parameter = key.split("_")[0];
        index = key.split("_")[1];
        toBeModificationOptions = { ...props.modificationOptions };
        console.log(toBeModificationOptions)
        const updatedReplacement = toBeModificationOptions.replacement.map((rule) => {
            if (rule.key == index) {
                return {
                    key: index,
                    target: (parameter == "replace" ? value : rule.target),
                    value: (parameter == "with" ? value : rule.value)
                };
            } else {
                console.log("somthing wrong!!!")
                console.log(rule);
                return {
                    key: rule.key,
                    target: rule.target,
                    value: rule.value
                };
            }
        })
        toBeModificationOptions.replacement = updatedReplacement;
        props.setModificationOption(toBeModificationOptions);
    }

    const inputText = createElement('input',
        {
            type: "text",
            name: text + "_" + key,
            onChange: (e) => {
                updateRule(e.target.name, e.target.value);
            }

        }, null);
    return createElement('span', null, text, inputText);
}