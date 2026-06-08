/**
 * ЗАДАНИЕ 2: Сумма элементов массива
 *
 * Напишите функцию sumArray(arr), которая принимает массив чисел
 * и возвращает сумму всех его элементов.
 * Используйте цикл (for или while).
 *
 * Пример:
 *   sumArray([1, 2, 3, 4, 5]) => 15
 *   sumArray([])              => 0
 */

function sumArray(arr) {
  
  // Ваш код здесь

  let result = 0

  for (const num of arr) {
    result += num
  }
  return result
}

console.log(sumArray([1, 2, 3, 4, 5]))
module.exports = { sumArray };
