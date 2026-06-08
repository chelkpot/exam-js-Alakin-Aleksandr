/**
 * ЗАДАНИЕ 1: Чётные и нечётные числа
 *
 * Напишите функцию filterEven(arr), которая принимает массив чисел
 * и возвращает новый массив, содержащий только чётные числа.
 *
 * Пример:
 *   filterEven([1, 2, 3, 4, 5, 6]) => [2, 4, 6]
 *   filterEven([7, 9, 11])         => []
 */

function filterEven(arr) {
  
  // Ваш код здесь

  let result = []

  for (const el of arr) {
    if (el % 2 === 0) {
      result.push(el)
    }
  }
  return result
}

console.log(filterEven([1, 2, 3, 4, 5, 6]))
 module.exports = { filterEven };