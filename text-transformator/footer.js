import { createElement } from 'react';

function footerOptions() {
    const availableFooterOptions = [
        {
            key: 1,
            value: "About"
        },
        {
            key: 2,
            value: "Privacy"
        },
        {
            key: 3,
            value: "Documentations"
        }
    ];
    const listFooterMenu = availableFooterOptions.map((item) => {
        return createElement('li', { key: item.key }, item.value);
    })
    return createElement('ul', null, listFooterMenu);
}

function footerMenu() {
    return createElement('div', null, footerOptions());
}

export const FooterMenu = footerMenu();