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
          <li><a href="./gifts_link.html" class ="active">gifts</a></li>
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
const body = document.body;

const menuItems = document.querySelectorAll(".burger_menu__list li a");

const updateActiveMenuItem = () => {
  const pathCurrent = window.location.pathname;
  menuItems.forEach((item) => {
    item.classList.remove("active");

    if (
      item.getAttribute("href").includes("gifts_link.html") &&
      pathCurrent.includes("gifts_link.html")
    ) {
      item.classList.add("active");
    }
  });
};

updateActiveMenuItem();
burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("open");
  burgerOverlay.classList.toggle("open");
  body.classList.toggle("no-scroll");
});
