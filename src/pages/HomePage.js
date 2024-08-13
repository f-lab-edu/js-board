import '../../styles/HomePage.css';
import { Layout } from '../components/Layout';
import { Tabs } from '../components/Tabs';

export const HomePage = (activeTab) => {
  const leftContent = `
    ${Tabs(activeTab)}
    <div class="homeContent">
      <p>${
        activeTab === '/'
          ? '전체 게시글이 여기에 표시됩니다.'
          : activeTab === '/development'
            ? '개발 관련 게시글이 여기에 표시됩니다.'
            : '디자인 관련 게시글이 여기에 표시됩니다.'
      }</p>
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
