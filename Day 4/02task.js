// Grade

let n = parseInt(prompt('Masukkan Nilai Anda:'));

if (n >= 90 && n <= 100) {
  alert('Poin Anda A');
} else if (n >= 80) {
  alert('Poin Anda B');
} else if (n >= 70) {
  alert('Point Anda C');
} else if (n >= 60) {
  alert('Point Anda D');
} else if (n < 60) {
  alert('Point Anda E');
} else {
  alert('Nilai yang Anda Masukan Salah');
}
