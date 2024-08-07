let a = 4;
let r = 3;
let n = 10;
let jumlah = 0;

console.log("Suku-suku deret geometri:");

for (let i = 0; i < n; i++) {
    let suku = a * Math.pow(r, i);
    console.log("Suku ke-" + (i + 1) + ": " + suku);
    jumlah += suku;
}

console.log("Jumlah 10 suku pertama dari deret geometri adalah: " + jumlah);
