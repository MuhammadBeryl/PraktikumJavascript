// Ukuran tanah
const panjang = 20.5; // dalam meter
const lebar = 30; // dalam meter

// Harga per meter persegi
const hargaPerMeter = 1500000; // dalam Rupiah

// PPN
const ppnPersen = 15; // dalam persen

// Menghitung luas tanah
const luasTanah = panjang * lebar;

// Menghitung total harga tanpa PPN
const totalHargaTanpaPPN = luasTanah * hargaPerMeter;

// Menghitung PPN
const ppn = (ppnPersen / 100) * totalHargaTanpaPPN;

// Menghitung total harga dengan PPN
const totalHargaDenganPPN = totalHargaTanpaPPN + ppn;

// Menampilkan hasil
console.log(`Luas tanah: ${luasTanah} m²`);
console.log(`Total harga tanpa PPN: Rp ${totalHargaTanpaPPN}`);
console.log(`PPN (${ppnPersen}%): Rp ${ppn}`);
console.log(`Total harga dengan PPN: Rp ${totalHargaDenganPPN}`);
