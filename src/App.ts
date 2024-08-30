import createRouter from './router';
import { Header, Footer, attachHeaderEvents } from './components/index';
import { HomePage, MyPage, NotFoundPage, ArticlePage } from './pages/index';

//라우터 관련 코드 작성
const routes = {
    '/': {
        header: () => Header(),
        footer: () => Footer(),
        attachHeaderEvents: () => attachHeaderEvents(router),
        render: () => HomePage('/', router),
    },
    '/development': () => HomePage('/development', router),
    '/design': () => HomePage('/design', router),
    '/mypage': MyPage,
    '/article/:id': (id) => ArticlePage(id, router),
    '/404': NotFoundPage,
};
const router = createRouter(routes);
router.init();
