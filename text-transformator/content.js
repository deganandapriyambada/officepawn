import { createElement } from 'react';

function toggle() {
    return createElement('ul', { className: "toggle-container two-col-flex" },
        toggleList()
    );
}

function toggleList() {
    let availableToggle = [
        {
            key: 1,
            value: "Visual modification"
        },
        {
            key: 2,
            value: "Character replacement"
        },
        {
            key: 3,
            value: "Capitalization"
        },
        {
            key: 4,
            value: "Enrichment"
        },
    ]
    let allToggleElement = [];
    for (var i = 0; i < availableToggle.length; i++) {
        allToggleElement.push(createElement('li', { key: availableToggle[i].key }, availableToggle[i].value))
    }
    return allToggleElement
}

function inputType() {
    let inputType = [
        {
            key: 1,
            value: "Sentence"
        },
        {
            key: 2,
            value: "Paragraph"
        }
    ]
    const listInputType = inputType.map((item) => {
        return createElement('li', { key: item.key }, item.value)
    });
    return createElement('ul', null, listInputType);
}

function inputText() {
    return createElement('input', { type: "text" }, null)
}

function inputButton() {
    return createElement('button', { type: "submit" }, "Transform")
}

function visualOption() {
    const availableVisualOptions = [
        {
            key: 1,
            value: "Bold"
        },
        {
            key: 2,
            value: "Italic"
        },
        {
            key: 3,
            value: "Underline"
        }
    ]
    const visualOptions = availableVisualOptions.map((item) => {
        return createElement('li', { key: item.key }, item.value)
    });
    const visualOptionsContainer = createElement('ul', null, visualOptions);
    const visualOptionsContainerTitle = createElement('div', null, 'visual options')
    return createElement('div', null, visualOptionsContainerTitle, visualOptionsContainer);
}


function characterReplacementOptions() {
    const characterReplacementContainerTitle = createElement('div', null, 'character replacement')
    return createElement('div', null, characterReplacementContainerTitle);
}

function enrichmentOptions() {
    let availableEnrichmentRules = [
        {
            key: 1,
        }
    ]

    const enrichmentRules = availableEnrichmentRules.map((item) => {
        return createElement('li', { key: item.key }, 'rule');
    })
    return createElement('ul', null, enrichmentRules)

}

function capitalizationSelectBox() {
    const availableCapitalizationOptions = [
        {
            key: 1,
            value: "Perfect Case"
        },
        {
            key: 2,
            value: "CamelCase"
        },
        {
            key: 3,
            value: "kebab-case"
        },
        {
            key: 4,
            value: "Sentence case"
        }
    ];
    const capitalizationOptions = availableCapitalizationOptions.map((item) => {
        return createElement('option', { value: item.key, key: item.key }, item.value)
    })

    return createElement('select', null, capitalizationOptions);
}

function optionParameter() {
    return createElement('div', null,
        inputType(),
        inputText(),
        visualOption(),
        characterReplacementOptions(),
        enrichmentOptions(),
        capitalizationSelectBox()
    );
}

function conversion() {
    return createElement('div', null, inputButton());
}

function outputVisualization() {
    return createElement('div', null, 'this is output visualization');
}

export const Toggle = toggle();
export const OptionParameter = optionParameter();
export const Conversion = conversion();
export const OutputVisualization = outputVisualization();