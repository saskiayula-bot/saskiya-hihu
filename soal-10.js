// SOAL 10: SISTEM KASIR SEDERHANA

const produk = [
    { nama: "Mouse", harga: 50000 },
    { nama: "Keyboard", harga: 100000 },
    { nama: "Monitor", harga: 1500000 },
    { nama: "Headset", harga: 200000 }
];

// Data pembelian
const pembelian = [
    { nama: "Mouse", jumlah: 2 },
    { nama: "Keyboard", jumlah: 1 },
    { nama: "Headset", jumlah: 1 }
];

let subtotal = 0;

console.log("======= STRUK PEMBELIAN =======");

pembelian.forEach(item => {
    const barang = produk.find(
        p => p.nama === item.nama
    );

    if (barang) {
        const total = barang.harga * item.jumlah;
        subtotal += total;

        console.log(
            barang.nama,
            "x" + item.jumlah,
            "Rp" + total.toLocaleString("id-ID")
        );
    }
});

const diskon = subtotal > 500000
    ? subtotal * 0.10
    : 0;

const totalBayar = subtotal - diskon;

console.log("-------------------------------");
console.log("Subtotal: Rp" + subtotal.toLocaleString("id-ID"));
console.log("Diskon: Rp" + diskon.toLocaleString("id-ID"));
console.log("Total: Rp" + totalBayar.toLocaleString("id-ID"));
console.log("===============================");
console.log("Terima kasih!");