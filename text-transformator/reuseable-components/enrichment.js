import { createElement } from 'react'

export function enrichmentOption(key, props) {
    return createElement('div', { key: key }, ruleInputBox('Enrich With', key, props))
}

function ruleInputBox(label, key, props) {
    const position = [
        {
            key: 1,
            text: "before"
        },
        {
            key: 2,
            text: "after"
        }
    ]
    const positionDropDown = createElement('select', {
        name: "position_" + key,
        onChange: (e) => {
            updateEnrichmentRule(props, key, "position", e.target.value);
        }
    }, position.map((item) => {
        return createElement('option', {
            key: item.key,
            value: item.text
        }, item.text)
    }));
    return createElement('span', null, positionDropDown, ruleInputText(key, props, "target"), label, ruleInputText(key, props, "value"));
}

function ruleInputText(key, props, name) {
    return createElement('input', {
        type: "text",
        name: name + "_" + key,
        onChange: (e) => {
            updateEnrichmentRule(props, key, name, e.target.value);
        }
    }, null);
}

function updateEnrichmentRule(props, key, name, value) {
    let parameter = name.split("_")[0];
    let toBeUpdatedModificationOption = { ...props.modificationOptions };
    const updatedEnrichment = toBeUpdatedModificationOption.enrichment.map((rule) => {
        if (rule.key == key) {
            return {
                key: rule.key,
                position: (parameter == "position") ? value : rule.position,
                target: (parameter == "target") ? value : rule.target,
                value: (parameter == "value") ? value : rule.value
            }
        } else {
            return {
                key: rule.key,
                position: rule.position,
                target: rule.target,
                value: rule.value
            }
        }

    });
    props.setModificationOption(
        {
            ...toBeUpdatedModificationOption,
            enrichment: updatedEnrichment
        }
    )
}