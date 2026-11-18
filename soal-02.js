// SOAL 2: OPERATOR ARITMATIKA

const harga = 25000;
const jumlah = 4;
const diskon = 10;

const total = harga * jumlah;
const potongan = total * diskon / 100;
const pembayaran = total - potongan;

console.log("Total sebelum diskon:", total);
console.log("Diskon:", potongan);
console.log("Total pembayaran:", pembayaran);