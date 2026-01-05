import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

// element
import { HeaderMenu } from './header';
import { Toggle, OptionParameter, Conversion, OutputVisualization } from './content';
import { FooterMenu } from './footer';
import { createSeparatorTitle } from './util-components/separatortitle';

document.body.innerHTML = '<div id="main-container"></div>'

function Layout() {
    return createElement(
        'div',
        null,
        createElement('div', { id: "header-container" }, HeaderMenu),
        createElement(
            'div',
            { id: "content-container" },
            createSeparatorTitle('Options'),
            Toggle,
            createSeparatorTitle('Input Text'),
            OptionParameter, Conversion,
            createSeparatorTitle('Transformed Text'),
            OutputVisualization
        ),
        createElement('div', { id: "footer-container" }, FooterMenu)
    )
}

const mainContainer = createRoot(document.getElementById("main-container"));
mainContainer.render(Layout())
