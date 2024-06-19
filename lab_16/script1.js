document.getElementById("createDivBtn").addEventListener("click", function() {
    // Створення нового елементу div
    let newDiv = document.createElement("div");
    
    // Додавання класу для нового елементу
    newDiv.classList.add("new-div");
    
    // Встановлення стилів для нового елементу
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.backgroundColor = "blue";
    newDiv.style.margin = "10px"; // Доданий відступ для нового елементу
    
    // Додавання нового елементу до DOM
    document.querySelector(".container").appendChild(newDiv);
  });
  