// Menghilangkan duplikasi dari array
// [CONSTRAINTS]
// tidak boleh menggunakan built in function apapun kecuali .push()

function uniqueValue(arr) {
    const uniqueArr = []; //simpan elemen array 'arr'
  
    //   menentukan apakah elemen yg diiterasi merupakan duplikat atau tidak 
      for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
    
        // Periksa apakah elemen telah ada dalam uniqueArr
        for (let j = 0; j < uniqueArr.length; j++) {
          if (arr[i] === uniqueArr[j]) {
            isDuplicate = true;
            break;
          }
        }
    
        // Jika bukan duplikat, tambahkan elemen ke uniqueArr
        if (!isDuplicate) {
          uniqueArr.push(arr[i]);
        }
      }
    
      return uniqueArr;
}
console.log(uniqueValue(['Sepatu', 'Sepatu', 'Meja', 'Meja'])) // [ 'Sepatu', 'Meja']
console.log(uniqueValue(['Baju', 'Penghapus', 'Penghapus', 'Sepatu', 'Penghapus'])) 
// ['Baju', 'Penghapus', 'Sepatu']
console.log(uniqueValue(['Meja','Sepatu', 'Meja','Sepatu', 'Meja', 'Meja'])) // [ 'Sepatu', 'Meja']
// sama kaya american got talent