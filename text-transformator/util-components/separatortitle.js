import { createElement } from 'react'

export function createSeparatorTitle(title) {
    return createElement('div', { className: "separator-title" }, title)
}