import { createElement } from 'react'

export function createIcon(name) {
    return createElement('span', { className: "fa fa-" + name }, null)
}