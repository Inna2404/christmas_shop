// // Отримуємо контейнер для модального вікна
// const modalContainer = document.getElementById("giftModal");

// // Вставляємо вміст модального вікна динамічно
// modalContainer.innerHTML = `
//   <div id="giftModalContent" style="display: none" class="modal" aria-hidden="true">
//     <div class="modal_content">
//       <span class="close" onclick="closeModal()">&times;</span>
//       <img id="modalImage" alt="gift_ball_work" src="" />
//       <div class="modal_text_block">
//         <div class="modal_text">
//           <h4 id="modalCategory" aria-label="Category will be displayed here"></h4>
//           <h3 id="modalTitle" style="color: #181c29" aria-label="Title will be displayed here"></h3>
//           <p id="modalDescription" style="color: #181c29; font-weight: 400" class="modal_p"></p>
//         </div>
//         <div class="superpowers_block">
//           <h4>Adds superpowers to:</h4>
//           <div class="superpowers" id="superpowersBlock"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// `;

// // Функція для відкриття модального вікна
// function openModal(event, giftId) {
//   // Логіка для оновлення вмісту модального вікна
//   // Наприклад, ви можете отримати дані для кожного подарунка за допомогою giftId
//   // Ось як можна зробити:
//   const modal = document.getElementById("giftModalContent");
//   modal.style.display = "block"; // Показуємо модальне вікно

//   // Тут можна додати ваші дані для кожного подарунка
//   // Наприклад:
//   document.getElementById("modalTitle").textContent = "Gift Title";
//   document.getElementById("modalCategory").textContent = "Gift Category";
//   document.getElementById("modalDescription").textContent = "Gift Description";
// }

// // Функція для закриття модального вікна
// function closeModal() {
//   const modal = document.getElementById("giftModalContent");
//   modal.style.display = "none"; // Приховуємо модальне вікно
// }
