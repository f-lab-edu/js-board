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

//history.replaceState(state, title, url) 같은 역할을 하지만, 히스토리 세션에 url을 쌓지않는다. 글 작성 후 완료했을때 사용
const navigateTo = (url) => {
  history.pushState(null, null, url); //state, title(사용x), url
  renderPage(url);
};

const App = () => {
  renderPage(window.location.pathname);

  window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
  });
};

App();
