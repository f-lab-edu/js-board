import { developmentBoardData, designBoardData } from '../util/dummyData';
import '../../styles/ArticlePage.css';
import { Header, attachHeaderEvents } from '../components/Header';
import { Footer } from '../components/Footer';

export const ArticlePage = (id, router) => {
    console.log('Received ID:', id);
    const allPosts = [...developmentBoardData, ...designBoardData];
    const post = allPosts.find((post) => post.id === id);
    if (!post) {
        // id에 해당하는 게시글이 없을 경우
        return `
        ${Header()}
    <section>
        <h2>게시글을 찾을 수 없습니다.</h2>
        <p>유효하지 않은 게시글 ID입니다.</p>
    </section>${Footer()}
    `;
    }
    attachHeaderEvents(router);
    return `${Header()}
    <div class="article-container">
    <img src="${post.thumbnail}" alt="썸네일" class="article-image">

    <h3>${post.title}</h3>

    <div class="article-meta">
        <small>${post.author}</small>
    </div>

    <p>${post.description}</p>

    <div class="article-footer">
        <span>${post.date}</span>
    </div>
</div>${Footer()}`;
};
