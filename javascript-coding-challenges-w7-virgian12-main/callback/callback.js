function passwordChecker(name, password, callback) {
   // your solution here
   if (name === 'john' && password === '123doe') {
    callback ('Welcome back, John Doe!')
   } else {
    callback ('Username or password is wrong')
   }
}

function showResult(message) {
  // This function basically is used for showing the result of passwordChecker
  // your solution here
  console.log(message);
}

passwordChecker("john", "123doe", /* put your callback */ showResult); // Welcome back, John Doe!
passwordChecker("may", "mayandjune", /* put your callback */ showResult); // Username or password is wrong!

// callback () = callback merupakan function. kerjanya adalah mempassing ke dalam function lain sebagai argument, yang kemudian di eksekusi oleh function yang membungkus function callback tersebut.