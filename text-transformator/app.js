import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

// element
import { HeaderMenu } from './header';
import { OutputVisualization } from './content';
import { FooterMenu } from './footer';

function Layout() {
    return createElement(
        'div',
        {
            id: "main-container"
        },
        createElement('div', { id: "header-container" }, HeaderMenu),
        createElement(
            'div',
            { id: "content-container" },
            createElement(OutputVisualization)
        ),
        createElement('div', { id: "footer-container" }, FooterMenu)
    )
}

const mainContainer = createRoot(document.getElementById("text-transformator"));
mainContainer.render(Layout())
