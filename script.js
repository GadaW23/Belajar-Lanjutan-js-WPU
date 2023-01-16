//cara membuat object pada javascript
//object literal
// let mahasiswa1 = {
//     nama: "Gada Wanada",
//     energi: 20,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.info(`Halo ${this.nama}, selamat makan!`)
//     }
// }

// let mahasiswa2 = {
//     nama: "Ghina husna",
//     energi: 15,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.info(`Halo ${this.nama}, selamat makan!`)
//     }
// }

//2.function Declration
// const methodMahasiswa = {
//     makan : function(porsi){
//         this.energi += porsi;
//         console.info(`Halo ${this.nama}, selamat makan`);
//     },

//     main : function (jam) {
//         this.energi -= jam;
//         console.info(`Halo  ${this.nama}, selamat main`);
//     },

//     tidur : function (jam){
//         this.energi += jam * 2;
//         console.info(`Halo ${this.nama}, Selamat Tidur`);
//     }
// }
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let Gada = Mahasiswa('Gada', 10);
// let Ghatvaan = Mahasiswa('Ghatvaan', 10);


//3. Contraktor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.info(`Halo ${this.nama}, selamat makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.info(`Halo  ${this.nama}, selamat main`)
//     }

// }

// let gada = new Mahasiswa("Gada Wanada", 10);
// let ghina = new Mahasiswa("Ghina husna", 10);


// Versi class

class Mahasiswa {
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

             makan = function(porsi){
                this.energi += porsi;
                console.info(`Halo ${this.nama}, selamat makan`);
            }
        
            main = function (jam) {
                this.energi -= jam;
                console.info(`Halo  ${this.nama}, selamat main`)
            }

            tidur = function(jam){
                this.energi += jam * 2;
                console.info(`Halo ${this.nama}, selamat tidur`)
            }

}

let gada = new Mahasiswa("Gada Wanada", 10);