document.getElementById("slider").innerHTML = `
<section id = "slider" class="slider_section">
  <div class="slider_block_title">
    <p>Become Happier!</p>
    <h2>in the new 2025</h2>
  </div>
  <div class="slider">
    <ul class="slider_list">
    <li class="slider_item">
        <p>live</p>
        </li>
      <li class="slider_item">
        <img src="img/snowmen.png" alt="snowmen" />
      </li>
          <li class="slider_item">
        <p>create</p>
        </li>
      <li class="slider_item">
        <img src="img/christmas_tree.png" alt="christmas_tree" />
      </li>
         <li class="slider_item">
        <p>love</p>
        </li>
      <li class="slider_item">
        <img src="img/christmas_ball.png" alt="christmas_ball" />
      </li>
       <li class="slider_item">
        <p>dream</p>
        </li>
      <li class="slider_item">
        <img src="img/house.png" alt="house" />
      </li>
    </ul>
    <div class="btns">
      <button id="prev_btn" class="btn prev" >
        &#8594;
      </button>
      <button id="next_btn" class="btn next">&#8594;</button>
    </div>
  </div>
</section>
`;

let currentIndex = 0;
const slider = document.querySelector(".slider_list");
const prevBtn = document.querySelector("#prev_btn");
const nextBtn = document.querySelector("#next_btn");

const totalSlider = document.querySelectorAll(".slider_item").length;

function updateSlider() {
  const width = window.innerWidth;
  if (width > 1400) {
    slider.style.transform = `translateX(-${currentIndex * 18}%)`;
  } else if (width > 1200) {
    slider.style.transform = `translateX(-${currentIndex * 15}%)`;
  } else if (width > 1050) {
    slider.style.transform = `translateX(-${currentIndex * 22}%)`;
  } else if (width > 992) {
    slider.style.transform = `translateX(-${currentIndex * 28}%)`;
  } else if (width > 870) {
    slider.style.transform = `translateX(-${currentIndex * 34}%)`;
  } else if (width > 769) {
    slider.style.transform = `translateX(-${currentIndex * 38}%)`;
  } else if (width > 710) {
    slider.style.transform = `translateX(-${currentIndex * 30}%)`;
  } else if (width > 600) {
    slider.style.transform = `translateX(-${currentIndex * 40}%)`;
  } else if (width > 500) {
    slider.style.transform = `translateX(-${currentIndex * 50}%)`;
  } else if (width > 380) {
    slider.style.transform = `translateX(-${currentIndex * 63}%)`;
  } else {
    slider.style.transform = `translateX(-${currentIndex * 73}%)`;
  }

  prevBtn.disabled = currentIndex <= 0;
  nextBtn.disabled = currentIndex >= totalSlider - 1;

  slider.style.transition = "transform 0.9s ease";
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalSlider - 1) {
    currentIndex++;
  }
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener("resize", updateSlider);
updateSlider();
