// SOAL 9: ARRAY OF OBJECTS

const mahasiswa = [
    { nama: "Andi", nilai: 85 },
    { nama: "Budi", nilai: 60 },
    { nama: "Citra", nilai: 90 },
    { nama: "Doni", nilai: 70 },
    { nama: "Eka", nilai: 95 }
];

const lulus = mahasiswa.filter(m => m.nilai >= 75);

const tidakLulus = mahasiswa.filter(m => m.nilai < 75);

const urutan = [...mahasiswa].sort(
    (a, b) => b.nilai - a.nilai
);

console.log("Mahasiswa Lulus:", lulus);
console.log("Mahasiswa Tidak Lulus:", tidakLulus);
console.log("Jumlah Mahasiswa Lulus:", lulus.length);
console.log("Urutan Nilai Tertinggi:", urutan);