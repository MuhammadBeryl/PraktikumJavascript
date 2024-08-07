let tinggi = 170; // dalam cm
let berat = 90; // dalam kg

// Konversi tinggi dari cm ke meter
let tinggiMeter = tinggi / 100;

// Hitung BMI
let bmi = berat / (tinggiMeter * tinggiMeter);

// Tentukan status berat badan berdasarkan nilai BMI
let status;
if (bmi < 18.5) {
    kategori = "Kurus";
} else if (bmi >= 18.5 && bmi < 25) {
    kategori = "Normal";
} else if (bmi >= 25 && bmi < 30) {
    kategori = "Kelebihan Berat Badan";
} else {
    kategori = "Obesitas";
}

console.log("BMI Rhodey adalah: " + bmi.toFixed(2));
console.log("Status berat badan Rhodey adalah: " + kategori);
