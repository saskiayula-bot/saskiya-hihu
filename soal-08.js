// SOAL 8: OBJECT

const produk = {
    nama: "Laptop",
    harga: 7500000,
    stok: 10,
    kategori: "Elektronik"
};

console.log("Nama Produk:", produk.nama);
console.log("Harga Produk:", produk.harga);

produk.stok = 5;
produk.merek = "Lenovo";

console.log("Data Produk Terbaru:", produk);