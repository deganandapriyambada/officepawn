import { createElement } from 'react';
import { createToggle } from '../util-components/toggle';

export function toggle(props) {
    let availableToggle = [
        {
            key: 1,
            value: "Capitalization"
        },
        {
            key: 2,
            value: "Visualization"
        },
        {
            key: 3,
            value: "Replacement"
        },
        {
            key: 4,
            value: "Enrichment"
        },
    ]
    let allToggleElement = availableToggle.map((item) => {
        return createElement('li', { key: item.key }, createToggle(item.value, props, item.key));
    })
    return createElement('ul', { className: "toggle-container" }, allToggleElement
    );
}
