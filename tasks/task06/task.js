/**
 * ЗАДАНИЕ 6: Подсчёт вхождений
 *
 * Напишите функцию countOccurrences(arr, value), которая принимает
 * массив и значение, и возвращает количество раз, которое это
 * значение встречается в массиве.
 *
 * Пример:
 *   countOccurrences([1, 2, 3, 2, 1, 2], 2) => 3
 *   countOccurrences(["a", "b", "a", "c"], "a") => 2
 *   countOccurrences([1, 2, 3], 5) => 0
 */

function countOccurrences(arr, value) {
  
  // Ваш код здесь

  let counter = 0

  for (const el of arr) {
    if (el === value) {
      counter += 1
    }
  }
  return counter
}
console.log(countOccurrences([1, 2, 3, 2, 1, 2], 2))
module.exports = { countOccurrences };
