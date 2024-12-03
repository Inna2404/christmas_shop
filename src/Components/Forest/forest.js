document.getElementById("forest").innerHTML = `
<section  id="forest" class="forest_section">
  <div class="forest_section_block">
    <h2>
      Ready to start your <br />
      journey to a better <br />
     <span class="indented">version of yourself?</span>
    </h2>
    <button>Explore Magical Gifts</button>
    <p>The New Year is Coming Soon...</p>
    <div class="timer">
      <div class="timer_block">
        <h4 id="days">47</h4>
        <p>days</p>
      </div>
      <span class="timer_span"></span>
      <div class="timer_block">
        <h4 id = "hours">5</h4>
        <p>hours</p>
      </div>
      <span class="timer_span"></span>
      <div class="timer_block">
        <h4 id="minets">34</h4>
        <p>minutes</p>
      </div>
      <span class="timer_span"></span>
      <div class="timer_block">
        <h4 id="seconds">12</h4>
        <p>seconds</p>
      </div>
    </div>
  </div>
  
</section>
`;
const targetDate = new Date("December 31, 2024 23:59:59").getTime();

const interval = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minets").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minets").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
    alert("Time`s up!");
  }
}, 1000);
