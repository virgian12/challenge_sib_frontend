/**
 * Terdapat sebuah Array dari nama Makanan
 * ['Bakso', 'Ubi', 'Nasi Goreng', 'Kolak', 'Bubur', 'Onde-Onde']
 * 
 * Tampilkan makanan yang memiliki huruf yang dicari
 */

 function findFood(foods, letter) {
     // code here
     // buat array kosong = simpan makanan sesuai dengan pencarian
     const searchFoods = [];
    
    // iterasi lewat array makanan
    for (let i = 0; i < foods.length; i++) {
        const foodName = foods[i];
        
        // cek huruf pencarian ada di dalam nama makanan (case - sensitive)
        if (foodName.includes(letter)) {
            searchFoods.push(foodName); // tambah makanan dalam array hasil
        }
    }
    return searchFoods;
    
    // mencari elemen dalam array ( khusus untuk kapital yang mau dicari)
    const searchResult = findFood(foods, 'B');
  }
  
  console.log(findFood(['Bakso', 'Ubi', 'Nasi Goreng', 'Kolak', 'Bubur', 'Onde-onde'], 'o')) // ['Bakso', 'Nasi Goreng', 'Kolak', 'Onde-onde'] 
  
  console.log(findFood(['Bakso', 'Ubi', 'Nasi Goreng', 'Kolak', 'Bubur', 'Onde-onde'], 'B')) // ['Bakso', 'Bubur']
  
  console.log(findFood(['Bakso', 'Ubi', 'Nasi Goreng', 'Kolak', 'Bubur', 'Onde-onde'], 'u')) // ['Bubur'] 


  //   includes() = memeriksa apakah sebuah string atau array mengandung nilai tertentu 