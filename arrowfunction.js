// Contoh

let mahasiswa = ["Gada Wanada","Ghina Husna","Ghatvaan Gunawan"]

// function expretion
// let jumlahMahasiswa = mahasiswa.map(function (nama){
//     return nama.length;
// })
// console.info(jumlahMahasiswa);

// Arrow Function & impisit return
// let jumhlahHuruf = mahasiswa.map( nama => nama.length);
// console.info(jumhlahHuruf);

let jumlahHuruf = mahasiswa.map( nama => ({nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);