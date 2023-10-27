const onMyBirthday = (isMayaSick, cakes) => {
  // your solution heres
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isMayaSick) {
        resolve(cakes);
      } else {
        reject(new Error("I am sad"));
      }
    }, 2000);
  });
};

/*
* Output
* I have 2 cakes
* Let's Party
*/
onMyBirthday(false, 2)
  .then((cakes) => {
    console.log(`I have ${cakes} cakes`);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Let's Party")
  })

/*
* Output
* I am sad
* Let's Party
*/
onMyBirthday(true, 4)
  .then((cakes) => {
    console.log(`I have ${cakes} cakes`);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Let's Party")
  })

  // new Promise = membuat object 'Promise' dengan parameter accept (menyetujui) dan reject (menolak)
// new Error = object 'Error' yang berisi pesan jika tertolak
//  .then() = metode yang menerima fungsi yang akan dijalankan