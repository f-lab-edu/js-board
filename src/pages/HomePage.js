import '../../styles/HomePage.css';
import { Layout } from '../components/Layout';
import { Tabs } from '../components/Tabs';
import { developmentBoardData, designBoardData } from '../util/dummyData';

export const HomePage = (activeTab) => {
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
      <div class="post">
      <div>
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <small>작성자: ${post.author} | 작성일 : ${post.date}</small>
      </div>
      <div class="imgDiv">
      <image src=${post.thumbnail} alt="썸네일"/>
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

    const leftContent = `
        ${Tabs(activeTab)}
        <div class="homeContent">
          <p>${message}</p>
          ${postList}
        </div>
      `;
    const rightContent = `
  <div class="homeSidebar">
    <p>여기에 사이드바 내용이 옵니다.</p>
  </div>
`;

    return `
    <div class="homeContainer">
    <div>
    <h2>메인 페이지</h2>
    ${Layout(leftContent, rightContent)}
    </div>
     
    </div>
  `;
};
