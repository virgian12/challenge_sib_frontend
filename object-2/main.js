function stockOpname(items) {

    // cara 1
    // // Inisialisasi variabel stockItems sebagai objek kosong
    // let stockItems = {};

    // // Loop melalui setiap item pada array items
    // for (let i = 0; i < items.length; i++) {
    //     let itemName = items[i][0];  // Nama item
    //     let soldAmount = items[i][1];  // Jumlah item yang terjual

    //     // Jika item sudah ada dalam stockItems, kurangi jumlahnya
    //     if (stockItems[itemName]) {
    //         stockItems[itemName] -= soldAmount;
    //     } else {
    //         // Jika item belum ada dalam stockItems, inisialisasi dengan negatif soldAmount
    //         stockItems[itemName] = -soldAmount;
    //     }
    // }

    // // Kembalikan objek stockItems yang sudah diperbarui
    // return stockItems;

    // Inisialisasi variabel stockItems sebagai objek yang berisi stok awal
     let stockItems = {
         "Ram": 10,
         "Motherboard": 4,
         "Processor": 5,
         "SSD": 8,
         "PSU": 12,
         "Cooling": 5, 
        };
    
        // Jika parameter items tidak ada atau kosong, tampilkan pesan error
        if (items.length === 0) {
            return "Data not found";
        }
    
        // Loop melalui setiap item pada array items
        for (let i = 0; i < items.length; i++) {
            let itemName = items[i][0];  // Nama item
            let soldAmount = items[i][1];  // Jumlah item yang terjual
    
            // Periksa apakah itemName ada dalam stockItems
            // hasOwnProperty() = memeriksa apakah sebuah objek memiliki properti tertentu atau tidak. metodenya mengembalikan nilai true jika objek tsb punya properti yg sama dg argumen
            if (stockItems.hasOwnProperty(itemName)) {
                // Kurangi jumlah stok dengan jumlah yang terjual
                stockItems[itemName] -= soldAmount;
            }
        }
    
        // Kembalikan objek stockItems yang sudah diperbarui
        return stockItems;
    
    // // cara 3
    // // buat objek untuk simpan stok awal
    // const stockItems = {
    //     "PSU": 0,
    //     "SSD": 0,
    //     "Motherboard": 0,
    //     "Ram": 0,
    //     "Cooling": 0,
    //     "Processor": 0 
    // };

    // // proses isi object stockItems dengan data stok awal
    // for (const item of items) {
    //     const itemName = item[0]; //nama item
    //     const initialStock = item[1]; //jumlah stok awal
    //     stockItems[itemName] = initialStock;
    // }

    // return (salesData) => {
    //     // cek parameter salesData = array kosong
    //     if (salesData.length === 0) {
    //         return "Data not found";
    //     }

    //     // iterasi lewat data penjualan
    //     for (let i = 0; i < salesData.length; i++) {
    //         const sale = salesData[i];
    //         const itemName = sale[0]; //nama item
    //         const quantitySold = sale[1]; //jumlah yang terjual

    //         // memeriksa item ada dalam stockItems
    //         if (stockItems[itemName] !== undefined) {
    //             // mengurangkan jumlah item yang terjual dari stock
    //             stockItems[itemName] -= quantitySold;
    //         }
    //     }
    //     return stockItems;
    // };


}

let items1 = [
    ["PSU", 6],
    ["SSD", 3],
    ["Motherboard", 3],
    ["Ram", 2],
    ["Cooling", 4],
    ["Processor", 5],
]

let items2 = [
    ["SSD", 5],
    ["Motherboard", 4],
    ["Processor", 1],
    ["PSU", 3],
    ["Cooling", 5],
    ["Ram", 5],
]

console.log(stockOpname(items1));
console.log(stockOpname(items2));
console.log(stockOpname([]));
