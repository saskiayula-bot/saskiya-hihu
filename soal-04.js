// SOAL 4: LOOPING

let jumlahGenap = 0;

console.log("Angka Genap:");

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        jumlahGenap += i;
    }
}

console.log("Angka Ganjil:");

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("Jumlah seluruh angka genap:", jumlahGenap);