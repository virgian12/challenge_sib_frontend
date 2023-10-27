## Password Checker
### Description

Diberikan sebuah function `passwordChecker` yang berfungsi untuk simulasikan program sederhana untuk mengecek username dan password dalam database.

Function ini akan menerima 3 parameter sebagai berikut
- Parameter pertama berupa `string`, berisikan nama pengguna
- Parameter kedua berupa `string`, berisikan password pengguna
- Parameter ketiga berupa `function`, yang berguna sebagai callback yang akan dijalankan setelah 2 detik function `passwordChecker` dipanggil

Function `passwordChecker` akan mengirimkan hasil pengecekan user dan password ke dalam callback. Yang mana apabila **name = john** dan **password = 123doe** maka akan mengeluarkan output **Welcome back, John Doe!**, selain itu akan mengeluarkan output **Username or password is wrong!**

### Examples
````
// Input
name = john
password = 123doe
// Output
Welcome back, John Doe!
````
````
// Input
name = may
password = mayandjune
// Output
Username or password is wrong!
````