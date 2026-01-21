import { createElement } from 'react';

function headerMenu() {
    return createElement(
        'div', { className: "header-menu two-col-flex" },
        title(),
        titleDesc()
    );
}

function title() {
    return createElement('div', { className: "header-title" }, 'Text Transformator')
}

function titleDesc() {
    return createElement('div', { className: "header-title-desc" }, 'Helping you to modify your text')
}

export const HeaderMenu = headerMenu();