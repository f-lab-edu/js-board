import createRouter from './router.js';
import { Header, attachHeaderEvents } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { HomePage } from './pages/HomePage.js';
import { MyPage } from './pages/MyPage.js';
import { NotFoundPage } from './pages/NotFoundPage.js';
import { ArticlePage } from './pages/ArticlePage.js';

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
