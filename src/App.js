//라우터 관련 코드 작성
const routes = {
  '/': () => {
    console.log('메인 화면입니다.');
  },
  '/mypage': () => {
    console.log('마이페이지 입니다.');
  },
};

const renderPage = (path) => {
  const pageMatchs = routes[path];
  if (pageMatchs) {
    pageMatchs();
  } else {
    console.log('페이지를 찾을 수 없습니다.');
  }
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  renderPage(url);
};

const App = () => {
  renderPage(window.location.pathname);

  window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
  });

  // 예시: 버튼 클릭으로 페이지 이동 (테스트용)
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
};

App();
