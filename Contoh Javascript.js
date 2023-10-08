// Contoh 1: if, else, dan nested if
let angka = 13;

if (angka > 20) {
  console.log("Angka lebih besar dari 20");
} else {
  console.log("Angka kurang dari atau sama dengan 20");
}

// Contoh 2: Nested if
let nilai = 85;

if (nilai >= 90) {
  console.log("Nilai A");
} else if (nilai >= 75) {
  console.log("Nilai B");
} else if (nilai >= 40) {
  console.log("Nilai C");
} else {
  console.log("Nilai D");
}

// Contoh 3: Penggunaan operator ternary
let usia = 21;
let status;

status = usia >= 17 ? "Dewasa" : "Anak-anak";
console.log("Status: " + status);

// Contoh 1: switch case
let hari = "Jumat";

switch (hari) {
  case "Jumat":
    console.log("Hari kerja");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari Weekend");
    break;
  default:
    console.log("Hari tidak ada");
}

// Contoh 2: switch case dengan ekspresi
let operator = "+";
let hasil;

switch (operator) {
  case "+":
    hasil = 20 + 3;
    break;
  case "-":
    hasil = 20 - 3;
    break;
  default:
    hasil = "Operasi tidak benar";
}

console.log("Hasil operasi: " + hasil);

// Contoh 3: switch case untuk memeriksa jenis data
let data = 31;

switch (typeof data) {
  case "number":
    console.log("Data adalah angka");
    break;
  case "string":
    console.log("Data adalah string");
    break;
  default:
    console.log("Data tidak dikenali");
}

// Contoh 1: for loop untuk mengulang angka
for (let i = 0; i <= 4; i++) {
  console.log("Membaca ke-" + i);
}

// Contoh 2: for loop untuk mengulang elemen dalam array
let Fandom = ["ARMY", "BLINK", "NCTzen"];

for (let i = 0; i < Fandom.length; i++) {
  console.log("Fandom ke-" + (i + 1) + ": " + Fandom[i]);
}

// Contoh 3: for loop dengan increment yang berbeda
for (let i = 15; i > 5; i -= 1) {
  console.log("Membaca ke-" + i);
}

// Contoh 1: while loop
let n = 5;

while (n <= 2) {
  console.log("Membaca while ke-" + n);
  n++;
}

// Contoh 2: do while loop
let m = 10;

do {
  console.log("Membaca do while ke-" + m);
  m++;
} while (m <= 5);

// Contoh 3: while loop dengan kondisi yang salah dari awal
let p = 10;

while (p < 10) {
  console.log("IMembaca while ke-" + p);
  p++;
}

// Contoh 1: Deklarasi dan pemanggilan fungsi
function tambah(a, b) {
  return a + b;
}

let hasilPenambahan = tambah(20, 10);
console.log("Hasil penambahan: " + hasilPenambahan);

// Contoh 2: Fungsi tanpa nilai kembali (void)
function Hallo(nama) {
  console.log("Annyeonghaseyo, " + nama + "!");
}

Hallo("Pioo");
Hallo("Jimin");

// Contoh 3: Fungsi dengan argumen default
function hitungLuasPersegi(panjang = 5, lebar = 2) {
  return panjang * lebar;
}

let luas = hitungLuasPersegi(8, 3);
console.log("Luas persegi: " + luas);