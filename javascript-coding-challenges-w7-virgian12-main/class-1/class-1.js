class Shape {
  // your solution here
  constructor (name, sides, length){
    this.name = name;
    this.sides = sides;
    this.length = length;
  }

calcPerimeter() {
  const perimeter = this.sides * this.length;
   return `The perimeter of ${this.name} is ${perimeter}`;
  }
}

console.log(new Shape("Square", 4, 12).calcPerimeter()); // The perimeter of Square is 48
console.log(new Shape("Square", 4, 33).calcPerimeter()); // The perimeter of Square is 132
console.log(new Shape("Triangle", 3, 24).calcPerimeter()); // The perimeter of Square is 72
console.log(new Shape("Triangle", 3, 8).calcPerimeter()); // The perimeter of Square is 24

// this. = object pemilik baris coding yang sedang dieksekusi (jika dipanggil dalam suatu object)

// proses dalam method calcPerimeter
// baris 10 => proses menghitung keliling dengan mengalikan sisi dengan panjang sisi dan hasil disimpan pada variabel perimeter
// baris 11 => dikembalikan dengan string yang mengambil nilai dari parameter yang sudh ditentukan