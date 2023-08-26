//import theo named
// import { sum,minus } from "./app.js";

//import 
// import pi from "./app.js";

//  console.log(sum(10,20));
//  console.log(minus(50,40));
//  console.log(pi);

 //
// Bài tập:
// Bài 1: Cho 1 mảng các chuỗi, sử dụng map để tạo ra mảng mới chứa các chuỗi viết hoa
// input: ["hello", "hi", "heyy"]
// ouput: ["HELLO", "HI", "HEYY"]

let arr = ["hello","hi","heyy"];
console.log(arr);
function arr3 (value) {
     let newArr = value.toUpperCase();
     return newArr;    
}
let arr2 = arr.map(arr3);
console.log(arr2);

// Bài 2: Cho 1 mảng chứa các đối tượng sinh viên, sử dụng map để in các sinh viên ra bảng (table)
// input:
/* 
[
   {id: 1, name: "StudentA", age: 25, address: "HN", phone: "02458643"},
   {id: 2, name: "StudentB", age: 20, address: "HCM", phone: "02321515"},
   {id: 3, name: "StudentC", age: 22, address: "DN", phone: "09825314"},
   {id: 4, name: "StudentD", age: 23, address: "HP", phone: "031515554"},
   {id: 5, name: "StudentE", age: 19, address: "HN", phone: "0358786454"},
]
 */

let arrObject = [
    {id: 1, name: "StudentA", age: 25, address: "HN", phone: "02458643"},
   {id: 2, name: "StudentB", age: 20, address: "HCM", phone: "02321515"},
   {id: 3, name: "StudentC", age: 22, address: "DN", phone: "09825314"},
   {id: 4, name: "StudentD", age: 23, address: "HP", phone: "031515554"},
   {id: 5, name: "StudentE", age: 19, address: "HN", phone: "0358786454"},
];
// console.log(arr);
newTable();
function newTable(){
    let son = document.querySelector("tbody");
    let danhSach = arrObject.map(inRa);
    son.innerHTML=danhSach.join('');
    // console.log(danhSach);
};
function inRa(item){
    return `<tr>
     <td>${item.id}</td>
     <td>${item.name}</td>
     <td>${item.age}</td>
     <td>${item.address}</td>
     <td>${item.phone}</td>
     </tr>`
}


// Bài 3: Sử dụng filter lọc ra các số lẻ trong mảng
// input: [50, 30, 45, 20, 89, 60]
// output: [45, 89]

let newArr = [50, 30, 45, 20, 89, 60];
let numbers = newArr.filter((value,index)=>value %2 !=0);
console.log(numbers);

// Bài 4: Cho mảng chứa các đối tượng sản phẩm với trường price,
// sử dụng filter lọc ra sản phẩm nhỏ hơn 50
// input:
/* 
[
   {id: 1, name: "Áo thun", quantity: 10, price: 20},
   {id: 2, name: "Quần âu", quantity: 20, price: 60},
   {id: 3, name: "Giầy", age: quantity: 30, price: 30},
   {id: 4, name: "Áo sơ mi", quantity: 40, price: 40},
   {id: 5, name: "Quần bò", quantity: 50, price: 50},
]
 */
let products = [
    {id: 1, name: "Áo thun", quantity: 10, price: 20},
    {id: 2, name: "Quần âu", quantity: 20, price: 60},
    {id: 3, name: "Giầy", quantity: 30, price: 30},
    {id: 4, name: "Áo sơ mi", quantity: 40, price: 40},
    {id: 5, name: "Quần bò", quantity: 50, price: 50},
 ];
 let newFilter = products.filter((value)=>{
        if (value.price < 50){
            return value;
        }
     });
 console.log(newFilter);

// Bài 5: Cho mảng các chuỗi, sử dụng find để tìm chuỗi có độ dài lớn hơn 8 ký tự
// input: ["Welcome To Rikkei Academy", "Going to homework", "To Sleep"]
// output: To Sleep

// Bài 6: Cho mảng chứa các đối tượng sản phẩm với trường "quantity",
// sử dụng find để tìm sản phẩm có số lượng tồn kho bằng 0
// input:
/* 
[
   {id: 1, name: "Áo thun", quantity: 10, price: 20},
   {id: 2, name: "Quần âu", quantity: 5, price: 60},
   {id: 3, name: "Giầy", age: quantity: 0, price: 30},
   {id: 4, name: "Áo sơ mi", quantity: 6, price: 40},
   {id: 5, name: "Quần bò", quantity: 4, price: 50},
]
 */

// output: {id: 3, name: "Giầy", age: quantity: 0, price: 30},