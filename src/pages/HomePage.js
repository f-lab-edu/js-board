import '../../styles/HomePage.css';
import { Layout } from '../components/Layout';
import { Tabs } from '../components/Tabs';
import { developmentBoardData, designBoardData, popularPosts, recentComments } from '../util/dummyData';

export const HomePage = (activeTab, router) => {
    const getPosts = () => {
        if (activeTab === '/development') {
            return developmentBoardData;
        } else if (activeTab === '/design') {
            return designBoardData;
        } else {
            return [...developmentBoardData, ...designBoardData];
        }
    };

    const posts = getPosts();
    const postList = posts
        .map(
            (post) => `
      <div class="post" data-id="${post.id}">
      <div>
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <small>작성자: ${post.author} | 작성일 : ${post.date}</small>
      </div>
      <div class="imgDiv">
      <img src="${post.thumbnail}" alt="썸네일"/>
      </div>
      </div>
    `
        )
        .join(' ');

    const messageMap = {
        '/': '전체 게시글이 여기에 표시됩니다.',
        '/development': '개발 관련 게시글이 여기에 표시됩니다.',
    };

    const message = messageMap[activeTab] ?? '디자인 관련 게시글이 여기에 표시됩니다.';

    const popularPostList = popularPosts
        .map(
            (post) => `
      <div class="popularPost" data-id="${post.id}">
        <p>${post.title}</p>
        <small>${post.author}</small>
      </div>
    `
        )
        .join(' ');

    const recentCommentList = recentComments
        .map(
            (comment) => `
      <div class="recentComment" data-id="${comment.postId}">
        <div class="commentProfile">
          <img src="${comment.profileImage}" alt="${comment.nickname}" />
          <p>${comment.nickname}</p>
        </div>
        <div class="commentContent">
          <p>${comment.content}</p>
          <small>${comment.postTitle}</small>
        </div>
      </div>
    `
        )
        .join(' ');

    const leftContent = `
      ${Tabs(activeTab)}
      <div class="homeContent">
        <p>${message}</p>
        ${postList}
      </div>
    `;

    const rightContent = `
      <div class="homeSidebar">
        <p class="sideSubTitle">인기있는 글</p>
        <div class="popularPosts">
          ${popularPostList}
        </div>
        <p class="sideSubTitle">최근 댓글</p>
        <div class="recentComments">
          ${recentCommentList}
        </div>
      </div>
    `;

    const content = `
      <div class="homeContainer">
      <div>
      <h2>메인 페이지</h2>
      ${Layout(leftContent, rightContent)}
      </div>
      </div>
    `;

    const moveArticle = (postId) => {
        router.navigateTo(`/article/${postId}`);
    };

    setTimeout(() => {
        document.querySelectorAll('.post').forEach((postElement, index) => {
            const postId = posts[index].id;
            postElement.addEventListener('click', () => {
                moveArticle(postId);
            });
        });

        document.querySelectorAll('.popularPost').forEach((postElement) => {
            const postId = postElement.getAttribute('data-id');
            postElement.addEventListener('click', () => {
                moveArticle(postId);
            });
        });

        document.querySelectorAll('.recentComment').forEach((commentElement) => {
            const postId = commentElement.getAttribute('data-id');
            commentElement.addEventListener('click', () => {
                moveArticle(postId);
            });
        });
    }, 0);

    return content;
};
