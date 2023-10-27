function discountChecker(costumers, date) {

    // menentukan tanggal pemberian diskon
    const isEvenDate = isEvenDay(date);
   
    // metode filter()  untuk mengfilter costumer pada array 'customers'
    const filterCostumers = costumers.filter (costumer => {
        // destrukturisasi / pembongkaran array agar enak dalam pengambilan nilai
        const [price, status] = costumer;
        // proses mengambil nilai harga dari karakter $
        const totalPrice = parseInt(price.slice(2));
        // menentukan harga barang ganjil atau genap
        const isEvenPrice = totalPrice % 2 === 0;
        
        // menentukan diskon berdasarkan status
        if (status === "non-member") {
            // diskon untuk customer berdasarkan tanggal dan harga barang (tenary expression = mengembalikan nilai berdasarkan beberapa kondisi)
            return isEvenDate ? isEvenPrice : !isEvenPrice;
        } else {
            return true; //costumer "member" yng tidak sesuai syarat, tidak dapat diskon
        }
    });
    
    return filterCostumers;
}
    // mengecek tanggal genap ganjil
    function isEvenDay(date) {
        // mengambil tanggal (hari) dari tanggal yang diberikan parameter 'date'
        const [day] = date.split('-').map(Number);
        return day % 2 === 0;
}

let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]

console.log(discountChecker(costumers, "28-10-2022"))

var costumers2 = [
    ["$ 754", "member"],
    ["$ 233", "member"],
    ["$ 31", "non-member"],
    ["$ 332", "non-member"]
]

console.log(discountChecker(costumers2, "11-06-2022"))


// price.slice(2) = menghilangkan karakter $ sehingga tersisa angkanya saja 
// parseInt() = mengonversi string angka menjadi int (bil bulat) = angka harga barang
// kasus tenary expression =  jika isEvenDate genap, maka isEvenPrice true (?), jika ganjil maka !isEvenPrice (:)
// date.split('-') = memecah string tanggal jadi array yg pake karakter "-" sebagai pemisah. ex = 28-10-2022 => "28", "10", "2022"
// const [day] = teknik pembongkaran array untuk ngambil elemen pertama dari array yg sdh diubah jadi angka  (bagian hari)