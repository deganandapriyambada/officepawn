import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

// element
import { HeaderMenu } from './header';
import { OutputVisualization } from './content';
import { FooterMenu } from './footer';

document.body.innerHTML = '<div id="main-container"></div>'

function Layout() {
    return createElement(
        'div',
        null,
        createElement('div', { id: "header-container" }, HeaderMenu),
        createElement(
            'div',
            { id: "content-container" },
            createElement(OutputVisualization)
        ),
        createElement('div', { id: "footer-container" }, FooterMenu)
    )
}

const mainContainer = createRoot(document.getElementById("main-container"));
mainContainer.render(Layout())
