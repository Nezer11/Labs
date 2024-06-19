function validateCreditCardNumber(cardNumber) {
  // Регулярний вираз для перевірки наявності тільки цифр та довжини 16 символів
  const regex = /^[0-9]{16}$/;

  // Перевірка, чи номер починається з 4 або 5
  const startsWithFourOrFive = cardNumber.startsWith('4') || cardNumber.startsWith('5');

  // Перевірка, чи відповідає номер карти заданим критеріям
  if (regex.test(cardNumber) && startsWithFourOrFive) {
    return true; // Номер карти валідний
  } else {
    return false; // Номер карти не відповідає критеріям
  }
}

// Приклад використання:
const cardNumber = '4532123456781234'; // Номер банківської карти для валідації
if (validateCreditCardNumber(cardNumber)) {
  console.log('Номер карти є валідним.');
} else {
  console.log('Номер карти не є валідним.');
}
