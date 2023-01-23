// 2.1 Execution Context, Hoisting & Scope

// Catatan
// Creation Phase Pada Global Content
// Nama Var = Undifined
// nama Function = fn()
// Hoisting
// Window = global Object
// this = Window


// var nama = "Gada";
// var umur = 23;

// console.log(sayHello());
// function sayHello(){
//   return `Halo Nama Saya ${nama}, Usia Saya ${umur} Tahun`
//   };

// cek code ini di pythontutor.com agar paha role eksekusi
// function satu() {
//     var nama = "Gada";
//     console.info(nama);
//   }

// function dua() {
//     console.info(nama);
//   }

// console.info(nama);
// var nama = "Ghatvaan";
// satu();
// dua('Ghina');
// console.info(nama);

// 2.2 clousers

// function init() {
//     let nama = "gada";

//     function tampilnama() {
//         console.info(nama);
//       }
//       tampilnama();
//   }
// init();

// function init() {
//    return function(nama) {
//         console.info(nama);
//       }
//   }
// let panggilNama = init();
// panggilNama ("Gada wanada");
// panggilNama ("Ghina Husna");

 