document.getElementById("slider").innerHTML = `
 <section class="slider_section">
          <div class="slider_block_title">
            <p>Become Happier!</p>
            <h2>in the new 2025</h2>
          </div>
          <div class="slider">
            <ul class="slider_list">
              <li class="slider_item">
                <p>live</p>
                <img src="../../../img/snowmen.png" alt="snowmen" />
              </li>
              <li class="slider_item">
                <p>create</p>
                <img src="../../../img/christmas_tree.png" alt="christmas_tree" />
              </li>
              <li class="slider_item">
                <p>love</p>
                <img src="../../../img/christmas_ball.png" alt="christmas_ball" />
              </li>
              <li class="slider_item">
                <p>dream</p>
                <img src="../../../img/house.png" alt="house" />
              </li>
            </ul>
            <div class="btns">
              <button class="btn prev" disabled>&#8594;</button>
              <button class="btn next">&#8594;</button>
            </div>
          </div>
        </section>

        
`;
let currentIndex = 0;

function updateSlider() {
  const slides = document.querySelector(".slider_list");
  const totalSlides = slides.children.length;

  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  prevBtn.disabled = currentIndex <= 0;
  nextBtn.disabled = currentIndex >= totalSlides;

  //   if (currentIndex <= 0) {
  //     prevBtn.disabled = true;
  //   } else {
  //     prevBtn.disabled = false;
  //   }

  //   if (currentIndex >= totalSlides - sliderVisibl) {
  //     nextBtn.disabled = true;
  //   } else {
  //     nextBtn.disabled = false;
  //   }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  currentIndex++;
  updateSlider();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex--;
  updateSlider();
});

window.addEventListener("resize", updateSlider);
updateSlider();
