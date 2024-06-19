
var container = document.getElementById("container");


var contents = [
  { title: "Заголовок 1", paragraph: "Абзац 1" },
  { title: "Заголовок 2", paragraph: "Абзац 2" },
  { title: "Заголовок 3", paragraph: "Абзац 3" }
];


for (var i = 0; i < contents.length; i++) {
  
  var div = document.createElement("div");
  div.classList.add("block");

 
  div.innerHTML = "<h2>" + contents[i].title + "</h2><p>" + contents[i].paragraph + "</p>";

  var deleteIcon = document.createElement("img");
  deleteIcon.src = "Screenshot 2024-05-13 131711.png"; 
  deleteIcon.classList.add("delete-icon");

 
  deleteIcon.addEventListener("click", function() {
   
    this.parentNode.remove();
  });

  
  div.appendChild(deleteIcon);

  
  container.appendChild(div);
}
