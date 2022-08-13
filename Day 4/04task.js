// Tahun Kabisat

let tahun = parseInt(prompt('Masukkan Tahun: '));

if ((0 == tahun % 4 && 0 != tahun % 100) || 0 == tahun % 400) {
  alert('Tahun Kabisat');
} else {
  alert('Bukan Tahun Kabisat');
}
