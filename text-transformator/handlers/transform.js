export function transformText(value, props) {
    let toBeTransformed = value;
    if (typeof props.modificationOptions !== null || typeof props.modificationOptions !== undefined) {
        // text capitalization transformation
        if (typeof props.modificationOptions.capitalization !== null || typeof props.modificationOptions.capitalization !== "undefined") {
            toBeTransformed = capitalize(toBeTransformed, props.modificationOptions.capitalization);
        }
    }
    return toBeTransformed;
}

function capitalize(input, type) {
    function toPerfectCase() {
        return 'dega';
    }

    function toSentenceCase() {
        return 'nanda';
    }
    let output = String(input);
    if (type == 1) {
        output = input.toUpperCase();
    } else if (type == 2) {
        output = input.toLowerCase();
    } else {
        output = 'WHATS???'
    }
    return output;
}

function textformat(input) {
    return input;
}