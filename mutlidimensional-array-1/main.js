function travelSeat(passengers, seatColumn) {
    // mengurutkan daftar penumpang dengan metode sort()
    passengers.sort();

    // cek angka valid (> -/0) pada seatColumn
    if (seatColumn <= 0){
        return "Invalid number";
    }

    // cek penumpang masuk dalam daftar atau tidak
    if (passengers.length === 0) {
        return "Oops! tickets not sold!";
    }

    // menghitung jumlah baris tempat duduk yang diperlukan menurut passengers dan seatColumn
    const numRows = Math.ceil(passengers.length / seatColumn);

    // membuat array multidimensi untuk tempat duduk 
    let seatArrangement = [];

    // mengatur tempat duduk dalam bentuk array mutldimensi dengan "Seat available" atau 'passengers'
    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let a = 0; a < seatColumn; a++) {
            if (passengers.length > 0) {
                row.push(passengers.shift());
            }else{
                row.push("Seat available");
            }
        }
        seatArrangement.push(row);
    }
    // mengembalikan hasil pengaturan temapt duduk
    return seatArrangement;
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat(["Kakek", "Nenek"],9 ));
console.log(travelSeat([], 4));


// Math.ceil() = membulatkan hasil perhitungan ke atas (bilangan bulat terdekat). jika 3.1 => 4. Beda dg Math.floor = bulatkan ke bawah / hasil hitung paling mendekati, jika 6.8 => 6
// for untuk perulangan agar numRows memenuhi syarat untuk diperiksa kondisinya
// row[] = menyimpan nama penumpang dalam satu baris 
// for kedua digunakan untuk mengulang seatColumn agar kolom tempat duduk yang diinputkan dapat dilihat kondinya dan diambil nilainya
// shift() = mengambil penumpang pertama dari daftar penumpang. Sehingga efeknya, menambahkan ke array 'row' = penumpang ditempatkan dalam kursi sesuai dg urutan dalam daftar
// shift() = menghapus dan mengembalikan elemen pertama array
// push() = memasukkan elemen array baru ke posisi akhir dan mengembalikan length dari array