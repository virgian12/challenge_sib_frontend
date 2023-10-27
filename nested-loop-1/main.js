function buyThemAll(books, budget) {
   // Menginisialisasi variabel untuk menghitung jumlah buku yang dibeli dan total belanja
   let totalBukuBeli = 0;
   let totalBelanja = 0;

   // Membagi string buku menjadi array buku ('The Alchemist:55000,The Hobit:20000') => (['The Alchemist:55000'], ['The Hobit:20000'])
   const daftarBuku = books.split(',');

   // Loop untuk memproses setiap buku
   for (let i = 0; i < daftarBuku.length; i++) {
       // Memecah setiap buku menjadi nama dan harga
    //    memecah string yang mewakili informasi tentang satu buku dalam format "nama buku:harga"
       const bookInfo = daftarBuku[i].split(':');
    //    mengambil nama buku dari array bookInfo, mengakses nama buku secara terpisah
       const namaBuku = bookInfo[0];
    //    mengambil harga buku dari bookInfo dan mengonversinya ke int
       const hargaBuku = parseInt(bookInfo[1]);

       // Mengecek apakah buku masih bisa dibeli dengan budget yang tersisa
       if (totalBelanja + hargaBuku <= budget) {
           totalBelanja += hargaBuku;
           totalBukuBeli++;
       } else {
           // Jika tidak, keluar dari loop karena buku berikutnya akan lebih murah
           break;
       }
   }

   // Mengembalikan hasil pembelian buku
   if (totalBukuBeli === 0) {
       return "Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah " + budget + ".";
   } else {
       return "Afista membeli " + totalBukuBeli + " buku yaitu " + daftarBuku.slice(0, totalBukuBeli).join(', ') + ". Total belanja " + totalBelanja + ", sisa uang Afista adalah " + (budget - totalBelanja) + ".";
   }

 
}
  
  console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
  console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 300000)); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
  console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 20000)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
  console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.