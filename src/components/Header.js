import '../../styles/Header.css';

export const Header = (router) => {
    return `
    <header>
      <h1 class="logo">toss tech</h1>
      <nav>
        <a href="/" data-link>SLASH</a>
        <a href="/mypage" data-link>SIMPLICITY</a>
        <a href="https://toss.im/career/subscribe?utm_source=techblog&utm_medium=email&utm_campaign=subscribebuttons" target='_blank' class='subscribeBtn'>구독하기</a>
        <a href="https://toss.im/career/jobs" target='_blank' class='employmentBtn'>채용 바로가기</a>
      </nav>
    </header>
  `;
};

export const attachHeaderEvents = (router) => {
    document.querySelector('.logo').addEventListener('click', (e) => {
        e.preventDefault();
        router.navigateTo('/');
    });
};
