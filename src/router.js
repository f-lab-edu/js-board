export default function createRouter(routes) {
    const checkRoutes = (path) => {
        for (const route in routes) {
            const routeRegex = new RegExp(`^${route.replace(/:\w+/g, '(\\w+)')}$`);
            const match = path.match(routeRegex);
            if (match) {
                const param = match[1];
                const routeConfig = routes[route];
                if (typeof routeConfig === 'function') {
                    return () => routeConfig(param);
                } else {
                    return () => routeConfig.render(param);
                }
            }
        }
        return routes['/404'];
    };

    const navigateTo = (url) => {
        if (window.location.pathname !== url) {
            history.pushState(null, null, url);
            window.dispatchEvent(new Event('popstate'));
        }
    };

    const renderPage = () => {
        const path = window.location.pathname;
        const viewFunction = checkRoutes(path);
        const isDefinedRoute = routes.hasOwnProperty(path);

        const content = isDefinedRoute
            ? `
            ${routes['/'].header()}
            ${viewFunction()}
            ${routes['/'].footer()}
        `
            : viewFunction();

        const container = document.getElementById('app');
        container.innerHTML = content;
        routes['/'].attachHeaderEvents();
    };

    const init = () => {
        document.addEventListener('DOMContentLoaded', () => {
            renderPage();

            document.body.addEventListener('click', (e) => {
                if (e.target.matches('[data-link]')) {
                    e.preventDefault();
                    navigateTo(e.target.href);
                }
            });
        });

        window.addEventListener('popstate', renderPage);
    };

    return {
        init,
        navigateTo,
    };
}
