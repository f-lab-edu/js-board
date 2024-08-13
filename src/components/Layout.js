import '../../styles/Layout.css';

export const Layout = (leftContent, rightContent) => {
  return `
    <div class="layoutContainer">
      <div class="layoutLeft">
        ${leftContent}
      </div>
      <div class="layoutRight">
        ${rightContent}
      </div>
    </div>
  `;
};
