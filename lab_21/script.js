// Отримуємо кнопку "Create Product" та модальне вікно
var createProductBtn = document.getElementById("createProductBtn");
var modal = document.getElementById("modal");

// Отримуємо елементи для закриття модального вікна
var closeModal = document.getElementsByClassName("close")[0];
var overlay = document.querySelector(".modal");

// Функція для закриття модального вікна
function closeModalWindow() {
  modal.style.display = "none";
}

// Додаємо обробник події на кнопку "Закрити" (хрестик)
closeModal.onclick = closeModalWindow;

// Додаємо обробник події на кнопку "Create Product" для відкриття модального вікна
createProductBtn.onclick = function() {
  modal.style.display = "block";
}

// Функція для запису даних у LocalStorage
function saveDataToLocalStorage(dataKey, data) {
  localStorage.setItem(dataKey, JSON.stringify(data));
}

// Функція для отримання даних з форми та запису їх у LocalStorage
function saveFormDataToLocalStorage() {
  const formData = {
    productName: document.getElementById('productName').value,
    productDescription: document.getElementById('productDescription').value,
    productPrice: parseFloat(document.getElementById('productPrice').value),
    productDiscount: parseFloat(document.getElementById('productDiscount').value),
    productCategory: document.getElementById('productCategory').value,
    productImage: document.getElementById('productImage').value
  };

  // Отримуємо збережені дані з LocalStorage, якщо вони є
  let savedData = JSON.parse(localStorage.getItem('formData')) || [];

  // Додаємо нові дані до масиву збережених даних
  savedData.push(formData);

  // Зберігаємо оновлені дані у LocalStorage
  saveDataToLocalStorage('formData', savedData);
}

// Отримуємо посилання на форму
const productForm = document.getElementById('productForm');

// Отримуємо посилання на кнопку "Save Product"
const saveProductBtn = document.getElementById('saveProductBtn');

// Масив для зберігання продуктів
let products = [];

// Функція для додавання продукту в масив, серіалізації даних та запису в LocalStorage
function addProduct(event) {
  // Зупиняємо стандартну дію форми (уникнення перезавантаження сторінки)
  event.preventDefault();

  // Отримуємо значення полів форми
  const productName = document.getElementById('productName').value;
  const productDescription = document.getElementById('productDescription').value;
  const productPrice = parseFloat(document.getElementById('productPrice').value);
  const productDiscount = parseFloat(document.getElementById('productDiscount').value);
  const productCategory = document.getElementById('productCategory').value;
  const productImage = document.getElementById('productImage').value;

  // Створюємо об'єкт продукту
  const product = {
    name: productName,
    description: productDescription,
    price: productPrice,
    discount: productDiscount,
    category: productCategory,
    image: productImage
  };

  // Додаємо продукт до масиву
  products.push(product);

  // Виводимо масив продуктів у консоль
  console.log('Products:', products);

  // Зберігаємо дані з форми у LocalStorage
  saveFormDataToLocalStorage();
}

// Додаємо обробник події на кнопку "Save Product"
saveProductBtn.onclick = function(event) {
  // Зупиняємо стандартну дію кнопки (уникнення відправки форми)
  event.preventDefault();
  // Додаємо продукт
  addProduct(event);
  // Закриваємо модальне вікно
  closeModalWindow();
};

// Додаємо обробник події на подію submit форми
productForm.addEventListener('submit', addProduct);

// Додаємо обробник події на overlay (прозорий фон) для закриття модального вікна
overlay.onclick = function(event) {
  if (event.target === modal) {
    closeModalWindow();
  }
};
