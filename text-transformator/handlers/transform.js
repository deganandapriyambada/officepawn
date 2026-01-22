import { createElement } from "react";

export function transformText(value, props) {
    let toBeTransformed = value;
    if (typeof props.modificationOptions !== null || typeof props.modificationOptions !== undefined) {
        // text capitalization transformation
        if (typeof props.modificationOptions.capitalization !== null || typeof props.modificationOptions.capitalization !== "undefined") {
            toBeTransformed = capitalize(toBeTransformed, props.modificationOptions.capitalization);
        }
    }

    if (typeof props.modificationOptions !== null || typeof props.modificationOptions !== undefined) {
        if (typeof props.modificationOptions.capitalization !== null || typeof props.modificationOptions.visualization !== "undefined") {
            toBeTransformed = visualFormat(toBeTransformed, props.modificationOptions.visualization)
        }
    }

    return toBeTransformed;
}

function capitalize(input, type) {

    function toPerfectCase(text) {
        splittedText = text.split(" ");
        let i = 0;
        let transformedText = "";
        splittedText.map((word) => {
            const stringWord = String(word);
            transformedText += stringWord.charAt(0).toUpperCase() + stringWord.slice(1) + " ";
        });
        return transformedText;
    }

    function toSentenceCase(text) {
        splittedText = text.split(" ");
        let i = 0;
        let transformedText = "";
        splittedText.map((word) => {
            i++;
            const stringWord = String(word);
            if (i == 1) {
                transformedText += stringWord.charAt(0).toUpperCase() + stringWord.slice(1) + " ";
            } else {
                transformedText += stringWord + " ";
            }
        });
        return transformedText;
    }

    let output = String(input);
    if (type == 1) {
        output = input.toUpperCase();
    } else if (type == 2) {
        output = input.toLowerCase();
    } else if (type == 3) {
        output = toPerfectCase(output);
    } else if (type == 4) {
        output = toSentenceCase(output);
    } else {
        output = 'command not found'
    }
    return output;
}

function visualFormat(input, options) {
    console.log(options);
    let output = input;
    if (options.bold) {
        output = createElement('b', null, output)
    }
    if (options.italic) {
        output = createElement('i', null, output)
    }
    if (options.underline) {
        output = createElement('u', null, output)
    }
    if (options.strikethrough) {
        output = createElement('s', null, output)
    }
    if (options.superscript) {
        output = createElement('sup', null, output)
    }
    if (options.subscript) {
        output = createElement('sub', null, output)
    }
    return output;
}