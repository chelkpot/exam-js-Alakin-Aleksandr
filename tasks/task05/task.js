/**
 * ЗАДАНИЕ 5: Переворот строки
 *
 * Напишите функцию reverseString(str), которая принимает строку
 * и возвращает её в обратном порядке символов.
 * Нельзя использовать .reverse() напрямую на строке.
 *
 * Пример:
 *   reverseString("hello")  => "olleh"
 *   reverseString("JavaScript") => "tpircSavaJ"
 *   reverseString("")        => ""
 */

function reverseString(str) {
  
  // Ваш код здесь

  let result = ''

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

console.log(reverseString('JavaScript'))
module.exports = { reverseString };
