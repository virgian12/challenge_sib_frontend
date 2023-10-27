/*

Diberikan sebuah function subset() yang menerima 2 parameter berisi
array. Yaitu arr1 dan arr2 yang keduanya berisi angka.
Function subset akan mengecek apakah arr1 merupakan subset dari arr2.
Artinya, semua angka di arr1 harus berada di arr2.
Angka di arr1 adalah angka unik, sehingga tidak ada angka yang muncul
2 kali di arr1.
 
RULES:
Dilarang menggunakan built-in function selain .push()
*/

function subset(arr1, arr2) {
    // Your code goes here...
    // Loop melalui setiap angka dalam arr1
    for (let i = 0; i < arr1.length; i++) {
      let found = false;

      // Loop melalui arr2 untuk mencari apakah angka dari arr1 ada di arr2
      for (let j = 0; j < arr2.length; j++) {
          if (arr1[i] === arr2[j]) {
              found = true;
              break;
          }
      }

      // Jika angka tidak ditemukan di arr2, maka arr1 bukan subset dari arr2
      if (!found) {
          return false;
      }
  }

  // Jika semua angka dari arr1 ditemukan di arr2, maka arr1 adalah subset dari arr2
  return true;

  }
  
  console.log(subset([3, 9, 5], [1, 3, 9, 5, 8, 44])) //true
  console.log(subset([1, 3], [1, 3, 5, 7, 8])) //true
  console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])) //true
  console.log(subset([1, 3], [1, 33])) //false
  console.log(subset([1, 3, 10], [10, 8, 8, 8])) //false