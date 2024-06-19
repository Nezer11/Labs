// Отримання елементу div за його ідентифікатором
let editableDiv = document.getElementById("editableDiv");

// Додавання події click на елемент div
editableDiv.addEventListener("click", function() {
  // Вивід вікна prompt і збереження введеного користувачем тексту
  let newText = prompt("Введіть новий текст:");

  // Перевірка, чи користувач щось ввів
  if (newText !== null) {
    // Зміна текстового вмісту елементу div на новий текст
    editableDiv.textContent = newText;
  }
});
