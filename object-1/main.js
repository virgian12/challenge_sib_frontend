function counterApp(arr) {
    // Mengecek apakah parameter arr tidak terdefinisi (undefined)
    if (arr === undefined) {
        return "Invalid input";
    }
    
     // Mengecek apakah array kosong
    if (arr.length === 0) {
        return "Data not found";
    }
    
    
    // Membuat objek untuk menghitung jumlah munculnya elemen
    const countObject = {};

    // Menggunakan loop untuk menghitung jumlah munculnya elemen
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // memeriksa elemen yang sedang diiterasi 'element' sudah ada di dalam objek 'countObject'
        if (countObject[element] === undefined) {
            countObject[element] = 1; // Inisialisasi jika belum ada
        } else {
            countObject[element]++; // Increment jika sudah ada/ menmbah kemunculan elemen
        }
    }
    
    // Mengembalikan objek hasil perhitungan
    return countObject;
}
   
console.log(counterApp(['Hikman', 'Naufal', 'Kanda', 'Arya', 'Kanda', 'Hikman', 'Naufal', 'Hikman', 'Kanda', 'Kanda']));
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

// function ini tujuannya adalah menghitung jumlah kemunculan setiap elemen dalam array dan dikembalikan objek yang berisi jumlah kemunculan setiap elemennya
// jika countObject[element]  = undifined => elemen belum ada di countObject