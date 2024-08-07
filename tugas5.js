class Lingkaran {
    constructor(jari_jari) {
        this.jari_jari = jari_jari;
    }

    luas() {
        return Math.PI * Math.pow(this.jari_jari, 2);
    }

    keliling() {
        return 2 * Math.PI * this.jari_jari;
    }
}

class Tabung extends Lingkaran {
    constructor(jari_jari, tinggi) {
        super(jari_jari);
        this.tinggi = tinggi;
    }

    volume() {
        return this.luas() * this.tinggi;
    }

    luasPermukaan() {
        return 2 * this.luas() + this.keliling() * this.tinggi;
    }

    luasSelimut() {
        return this.keliling() * this.tinggi;
    }
}

class Kerucut extends Lingkaran {
    constructor(jari_jari, tinggi) {
        super(jari_jari);
        this.tinggi = tinggi;
    }

    volume() {
        return (1 / 3) * this.luas() * this.tinggi;
    }

    luasPermukaan() {
        let s = Math.sqrt(Math.pow(this.jari_jari, 2) + Math.pow(this.tinggi, 2));
        return this.luas() + Math.PI * this.jari_jari * s;
    }

    luasSelimut() {
        let s = Math.sqrt(Math.pow(this.jari_jari, 2) + Math.pow(this.tinggi, 2));
        return Math.PI * this.jari_jari * s;
    }
}

class Bola extends Lingkaran {
    constructor(jari_jari) {
        super(jari_jari);
    }

    volume() {
        return (4 / 3) * Math.PI * Math.pow(this.jari_jari, 3);
    }

    luasPermukaan() {
        return 4 * this.luas();
    }
}

// Contoh objek dan perhitungan
// Bola dengan diameter 30 cm (jari-jari 15 cm)
let bola = new Bola(15);
console.log("Volume bola: " + bola.volume() + " cm^3");
console.log("Luas permukaan bola: " + bola.luasPermukaan() + " cm^2");

// Kerucut dengan diameter 20 cm (jari-jari 10 cm) dan tinggi 40 cm
let kerucut = new Kerucut(10, 40);
console.log("Volume kerucut: " + kerucut.volume() + " cm^3");
console.log("Luas permukaan kerucut: " + kerucut.luasPermukaan() + " cm^2");

// Tabung dengan diameter 15 cm (jari-jari 7.5 cm) dan tinggi 50 cm
let tabung = new Tabung(7.5, 50);
console.log("Volume tabung: " + tabung.volume() + " cm^3");
console.log("Luas permukaan tabung: " + tabung.luasPermukaan() + " cm^2");
