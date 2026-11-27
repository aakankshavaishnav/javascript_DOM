
// // 1. Double click on heading
// let a = document.getElementById("head");

// a.addEventListener("dblclick", function() {
//     a.innerHTML = "Hello";
// });


// // 2. Generate random number on button click
// let b = document.querySelector("#btn");

// b.addEventListener("click", func);

// function func() {
//     let num = Math.random();
//     console.log(num);
// }


// // 3. Change heading color
// let c = document.querySelector("#btn2");

// c.addEventListener("click", function() {
//     a.style.color = "red";
// });


// // 4. Change paragraph text
// let d = document.querySelector("#tr");

// d.addEventListener("click", function() {
//     d.innerHTML = "True";
// });


// // 5. Generate random number using input button
// let e = document.querySelector(".a");

// e.addEventListener("click", function() {
//     console.log(Math.random());
// });
// change page color
let a = document.querySelector("#btn2")
a.addEventListener("click", funct)
function funct() {
        let a = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let c = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor =`rgb(${a}, ${b}, ${c})`
}
let inp=document.getElementById("inp")
inp.addEventListener("keypress",key)
function key(e){
if (e.key=="f"){
    console.log("in function")
     let a = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let c = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor =`rgb(${a}, ${b}, ${c})`
}
}
let form =document.getElementById("form")
let n=document.getElementById("firstName")
let e=document.getElementById("email")
console.log(form)
form.addEventListener("submit",submittedData)
function submittedData(even){
    let m=n.innerHtml;
    console.log(n)
}

