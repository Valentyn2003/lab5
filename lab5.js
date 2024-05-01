/*//1 Завдання
const A = ['a', 'b', 'c'];
const B = ['x', 'y', 'z'];
const C = [0, 1];

let D = [];

for (let iC = 0; iC < C.length; iC++) {
  for (let iA = 0; iA < A.length; iA++) {
    for (let iB = 0; iB < B.length; iB++) {
      D.push(C[iC] + A[iA] + B[iB]);
    }
  }
}

console.log(D);

*/
//2 Завдання
function calculateSets(U, A, B) {
    // 1. Впорядкувати елементи масиву U
    U.sort((a, b) => a - b);
  
    // 2. Сформувати бітовий рядок множини A
    const Abit = new Array(U.length).fill(0);
    for (let i = 0; i < U.length; i++) {
      for (let j = 0; j < A.length; j++) {
        if (U[i] === A[j]) {
          Abit[i] = 1;
          break;
        }
      }
    }
  
    // 3. Сформувати бітовий рядок множини B
    const Bbit = new Array(U.length).fill(0);
    for (let i = 0; i < U.length; i++) {
      for (let j = 0; j < B.length; j++) {
        if (U[i] === B[j]) {
          Bbit[i] = 1;
          break;
        }
      }
    }
  
    // 4. Визначити бітові рядки для операцій з множинами
    const notA = Abit.map((bit) => 1 - bit);
    const AperB = Abit.map((aBit, i) => (aBit === 1 && Bbit[i] === 1) ? 1 : 0);
    const AobB = Abit.map((aBit, i) => (aBit === 1 || Bbit[i] === 1) ? 1 : 0);
    const ArizB = Abit.map((aBit, i) => (aBit === 1 && Bbit[i] === 0) ? 1 : 0);
    const AxorB = Abit.map((aBit, i) => (aBit === 1 && Bbit[i] === 0) || (aBit === 0 && Bbit[i] === 1) ? 1 : 0);
  
    // 5. Вивести результат
    console.log("Бітовий рядок множини A:", Abit);
    console.log("Бітовий рядок множини B:", Bbit);
    console.log("notA:", notA);
    console.log("A ∩ B:", AperB);
    console.log("A ∪ B:", AobB);
    console.log("A \\ B:", ArizB);
    console.log("A xor B:", AxorB);
  }
  
  // Приклад використання
  const U = [1, 2, 3, 4, 5];
  const A = [2, 4];
  const B = [3, 4, 5];
  
  calculateSets(U, A, B);
  

  module.exports = {
    A,
    B,
    C,
    D,
  };