## My Birthday
### Description

Temanku Maya berjanji untuk membuatkanku kue untuk ulang tahunku. Jika semua berjalan lancar dan Maya tidak sakit, aku akan punya beberapa kue. Sebaliknya, apabila Maya jatuh sakit, aku tidak punya kue untuk ulang tahunku. Meskipun begitu, pesta ulang tahunku akan tetap berjalan.

Diberikan sebuah *function*  `onMyBirthday`, sebuah function yang akan menentukan apakah ada kue di pesta ulang tahun atau tidak.

Function ini akan menerima 2 parameter sebagai berikut
- Parameter pertama berupa `boolean`, berisikan kondisi Maya (sakit atau tidak)
- Parameter kedua berupa `number`, berisikan jumlah kue yang akan diberikan oleh Maya

Function ini akan mengembalikan Promise yang hasil dari promise tersebut akan dikembalikan dalam waktu 2 detik (Hint: Gunakan setTimeout).

### Examples
````
// Input
isMayaSick = false
cakes = 2
// Output
I have 2 cakes
Let's Party
````
````
// Input
isMayaSick = true
cakes = 4
// Output
I am sad
Let's Party
````