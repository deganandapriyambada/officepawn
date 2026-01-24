import { createElement, useState, useEffect } from 'react';

import { createSeparatorTitle } from './util-components/separatortitle';
import { createIcon } from './util-components/faicon';
import { replacementOption } from './reuseable-components/replacement';
import { enrichmentOption } from "./reuseable-components/enrichment";
import { toggle } from './reuseable-components/option';

// handler
import { transformText } from './handlers/transform';


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


function enrichmentOptions(props) {

    function addEnrichRule() {
        props.setModificationOption(
            (prev) => {
                return {
                    ...prev,
                    enrichment: [
                        ...prev.enrichment,
                        {
                            key: prev.enrichment.length + 1,
                            position: null,
                            target: null,
                            value: null
                        }
                    ]
                }
            }
        )
    }

    function removeRules(key) {
        console.log(key);
        props.setModificationOption(
            (prev) => {
                return {
                    ...prev,
                    enrichment: prev.enrichment.filter((rule, index) => rule.key !== key)
                }
            }
        );
    }

    function buttonRemove(key) {
        return createElement('button',
            {
                type: "submit",
                className: "red-button",
                onClick: (e) => {
                    removeRules(key);
                }
            }, createIcon('minus-circle'), "Rule");
    }


    const characterEnrichmentContainerTitle = createElement('div', { className: "section-title" }, 'Enrichment');
    const enrichmentRules = props.modificationOptions.enrichment.map((item) => {
        return createElement('div', { key: item.key }, enrichmentOption(item.key, props), buttonRemove(item.key))
    });
    const buttonAdd = createElement('button',
        {
            type: "submit",
            className: "green-button",
            onClick: (e) => {
                addEnrichRule();
            }
        }, createIcon('plus-circle'), "Rule");
    return createElement('div', { className: `enrichment-container ${(props.modificationOptions.status.enrichment) ? "shown" : "hidden"}` }, characterEnrichmentContainerTitle, enrichmentRules, buttonAdd);

}

function characterReplacementOptions(props) {

    function addRules() {
        props.setModificationOption((rules) => {
            return {
                ...rules, replacement: [...rules.replacement, {
                    key: rules.replacement.length + 1,
                    target: null,
                    value: null
                }]
            };
        });
    }



    function removeRules(key) {
        props.setModificationOption((rules) => {

            return {
                ...rules,
                replacement: rules.replacement.filter((rule, index) =>
                    rule.key !== key
                )
            }

        }
        );
    }

    function buttonRemove(key) {

        return createElement('button',
            {
                type: "submit",
                className: "red-button",
                onClick: (e) => {
                    removeRules(key);
                }
            }, createIcon('minus-circle'), "Rule");
    }

    const replacementRuleList = props.modificationOptions.replacement.map((item) => {
        return createElement('div', { key: item.key }, replacementOption(item.key, props), buttonRemove(item.key));
    })
    const buttonAdd = createElement('button',
        {
            type: "submit",
            className: "green-button",
            onClick: (e) => {
                addRules();
            }
        }, createIcon('plus-circle'), "Rule");
    const characterReplacementContainerTitle = createElement('div', { className: "section-title" }, 'Character replacement');
    return createElement('div', { className: `replacement-container ${(props.modificationOptions.status.replacement) ? "shown" : "hidden"}` }, characterReplacementContainerTitle, replacementRuleList, buttonAdd);
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
    const visualOptionsContainerTitle = createElement('div', { className: "section-title" }, 'Visualization')
    return createElement('div', { className: `visualization-container ${(props.modificationOptions.status.visualization) ? "shown" : "hidden"}` }, visualOptionsContainerTitle, visualOptionsContainer);
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
            rows: 1,
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
    const capitalizationContainerTitle = createElement('div', { className: "section-title" }, 'Capitalization');
    const capitalizationContainer = createElement('div', { className: `capitalization-container ${(props.modificationOptions.status.capitalization) ? "shown" : "hidden"}` }, capitalizationContainerTitle, captilizationSelectElement)
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
            className: "purple-button",
            onClick: (e) => {
                doTransform(props)
            }
        },
        "Transform Text! ")
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
                position: 'before',
                target: null,
                value: null
            }
        ],
        status: {
            capitalization: true,
            visualization: true,
            replacement: true,
            enrichment: true
        }


    }
    const defaultText = "Please input any text..!";
    const [input, setInput] = useState(defaultText);
    const [output, setOutput] = useState(defaultText)
    const [modificationOptions, setModificationOption] = useState(listOfModifications);

    return createElement('div', { className: "visualizationOutput" },
        createElement(toggle, { modificationOptions, setModificationOption }),
        createSeparatorTitle('Input Text'),
        createElement('div', { className: "input-container" }, createElement(inputText, { input, setInput })),
        createSeparatorTitle('Modification Options'),
        createElement('div', { className: 'optionParameterContainer' },
            createElement(capitalizationSelectBox, { modificationOptions, setModificationOption }),
            createElement(visualOption, { modificationOptions, setModificationOption }),
            createElement(characterReplacementOptions, { modificationOptions, setModificationOption }),
            createElement(enrichmentOptions, { modificationOptions, setModificationOption })
        ),
        createSeparatorTitle('Action'),
        createElement('div', { className: "button-container" }, createElement(inputButton, { output, setOutput, input, modificationOptions })),
        createSeparatorTitle('Transformed Text'),
        createElement('div', { className: 'output-container' },

            createElement('div', { className: 'output-box' }, output)
        )
    );
}

export const OutputVisualization = outputVisualization;