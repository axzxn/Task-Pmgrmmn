// Loop with Range

const angka1 = parseInt(prompt('Masukkan nilai angka pertama : '));
const angka2 = parseInt(prompt('Masukkan nilai angka kedua : '));
function numbers(angka1, angka2) {
  let range = [];
  for (let i = angka1; i <= angka2; i++) {
    range.push(i);
  }
  return range;
}

alert(numbers(angka1, angka2));
