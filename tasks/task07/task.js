/**
 * ЗАДАНИЕ 7: Сглаживание вложенного массива (один уровень)
 *
 * Напишите функцию flattenOnce(arr), которая принимает массив,
 * который может содержать вложенные массивы (только один уровень вложенности),
 * и возвращает "плоский" массив всех элементов.
 * Нельзя использовать .flat().
 *
 * Пример:
 *   flattenOnce([1, [2, 3], [4, 5], 6]) => [1, 2, 3, 4, 5, 6]
 *   flattenOnce([[1, 2], [3, 4]])        => [1, 2, 3, 4]
 *   flattenOnce([1, 2, 3])              => [1, 2, 3]
 */

function flattenOnce(arr) {
  
  // Ваш код здесь

  let result = []

  for (const el of arr) {
    if (typeof el !== 'object') {
      result.push(el)
    } else if (typeof el === 'object') {
      for (const element of el) {
        result.push(element)
      }
    }
  }
  return result
}
console.log(flattenOnce([1, [2, 3], [4, 5], 6]))
module.exports = { flattenOnce };
