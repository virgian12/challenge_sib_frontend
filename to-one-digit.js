/*
====
Menuju 1 digit
====
Input : diberikan sebuah angka multi digit
Proses : tambahkan semua digit dalam angka, masukkan ke dalam array output, proses berhenti ketika angka sudah 1 digit
Output : tampilkan seluruh angka yang terbentuk dari penjumlahan semua digit angka, hingga mendapat angka 1 digit

Contoh :
Input : 123
Output : [6]

Input : 999
Output : [27, 9]

Input : 542984
Output : [32, 5]

Input : 9992
Output : [29, 11, 2]
*/

function menujuSatuDigit(number) {
   // Konversi angka ke dalam bentuk string untuk mengakses digit-digitnya
  const digits = String(number);

  // Base case: Jika angka sudah satu digit, kembalikan angka tersebut dalam bentuk array
  if (digits.length === 1) {
    return [number];
  }

  // Hitung jumlah digit-digit dalam angka
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }

  // Panggil fungsi menujuSatuDigit secara rekursif dengan hasil penjumlahan
  if (sum < 10) {
    return [sum];
  } else {
    return [sum, ...menujuSatuDigit(sum)];
  }
}

let input1 = 123;
console.log(menujuSatuDigit(input1)); // [6]

let input2 = 999;
console.log(menujuSatuDigit(input2)); // [27, 9]

let input3 = 542984;
console.log(menujuSatuDigit(input3)); // [32, 5]

let input4 = 9992;
console.log(menujuSatuDigit(input4)); // [29, 11, 2]

let input5 = 7;
console.log(menujuSatuDigit(input5)); // [7]
