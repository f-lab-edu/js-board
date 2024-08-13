export default function createRouter(routes) {
  const checkRoutes = (path) => {
    const route = routes[path] || routes['/404'];
    return route;
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
