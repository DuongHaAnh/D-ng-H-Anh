const express = require('express')
const app = express()
const port = 3000

// for (let i = 1; i <= 20; i++){
//     if (i % 2 === 0){
//         i += i++
//         console.log(i);
//     }
// }


// let sum = 0
// for (i = 1; i<=20; i++){
//     if (i % 2 === 0){
//         sum = sum + i        KET QUA
//     }
// }
// console.log(sum)


// let sum = 0
// for (i = 2; i*i <= a ; i++) {
//     if (a % i === 0){
//         sum = sum + i
//     }
// }
// console.log(sum);

// let soNT = true
// let sum = 0
// for (i = 2; i <= 100 ; i++) {
//     for (let j = 2; j < j - 1; j++){
//         if ( i % j === 0 ){
//             soNT = false
//             break;
//         }                                 KET QUA
//     }
//     if (soNT){
//         sum += i;
//     }
//     soNT = true
// }
// console.log(sum);


function giaiThua(n){
    if (n === 0) { 
        return 1;
    }
    return n*giaiThua(n - 1)
}
console.log(giaiThua(9));

// function tinhTong(n){
//     let a = 0
//     let i = 0
//     while (i <= 20){
//         if (i % 2 === 0){a += i}
//         i++
//     }
// console.log(a)
// }






// function timSoNguyenTo(a){
//     if (a < 2) return false
//     if (a === 2) return true;
//     for (i = 2; i*i <=a; i++) {
//         if (a % i === 0) return false;
//     }
//     return true
// }
// let kq = timSoNguyenTo(45)
// console.log(kq)




app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
})