(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function u(e){return{checkRoutes:r=>e[r]||e["/404"],navigateTo:r=>{window.location.pathname!==r&&(history.pushState(null,null,r),window.dispatchEvent(new Event("popstate")))}}}const p=()=>`
    <header>
      <h1>toss tech</h1>
      <nav>
        <a href="/" data-link>SLASH</a>
        <a href="/mypage" data-link>SIMPLICITY</a>
        <a href="https://toss.im/career/subscribe?utm_source=techblog&utm_medium=email&utm_campaign=subscribebuttons" target='_blank' class='subscribeBtn'>구독하기</a>
        <a href="https://toss.im/career/jobs" target='_blank' class='employmentBtn'>채용 바로가기</a>
      </nav>
    </header>
  `,h=()=>`
    <footer>
      <p>Copyright 이태헌</p>
    </footer>
  `,f=(e,n)=>`
    <div class="layoutContainer">
      <div class="layoutLeft">
        ${e}
      </div>
      <div class="layoutRight">
        ${n}
      </div>
    </div>
  `,m=e=>`
    <nav class="tabs">
      <a href="/" class="${e==="/"?"active":""}" data-link>전체</a>
      <a href="/development" class="${e==="/development"?"active":""}" data-link>개발</a>
      <a href="/design" class="${e==="/design"?"active":""}" data-link>디자인</a>
    </nav>
  `,i=e=>{const n=`
    ${m(e)}
    <div class="homeContent">
      <p>${e==="/"?"전체 게시글이 여기에 표시됩니다.":e==="/development"?"개발 관련 게시글이 여기에 표시됩니다.":"디자인 관련 게시글이 여기에 표시됩니다."}</p>
    </div>
  `;return`
    <div class="homeContainer">
    <div>
    <h2>메인 페이지</h2>
    ${f(n,`
  <div class="homeSidebar">
    <p>여기에 사이드바 내용이 옵니다.</p>
  </div>
`)}
    </div>
     
    </div>
  `},v=()=>`
    <section>
      <h2>마이페이지</h2>
      <p>라우팅 기능 점검용 페이지입니다.</p>
    </section>
  `,g=()=>`
    <section>
      <h2>404 - Page Not Found</h2>
      <p>존재하지 않는 페이지 입니다.</p>
      <a href="/" data-link>홈 페이지로 이동</a>
    </section>
  `,d={"/js-board/":()=>i("/"),"/js-board/development":()=>i("/development"),"/js-board/design":()=>i("/design"),"/js-board/mypage":v,"/js-board/404":g},l=u(d),y=e=>{const n=document.getElementById("app");n.innerHTML=e},c=e=>{const n=l.checkRoutes(e),r=d.hasOwnProperty(e)?`
    ${p()}
    ${n()}
    ${h()}`:n();y(r)},b=()=>{document.addEventListener("DOMContentLoaded",()=>{c(window.location.pathname),document.body.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),l.navigateTo(e.target.href))})}),window.addEventListener("popstate",()=>{c(window.location.pathname)})};b();
