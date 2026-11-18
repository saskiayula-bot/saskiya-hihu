// SOAL 6: ARRAY

const nilai = [80, 75, 90, 65, 85, 95, 70];

const tertinggi = Math.max(...nilai);
const terendah = Math.min(...nilai);

const total = nilai.reduce((a, b) => a + b, 0);
const rataRata = total / nilai.length;

const lulus = nilai.filter(n => n >= 75);

console.log("Seluruh Nilai:", nilai);
console.log("Nilai Tertinggi:", tertinggi);
console.log("Nilai Terendah:", terendah);
console.log("Nilai Rata-rata:", rataRata);
console.log("Jumlah Mahasiswa Lulus:", lulus.length);