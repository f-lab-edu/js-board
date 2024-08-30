type Component = (props?: any) => string;
// type Route = Record<string, Component | Route>;
// type ComponentMap = Record<string | 'render', Component>;
type HomeComponent = {
    header: Component;
    footer: Component;
    render: Component;
    attachHeaderEvents: () => void;
};
type Route = {
    [key: string]: HomeComponent | Component;
};

export default function createRouter(routes: Route) {
    const checkRoutes = (path: string): Component => {
        for (const route in routes) {
            const routeRegex = new RegExp(`^${route.replace(/:\w+/g, '(\\w+)')}$`);
            const match = path.match(routeRegex);
            if (match) {
                const param = match[1];
                const routeConfig = routes[route];
                if (typeof routeConfig === 'function') {
                    return () => routeConfig(param);
                } else {
                    //HomeComponent
                    return () => routeConfig.render(param);
                }
            }
        }
        return routes['/404'] as Component;
    };

    const navigateTo = (url: string) => {
        if (window.location.pathname !== url) {
            history.pushState(null, '', url);
            window.dispatchEvent(new Event('popstate'));
        }
    };

    const renderPage = () => {
        const path = window.location.pathname;
        const viewFunction = checkRoutes(path);
        const isDefinedRoute = routes.hasOwnProperty(path);
        const Home = routes['/'] as HomeComponent;

        const content = isDefinedRoute
            ? `
            ${Home.header()}
            ${viewFunction()}
            ${Home.footer()}
        `
            : viewFunction();

        const container = document.getElementById('app');
        container!.innerHTML = content;
        Home.attachHeaderEvents();
    };
    //const isAnchor = (el: HTMLElement): el is HTMLAnchorElement => Boolean(el.matches('[data-link]'));

    const init = () => {
        document.addEventListener('DOMContentLoaded', () => {
            renderPage();

            document.body.addEventListener('click', (e) => {
                if ((e.target as HTMLElement).matches('[data-link]')) {
                    e.preventDefault();
                    navigateTo((e.target as HTMLAnchorElement).href);
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
