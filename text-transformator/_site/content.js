import { createElement } from 'react';
import { createToggle } from './util-components/toggle';
import { createSeparatorTitle } from './util-components/separatortitle';
import { createIcon } from './util-components/faicon';
import { replacementOption } from './reuseable-components/replacement';
import { enrichmentOption } from "./reuseable-components/enrichment";
// handler

import { }

function toggle() {
        return createElement('ul', { className: "toggle-container" },
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
            value: "Enrichment"
        },
        {
            key: 4,
            value: "Capitalization"
        },
    ]
    let allToggleElement = [];
    for (var i = 0; i < availableToggle.length; i++) {
        allToggleElement.push(createElement('li', { key: availableToggle[i].key }, createToggle(availableToggle[i].value)))
    }
    return allToggleElement
}

function inputType() {
    let inputType = [
        {
            key: 1,
            value: "Sentence",
            icon: "font"
        },
        {
            key: 2,
            value: "Paragraph",
            icon: "align-justify"
        }
    ]
    const listInputType = inputType.map((item) => {
        return createElement('li', { key: item.key }, item.value, createIcon(item.icon))
    });
    return createElement('ul', { className: "input-type-container" }, listInputType);
}

function inputText() {
    return createElement('textarea', { className: "inputArea", rows: 5 }, null);
}

function inputButton() {
    return createElement('button', { type: "submit" }, "Transform")
}

function visualOption() {
    const availableVisualOptions = [
        {
            key: 1,
            value: "Bold",
            icon: "bold"
        },
        {
            key: 2,
            value: "Italic",
            icon: "italic"
        },
        {
            key: 3,
            value: "Underline",
            icon: "underline"
        },
        {
            key: 4,
            value: "Strikethrough",
            icon: "strikethrough"
        },
        {
            key: 5,
            value: "Superscript",
            icon: "superscript"
        },
        {
            key: 6,
            value: "Subscript",
            icon: "subscript"
        }
    ]
    const visualOptions = availableVisualOptions.map((item) => {
        return createElement('li', { key: item.key }, createIcon(item.icon))
    });
    const visualOptionsContainer = createElement('ul', { className: "horizontal-list" }, visualOptions);
    const visualOptionsContainerTitle = createElement('div', null, 'visual options')
    return createElement('div', null, visualOptionsContainerTitle, visualOptionsContainer);
}


function characterReplacementOptions() {
    let rules = [{
        key: 1,
        isActive: false
    }];
    const replacementRuleList = rules.map((item) => {
        return replacementOption(item.key);
    })
    const buttonAdd = createElement('button', { type: "submit" }, "Add More Rule");
    const characterReplacementContainerTitle = createElement('div', null, 'Character replacement');
    return createElement('div', null, characterReplacementContainerTitle, replacementRuleList, buttonAdd);
}

function enrichmentOptions() {
    let availableEnrichmentRules = [
        {
            key: 1
        }
    ]
    const characterEnrichmentContainerTitle = createElement('div', null, 'Character Enrichment');
    const enrichmentRules = availableEnrichmentRules.map((item) => {
        return enrichmentOption(item.key)
    });
    const buttonAdd = createElement('button', { type: "submit" }, "Add More Rule");
    return createElement('div', null, characterEnrichmentContainerTitle, enrichmentRules, buttonAdd);

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
    const captilizationSelectElement = createElement('select', null, capitalizationOptions);
    const capitalizationContainerTitle = createElement('div', null, 'Capitalization');
    const capitalizationContainer = createElement('div', null, capitalizationContainerTitle, captilizationSelectElement)
    return capitalizationContainer;
}

function optionParameter() {
    return createElement('div', null,
        inputType(),
        inputText(),
        createSeparatorTitle('Transformation Parameter'),
        createElement('div', { className: "optionParameterContainer" },
            visualOption(),
            characterReplacementOptions(),
            enrichmentOptions(),
            capitalizationSelectBox()
        )

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