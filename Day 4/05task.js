// Film Rating

let usia = parseInt(prompt('Masukkan Usia Anda :'));

if (usia >= 21) {
  alert('rating film anda adalah DEWASA');
} else if (usia >= 12) {
  alert('rating film anda adalah REMAJA');
} else if (usia >= 9) {
  alert('rating film anda adalah BIMBINGAN ORANG TUA');
} else if (usia < 9) {
  alert('rating film anda adalah SEMUA USIA');
} else {
  alert('Mohon masukkan usia anda dengan benar');
}
