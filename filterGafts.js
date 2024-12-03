function filterGifts(category) {
  const cards = document.querySelectorAll(".gift_bock");

  cards.forEach((card) => {
    const cardCategoryElement = card.querySelector("h5");
    if (cardCategoryElement) {
      const cardCategory = cardCategoryElement.classList;

      if (category === "all" || cardCategory.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
  updateActiveMenuItem(category);

  const menuItems = document.querySelectorAll(".gifts_link_list li a");

  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
  const activeItem = document.querySelector(`#filter-${category}`);
  if (activeItem) {
    activeItem.classList.add("active");
  }
}
