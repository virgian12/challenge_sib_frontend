// menghapus angka terkecil,, tanpa ubah susunan array
// bila terjadi duplikasi angka terkecil,, hapus juga

function remove(arr){
    if (arr.length === 0) {
        return arr; // Jika array kosong, tidak ada yang dihapus
      }
    
      // Temukan angka terkecil dalam array
      let smallest = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
          smallest = arr[i];
        }
      }
    
      // Buat array baru tanpa angka terkecil
      const newArr = [];
    
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== smallest) { 
          newArr.push(arr[i]);
        }
      }
    
      return newArr;
}
console.log(remove([5,3,1,4,9]));//[ 5, 3, 4, 9 ]
console.log(remove([5,3,1,4,9,2,1,3]));//[ 5, 3, 4, 9, 2, 3 ]
console.log(remove([2, 2, 2, 2, 2])); // [2, 2, 2, 2, 2] (tidak ada yang dihapus)
console.log(remove([7, 2, 5, 1, 3, 1, 6, 2, 4])); // [7, 2, 5, 3, 6, 2, 4]


//     if (arr[i] !== smallest) = memeriksa elemen saat ini dalam iterasi (arr[i]) tidak sama dengan angka terkecil dalam array (smallest)
// elemen-elemen yang tidak sama dengan angka terkecil akan ditambahkan ke dalam array baru (newArr). Sehingga hanya satu angka terkecil yang akan dihapus, sementara elemen-elemen lain akan dipertahankan dalam newArr.