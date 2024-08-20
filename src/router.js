export default function createRouter(routes) {
    const checkRoutes = (path) => {
        for (const route in routes) {
            const routeRegex = new RegExp(`^${route.replace(/:\w+/g, '(\\w+)')}$`);
            const match = path.match(routeRegex);
            if (match) {
                const param = match[1];
                return () => routes[route](param);
            }
        }
        return routes['/404'];
    };

    //history.replaceState(state, title, url) 같은 역할을 하지만, 히스토리 세션에 url을 쌓지않는다. 글 작성 후 완료했을때 사용
    const navigateTo = (url) => {
        if (window.location.pathname !== url) {
            history.pushState(null, null, url);
            window.dispatchEvent(new Event('popstate'));
        }
    };

    return {
        checkRoutes,
        navigateTo,
    };
}
