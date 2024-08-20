import createRouter from './router.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { HomePage } from './pages/HomePage.js';
import { MyPage } from './pages/MyPage.js';
import { NotFoundPage } from './pages/NotFoundPage.js';
import { ArticlePage } from './pages/ArticlePage.js';

//라우터 관련 코드 작성
const routes = {
    '/': () => HomePage('/'),
    '/development': () => HomePage('/development'),
    '/design': () => HomePage('/design'),
    '/mypage': MyPage,
    '/article/:id': (id) => ArticlePage(id),
    '/404': NotFoundPage,
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
    ${Footer()}`
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
