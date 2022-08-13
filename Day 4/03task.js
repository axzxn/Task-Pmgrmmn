// Ganjil atau Genap

let n = parseInt(prompt('Masukkan Bilangan Ganjil atau Genap : '));
if (n != '') {
  if (n % 2 == 0) {
    alert('Genap');
  } else if (n % 2 == 1) {
    alert('Ganjil');
  } else {
    alert('Masukkan angka bilangan dengan benar');
  }
}
