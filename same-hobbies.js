/*
===
Same Hobbies
===
Buatlah sebuah fungsi yang bernama sameHobbies yang akan menerima dua parameter
OBJECT, kemudian akan membandinkan apakah dari kedua object tersebut, terdapat
hobi yang sama dari keduanya.

Contoh :

  let alan = {
    name: 'alan',
    hobbies: ['Running', 'Driving']
  }
  
  let walker = {
    name: 'walker',
    hobbies: ['Swimming', 'Running', 'Driving', 'Cleaning']
  }
  
  console.log(sameHobbies(alan, walker)) // ['Swimming', 'Driving']

sameHobbies()
*/


function sameHobbies(obj1, obj2) {
  if (!obj1 || !obj2) {
    return []; // Kembalikan array kosong jika salah satu objek tidak ada
}

const hobbies1 = obj1.hobbies || [];
const hobbies2 = obj2.hobbies || [];

// Gunakan Set untuk menghapus duplikasi dan Intersection untuk mencari kesamaan
const intersection = [...new Set(hobbies1)].filter(hobby => hobbies2.includes(hobby));

return intersection;
}
  
  let semmi = {
    name: 'semmi',
    hobbies: ['Sleeping', 'Dancing', 'Coding']
  }
  
  let bimo = {
    name: 'bimo',
    hobbies: ['Sleeping', 'Cooking', 'Coding', 'Cleaning']
  }
  
  console.log(sameHobbies(semmi, bimo)) // ['Sleeping', 'Coding']

  let person1 = {
    name: 'person1',
    hobbies: ['Reading']
  }
  
  let person2 = {
    name: 'person2',
    hobbies: ['Reading']
  }
  
  console.log(sameHobbies(person1, person2)) // ['Reading']

  let person3 = {
    name: 'person3',
    hobbies: ['Swimming', 'Hiking']
  }
  
  let person4 = {
    name: 'person4',
    hobbies: ['Cooking', 'Painting']
  }
  
  console.log(sameHobbies(person3, person4)) // []

  let person5 = {
    name: 'person5',
    hobbies: ['Reading', 'Gardening', 'Cooking']
  }
  
  let person6 = {
    name: 'person6',
    hobbies: ['Cooking', 'Reading', 'Dancing']
  }
  
  console.log(sameHobbies(person5, person6)) // ['Reading', 'Cooking']

  let person7 = {
    name: 'person7',
    hobbies: ['Reading', 'Reading', 'Cooking']
  }
  
  let person8 = {
    name: 'person8',
    hobbies: ['Cooking', 'Reading', 'Dancing']
  }
  
  console.log(sameHobbies(person7, person8)) // ['Reading', 'Cooking']

  let person9 = {
    name: 'person9',
    hobbies: []
  }
  
  let person10 = {
    name: 'person10',
    hobbies: []
  }
  
  console.log(sameHobbies(person9, person10)) // []
  