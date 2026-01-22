import { createElement, useState, useEffect } from 'react';

//components
import { createToggle } from './util-components/toggle';
import { createSeparatorTitle } from './util-components/separatortitle';
import { createIcon } from './util-components/faicon';
import { replacementOption } from './reuseable-components/replacement';
import { enrichmentOption } from "./reuseable-components/enrichment";

// handler
import { transformText } from './handlers/transform';

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


function enrichmentOptions() {

    const [enrichRules, setEnrichRule] = useState([
        {
            key: 1
        }
    ]);

    function addEnrichRule() {
        setEnrichRule(
            (prev) => {
                return [...prev, {
                    key: 2
                }]
            }
        )
    }

    const characterEnrichmentContainerTitle = createElement('div', null, 'Character Enrichment');
    const enrichmentRules = enrichRules.map((item) => {
        return enrichmentOption(item.key)
    });
    const buttonAdd = createElement('button',
        {
            type: "submit",
            onClick: (e) => {
                addEnrichRule();
            }
        }, "Add More Rule");
    return createElement('div', null, characterEnrichmentContainerTitle, enrichmentRules, buttonAdd);

}



function optionParameter() {
    return createElement('div', null,
        inputType(),
        //inputText(),
        createSeparatorTitle('Transformation Parameter'),
        createElement('div', { className: "optionParameterContainer" },
            //visualOption(),
            //characterReplacementOptions(),
            //enrichmentOptions(),
            //capitalizationSelectBox()
        )

    );
}

function conversion() {
    return createElement('div', null, inputButton());
}

// useState

function characterReplacementOptions() {
    [rules, setRules] = useState([
        {
            key: 1,
            isActive: false
        }
    ]);

    function addRules() {
        setRules((rules) => {
            return [...rules, {
                key: 2,
                isActive: false
            }];
        });
    }

    const replacementRuleList = rules.map((item) => {
        return replacementOption(item.key);
    })
    const buttonAdd = createElement('button',
        {
            type: "submit",
            onClick: (e) => {
                addRules();
            }
        }, "Add More Rule");
    const characterReplacementContainerTitle = createElement('div', null, 'Character replacement');
    return createElement('div', null, characterReplacementContainerTitle, replacementRuleList, buttonAdd);
}



function visualOption(props) {

    function checkVisualOption(val, isChecked) {
        const toBeModificationOptions = { ...props.modificationOptions };
        if (val == 1) {
            props.modificationOptions.visualization.bold = isChecked;
        } else if (val == 2) {
            props.modificationOptions.visualization.italic = isChecked;
        } else if (val == 3) {
            props.modificationOptions.visualization.underline = isChecked;
        } else if (val == 4) {
            props.modificationOptions.visualization.strikethrough = isChecked;
        } else if (val == 5) {
            props.modificationOptions.visualization.superscript = isChecked;
        } else if (val == 6) {
            props.modificationOptions.visualization.subscript = isChecked;
        }
        props.setModificationOption(toBeModificationOptions);
        console.log(props.modificationOptions);
    }

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
        return createElement('li', { key: item.key }, createElement('input',
            {
                type: "checkbox",
                name: "visual-option",
                value: item.key,
                onChange: (e) => {
                    checkVisualOption(e.target.value, e.target.checked)
                }
            },
            null),
            createIcon(item.icon)
        );
    });
    const visualOptionsContainer = createElement('ul', { className: "horizontal-list" }, visualOptions);
    const visualOptionsContainerTitle = createElement('div', null, 'visual options')
    return createElement('div', null, visualOptionsContainerTitle, visualOptionsContainer);
}


function inputText(props) {

    function getInput(props) {
        return props.input;
    }

    function updateInput(props, newInputValue) {
        props.setInput(newInputValue);
    }

    return createElement('textarea',
        {
            className: "inputArea",
            rows: 5,
            placeholder: getInput(props),
            onChange: (e) => {
                updateInput(props, e.target.value)
            }
        }, null);
}


function capitalizationSelectBox(props) {

    function getCaptilizationSelectedOption(props) {
        return props.modificationOptions;
    }

    function setCaptilization(selectedCapitalization, props) {
        props.setModificationOption((prev) => {
            return { ...prev, capitalization: selectedCapitalization }
        })

    }

    const availableCapitalizationOptions = [
        {
            key: 1,
            value: "UPPERCASE"
        },
        {
            key: 2,
            value: "lowcase"
        },
        {
            key: 3,
            value: "Perfect Case"
        },
        {
            key: 4,
            value: "Sentence case"
        }
    ];
    const capitalizationOptions = availableCapitalizationOptions.map((item) => {
        return createElement('option', { value: item.key, key: item.key }, item.value)
    })
    const captilizationSelectElement = createElement('select',
        {
            defaultValue: getCaptilizationSelectedOption(props),
            onChange: (e) => setCaptilization(e.target.value, props)

        }, capitalizationOptions);
    const capitalizationContainerTitle = createElement('div', null, 'Capitalization');
    const capitalizationContainer = createElement('div', null, capitalizationContainerTitle, captilizationSelectElement)
    return capitalizationContainer;
}

function inputButton(props) {

    function doTransform(props) {
        let transformedText = transformText(props.input, props);
        props.setOutput(transformedText);
    }

    return createElement(
        'button',
        {
            type: "button",
            onClick: (e) => {
                doTransform(props)
            }
        },
        "Transform!")
}


function outputVisualization() {

    const listOfModifications = {
        capitalization: 1,
        visualization: {
            bold: false,
            italic: false,
            underline: false,
            strikethrough: false,
            superscript: false,
            subscript: false
        },
        replacement: [
            {
                key: 1,
                target: null,
                value: null
            }
        ],
        enrichment: [
            {
                key: 1,
                position: null,
                target: null,
                value: null
            }
        ]
    }

    const [input, setInput] = useState('Please input any text..!');
    const [output, setOutput] = useState('Output')
    const [modificationOptions, setModificationOption] = useState(listOfModifications);

    return createElement('div', { className: "visualizationOutput" },
        createSeparatorTitle('Input Text'),
        createElement(inputText, { input, setInput }),
        createSeparatorTitle('Modification Options'),
        createElement('div', { className: 'optionParameterContainer' },
            createElement(capitalizationSelectBox, { modificationOptions, setModificationOption }),
            createElement(visualOption, { modificationOptions, setModificationOption }),
            createElement(characterReplacementOptions, { modificationOptions, setModificationOption }),
            createElement(enrichmentOptions, { modificationOptions, setModificationOption })
        ),
        createSeparatorTitle('Action'),
        createElement(inputButton, { output, setOutput, input, modificationOptions }),
        createElement('div', null,
            createSeparatorTitle('Transformed Text'),
            output
        )
    );
}

export const Toggle = toggle();
export const OptionParameter = optionParameter();
export const Conversion = conversion();
export const OutputVisualization = outputVisualization;