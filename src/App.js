import createRouter from './router.js';
import { Header } from './components/Header.js';

//라우터 관련 코드 작성
const routes = {
  '/': () => {
    console.log('메인 화면입니다.');
    return '<h2>메인 화면</h2>';
  },
  '/mypage': () => {
    console.log('마이페이지 입니다.');
    return '<h2>마이페이지</h2>';
  },
  '/404': () => {
    console.log('찾을 수 없는 페이지 입니다.');
    return '<h2>404 - 페이지를 찾을 수 없습니다.</h2>';
  },
};
const router = createRouter(routes);

const render = (content) => {
  const container = document.getElementById('app');
  container.innerHTML = content;
};

const renderPage = (path) => {
  const viewFunction = router.checkRoutes(path);
  const isDefinedRoute = routes.hasOwnProperty(path);

  const content = isDefinedRoute
    ? `
    ${Header()}
    ${viewFunction()}
    `
    : viewFunction();
  render(content);
};

const App = () => {
  document.addEventListener('DOMContentLoaded', () => {
    renderPage(window.location.pathname);

    document.body.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        router.navigateTo(e.target.href);
      }
    });
  });

  window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
  });
};

App();
