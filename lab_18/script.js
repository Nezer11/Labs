
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}


Car.prototype.displayInfo = function() {
  console.log("Brand: " + this.brand);
  console.log("Model: " + this.model);
  console.log("Year: " + this.year);
};


Car.prototype.drive = function() {
  console.log("Рух розпочато");
};


var car1 = new Car("Toyota", "Camry", 2018);
var car2 = new Car("Honda", "Civic", 2019);
var car3 = new Car("Ford", "Focus", 2020);


car1.displayInfo();
car1.drive();

car2.displayInfo();
car2.drive();

car3.displayInfo();
car3.drive();
