function checkEmail(email) {
  // Регулярний вираз для перевірки відповідності емейлу заданим вимогам
  const regex = /^[A-Za-z0-9]+([._-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+([.-]?[A-Za-z0-9]+)*(\.[A-Za-z]{2,})+$/;

  // Перевірка емейлу за допомогою регулярного виразу
  if (regex.test(email)) {
    return 'Email is correct!';
  } else {
    return 'Email is not correct!';
  }
}

// Приклади використання:
console.log(checkEmail('my_mail@gmail.com')); // Email is correct!
console.log(checkEmail('#my_mail@gmail.com')); // Email is not correct!
console.log(checkEmail('my_ma--il@gmail.com')); // Email is not correct!
