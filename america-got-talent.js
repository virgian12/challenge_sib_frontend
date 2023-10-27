/*
  /////////////////
  americanGotTalent
  /////////////////

  Function americanGotTalent akan menentukkan juara serta jumlah votingnya dari suatu array.
  Function akan menerima 1 parameter yaitu:
    - votes adalah kumpulan string nama, tipe datanya array.
  Function ini akan mengembalikkan nilai string dalam format:
    - Apabila terdapat juara: "Selamat juaranya adalah [nama], dengan total votes yang diterima [totalVotes]".
    - Apabila tidak terdapat juara: "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini".
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho'];

  [PROCESS]
    terdapat 2 voting Lee Min Ho yang paling banyak.

  [OUTPUT]
    Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2.

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho'];

  [PROCESS]
    tidak terdapat yang terbanyak.

  [OUTPUT]
    Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
  
  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .pop(), .shift() dan .unshift()
*/


function americanGotTalent(votes) {
    // code here
     // kondisi yang memeriksa panjang elemen pada 'votes' = 0 => tidak ada nama peserta
    if (votes.length === 0) {
      return "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini";
  }
  // object kosong '{}' untuk simpan jumlah voting tiap peserta
  const voteCount = {};
  
  // iterasi setiap elemen pd 'votes'(wakil nama peserta penerima voting)
  for (const contestant of votes) {
      // memeriksa object 'voteCount' punya properti dengan nama yang sama 
      if (voteCount[contestant] === undefined) {
          voteCount[contestant] = 1;
      } else {
          voteCount[contestant]++;
      }
  }
  
  // simpan nama peserta dg vote paling tinggi
  let winners = [];
  // melacak jumlah voting tertinggi yg ditemukan saat ini
  let maxVotes = 0;
  
  // iterasi lewat tiap nama peserta dalam voteCount
  for (const contestant in voteCount) {
      // pengkondisian untuk nama peserta dengan jumlah count lebih besar dari maxVotes
      if (voteCount[contestant] > maxVotes) {
          // syarat penetuan winners : maxVotes berisi jumlah vote dari kontestan
          maxVotes = voteCount[contestant];
          // berisi satu nama (pemenang yang baru ditentukan)
          winners = [contestant];
          // jika jomlah vote peserta saat ini = jumlah vote tertinggi sejauh ini , maka peserta tersebut yang menang
      } else if (voteCount[contestant] === maxVotes) {
          // menambhakan nam apeserta saat ini dengan push()
          winners.push(contestant);
      }
  }
  
  // memeriksa panjang elemen dari aray 'winners' adalah 1
  if (winners.length === 1) {
      return `Selamat juaranya adalah ${winners[0]}, dengan total votes yang diterima ${maxVotes}`;
  // jika tidak = 1 maka cetak ini
  } else {
      return "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini";
  }
}

console.log(americanGotTalent(['Lee Min Ho', 'Arby','Arby', 'Darren McFlurry', 'Lee Min Ho', 'Lee Min Ho']));
// Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 3

console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']));
//  Mohon maaf juara tidak bisa ditentukkan dalam minggu ini

console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby']));
// Selamat juaranya adalah Arby, dengan total votes yang diterima 2


//  voteCount[contestant] = 1;
// jika tidak ada nama peserta saat ini yang disimpan di voteCount, maka akan dilanjutkan ke sini
// voteCount[contestant] = 1; = menambahkan properti baru ke object votecount (peserta menerima satu voting karena inisialisasi dengan nilai satu)

// voteCount[contestant]++; : voteCount[contestant tidak undifined] maka ini akan meningkatkan nilai properti yang sesaui dengan nama peserta saat ini di voteCount dg 1

//  return `Selamat juaranya adalah ${winners[0]}, dengan total votes yang diterima ${maxVotes}`;
// jika 1 , maka akan mendapat pesan dibawah. Jika satu pemenang, maka kodenya mengembalikan pesan yang berisi nama pemenang ( winners) dan jumlah voting tertinggi (maxVotes)
