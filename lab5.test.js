const { test } = require('jest');

// Масиви A, B та C для формування комбінацій
const A = ['a', 'b', 'c'];
const B = ['x', 'y', 'z'];
const C = [0, 1];

// Масив D буде містити всі можливі комбінації елементів з масивів A, B та C
let D = [];

// Перебір кожного елементу масиву C
for (let iC = 0; iC < C.length; iC++) {
  // Перебір кожного елементу масиву A
  for (let iA = 0; iA < A.length; iA++) {
    // Перебір кожного елементу масиву B
    for (let iB = 0; iB < B.length; iB++) {
      // Формування комбінації елементів з масивів A, B та C та додавання її до масиву D
      D.push(C[iC] + A[iA] + B[iB]);
    }
  }
}

// Тест для перевірки довжини масиву D
it('Масив D має мати правильну довжину', () => {
  expect(D).toHaveLength(A.length * B.length * C.length);
});

// Тест для перевірки правильності елементів у масиві D
it('Масив D має містити правильні елементи', () => {
  const expectedElements = [];

  // Формування очікуваних елементів
  for (let iC = 0; iC < C.length; iC++) {
    for (let iA = 0; iA < A.length; iA++) {
      for (let iB = 0; iB < B.length; iB++) {
        expectedElements.push(`${C[iC]}${A[iA]}${B[iB]}`);
      }
    }
  }

  // Перевірка наявності очікуваних елементів у масиві D
  expect(D).toEqual(expect.arrayContaining(expectedElements));
});

