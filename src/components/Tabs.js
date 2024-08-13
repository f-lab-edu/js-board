import '../../styles/Tabs.css';

export const Tabs = (activeTab) => {
  return `
    <nav class="tabs">
      <a href="/" class="${activeTab === '/' ? 'active' : ''}" data-link>전체</a>
      <a href="/development" class="${activeTab === '/development' ? 'active' : ''}" data-link>개발</a>
      <a href="/design" class="${activeTab === '/design' ? 'active' : ''}" data-link>디자인</a>
    </nav>
  `;
};
