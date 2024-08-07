let a = 4
let r  = 3
let n = 10
let jumlah = 0

for (let i = 0; i < n; i++) {
    jumlah += a * Math.pow(r, i)
}

console.log("Jumlah 10 suku pertama dari deret geometri adalah: " + jumlah)