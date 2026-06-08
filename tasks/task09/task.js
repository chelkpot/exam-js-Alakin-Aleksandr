/**
 * ЗАДАНИЕ 9: Суммы строк матрицы
 *
 * Напишите функцию rowSums(matrix), которая принимает двумерный массив (матрицу)
 * и возвращает новый массив, где каждый элемент — это сумма соответствующей строки.
 *
 * Пример:
 *   rowSums([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) => [6, 15, 24]
 *   rowSums([[10, 20], [5, 5]])                 => [30, 10]
 *   rowSums([])                                 => []
 */

function rowSums(matrix) {
  
  // Ваш код здесь

  let result = []

  for (const arr of matrix) {
    let elSum = 0

    for (const el of arr) {
      elSum += el
    }

    result.push(elSum)
  }
  return result
}
console.log(rowSums([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
module.exports = { rowSums };
