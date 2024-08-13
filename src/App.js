import createRouter from './router.js';

//라우터 관련 코드 작성
const routes = {
  '/': () => {
    console.log('메인 화면입니다.');
  },
  '/mypage': () => {
    console.log('마이페이지 입니다.');
  },
  '/404': () => {
    console.log('찾을 수 없는 페이지 입니다.');
  },
};

const router = createRouter(routes);

const render = (content) => {
  const container = document.getElementById('app');
  container.innerHTML = content;
};

const renderPage = (path) => {
  const viewFunction = router.checkRoutes(path);
  render(viewFunction());
};

const App = () => {
  document.addEventListener('DOMContentLoaded', () => {
    renderPage(window.location.pathname);
  });

  window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
  });
};

App();
