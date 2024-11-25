document.getElementById("header").innerHTML = `
<header>
  <nav class="header_navigation">
    <ul class="header_navigation__list">
      <li class="header_navigation__home">
        <a href="./index.html">
          <div></div>
          the gifts
        </a>
      </li>
      <button class="burger_menu" id="burgerButton">
        <span></span>
        <span></span>
      </button>
      <div class="burger_menu__overlay" id="burgerOverlay">
        <ul class="burger_menu__list">
          <li><a href="./gifts_link.html">gifts</a></li>
          <li><a href="./#about">about</a></li>
          <li><a href="./#gifts">best</a></li>
          <li><a href="index.html#footer">contacts</a></li>
        </ul>
      </div>
    </ul>
  </nav>
</header>
`;

const burgerButton = document.getElementById("burgerButton");
const burgerOverlay = document.getElementById("burgerOverlay");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("open");
  burgerOverlay.classList.toggle("open");
});
