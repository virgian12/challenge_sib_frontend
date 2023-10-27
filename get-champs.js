/**
 * Instruktur Adiel perlu bantuan sortir nilai para student. Dia ingin mencari ranking para student dan
 * menampilkan nama si juara.
 * Jika ada lebih dari satu juara yang sama, tampilkan semuanya
 *
 * RULES:
 * TIDAK BOLEH MENGGUNAKAN .sort, Set
 *
 * TIPS:
 *   message sang juara bisa menggunakan console.log
 *   score harus di return
 *
 */

 function getChamps(list) {
    // code goes here
    let scoreTinggi = 0; //simpan nilai tertinggi dalam array 'list'
    let juara = []; //simpan nama dg nilai tertinggi dalam array 'list'
  
    // mencari nilai tertinggi
    for (let i = 0; i < list.length; i++) {
      if (list[i][1] > scoreTinggi) {
        scoreTinggi = list[i][1];
      }
    }
  
    // mencari juara
    for (let i = 0; i < list.length; i++) {
      if (list[i][1] === scoreTinggi) {
        juara.push(list[i][0]);
      }
    }
    
  //   memeriksa satu juara dengan skor tertinggi yang sama
    if (juara.length === 1) {
      console.log(`${juara[0]} adalah juara!`);
    } else {
      console.log(`${juara.join(' dan ')} sang juara!`);
    }
  
    // Sortir list berdasarkan nilai (descending) dengan Bubble Sort
    const n = list.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (list[j][1] < list[j + 1][1]) {
          const temp = list[j];
          list[j] = list[j + 1];
          list[j + 1] = temp;
        }
      }
    }
  
    return list;
  }
  
  var score = [
    ["Vian", 90],
    ["Ari", 100],
    ["Taufik", 85],
    ["Akbar", 95]
  ];
  console.log(getChamps(score));
  /**
   * "Ari adalah juara!"
   * [
   *   ["Ari", 100],
   *   ["Akbar", 95],
   *   ["Vian", 90],
   *   ["Taufik", 85]
   * ]
   */
  
  var score2 = [
    ["Joseph", 100],
    ["Jack", 90],
    ["Beck", 95],
    ["Alfred", 100]
  ];
  console.log(getChamps(score2));
  /**
   * "Joseph dan Alfred sang juara!"
   * [
   *   ["Joseph", 100],
   *   ["Alfred", 100],
   *   ["Beck", 95],
   *   ["Jack", 90]
   * ]
   */
  // console.log(getChamps([]));
  // maaf, tidak ada peserta

  // list i = mengambil elemen array pada indeks ke 'i'. Karena punya array lain yang isinya 2 elemen (nama dan skor) jadi pake [i] untuk akses elemen kedua (skor)
// list[i][1] = memeriksa skor dari elemen array 
// (list[i][1] === scoreTertinggi) => memiliki skor tertinggi yang sama dengan skor tertinggi yang sudah ditemukan sebelumnya. nama(list[i][0]) yang sesuai dengan skor tersebut akan ditambahkan ke dalam array 'juara'
// join() = menggabungkan semua elemen dalam sebuah array ke dalam sebuah string. Metode ini mengambil satu parameter, yaitu pemisah (separator), yang akan digunakan untuk memisahkan setiap elemen dalam string hasil gabungan

// (let i = 0; i < n - 1; i++) = mengulangi langkah-langkah pengurutan sebanyak n - 1 kali
//  (for (let j = 0; j < n - i - 1; j++) = embandingkan elemen-elemen berpasangan dalam array
// list[j] dan list[j + 1] = memeriksa elemen yang ada di list[j] memiliki nilai yang lebih kecil dibandingkan dengan elemen yang ada di list[j + 1]. Jika ya, maka kita harus menukar posisi mereka agar yang terbesar berada di depan.
// list[j][1] < list[j + 1][1], artinya elemen list[j] memiliki nilai yang lebih kecil dari list[j + 1], maka kita menukar posisi keduanya