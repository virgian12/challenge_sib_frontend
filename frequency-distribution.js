/*
===
Frequency Distribution
===
Buatlah sebuah fungsi yang bernama getFrequencies yang akan melakukan pelaporan
rangkuman atas nilai-nilai yang tesebar dalam sebuah array

Contoh :
getFrequencies(["A", "B", "A", "A"]) // { A: 3, B: 1 }
*/

// function getFrequencies() {
    
// }

function getFrequencies(arr) {
    // Buat objek kosong untuk menyimpan frekuensi nilai
    const frequencies = {};
  
    // Loop melalui array
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      
      // Jika nilai sudah ada dalam objek frequencies, tambahkan satu ke frekuensinya
      if (frequencies[value]) {
        frequencies[value] += 1;
      } else {
        // Jika nilai belum ada dalam objek frequencies, inisialisasi dengan 1
        frequencies[value] = 1;
      }
    }
  
    return frequencies;
  }

console.log(getFrequencies(["A", "B", "A", "A", "A"]))  // { A: 4, B: 1 }

console.log(getFrequencies([1, 2, 3, 3, 2])) // { "1": 1, "2": 2, "3": 2 }

console.log(getFrequencies([true, false, true, false, false]))  // { true: 2, false: 3 }

console.log(getFrequencies([]));  // {}


// jika fungsi dibiarkan tanpa ada parameter didalamnya maka fungsi tersebut akan tetap berjalan tanpa kesalahan (error).
// menyertakan parameter diperlukan dalam fungsi agar dapat berinteraksi dengan data yang diberikan.