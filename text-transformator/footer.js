import { createElement } from 'react';

function footerOptions() {
    const availableFooterOptions = [
        {
            key: 1,
            value: "Copyright © Pipenpoof"
        }
    ];
    const listFooterMenu = availableFooterOptions.map((item) => {
        return createElement('li', { key: item.key }, item.value);
    })
    return createElement('ul', { className: "footer-menu" }, listFooterMenu);
}

function footerMenu() {
    return createElement('div', null, footerOptions());
}

export const FooterMenu = footerMenu();