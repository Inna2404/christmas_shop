document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("gifts").innerHTML = `
<section id="gifts" class="gift_wrap">
          <div class="gift_bock_text">
            <p>Best Gifts</p>
            <h2>especially for you</h2>
          </div>

          <div class="gift_block_wrap">
            <a class="gift_bock" onclick="openModal(event,1)">
              <img src="img/gift_ball_1.png"  alt="gift_ball_work" />
              <div class="gift_bock_title">
                <h5 class="for_work">For work</h5>
                <h3>Console.log Guru</h3>
              </div>
            </a>
        

            <a class="gift_bock" onclick="openModal(event,2)" >
              <img src="./img/gift_ball_2.png" alt="gift_ball_health" />
              <div class="gift_bock_title">
                <h5 class="for_health">For health</h5>
                <h3>Hydration Bot</h3>
              </div>
            </a>

            <a class="gift_bock" onclick="openModal(event,1)">
              <img src="img/gift_ball_3.png" alt="gift_ball_work" />
              <div class="gift_bock_title">
                <h5 class="for_work">For work</h5>
                <h3>Merge Master</h3>
              </div>
            </a>

            <a class="gift_bock" onclick="openModal(event,4)">
              <img src="img/gift_ball_4.png"  alt="gift_ball_harmony" />
              <div class="gift_bock_title">
                <h5 class="for_harmony">For harmony</h5>
                <h3>Spontaneous Coding Philosopher</h3>
              </div>
            </a>
          </div>
        </section>
`;
});
