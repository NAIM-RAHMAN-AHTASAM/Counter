let counter = document.querySelector(".counter");
let startCount = 0;
let endCount= counter.dataset.number;
let speedCount = counter.dataset.speed;

function counterjs(){
  counter.innerHTML=startCount
  if (startCount===parseInt(endCount)) {
    clearInterval(stop)
  }
}
let stop = setInterval(()=>{
  counterjs();
  startCount++
},speedCount)

// setInterval(()=>{
//   console.log("ami");
// },3000)














































// let arr=["naim","shirt","pant","walet"]
// console.log("i love this " + arr[1]);
// console.log(`i love this  ${arr[2]}`);
// arr.push("panjabi");
// arr.unshift("panjabi")
// arr.pop()
// arr.shift();
// arr.splice(1,null,"full shirt")
// arr.splice(1,3,"full")
// console.log(arr);


// function calculation(number1,number2){
//   return number1+ number2;
// }



// function substraction(number1,number2){
//   return number1-number2;
// }
// console.log(calculation(20,10));
// console.log(substraction(20,10));

//date function


// let today = new Date();
// let single;
// single = today.getMonth();
// single = today.getDate();

// single = today.getFullYear();

// console.log(single);


//loopp
// for (let i = 0;  i < 100; i++){
//   if (i%2==0) {
//     console.log(`${i} this is even number`);
//   }
//   else{
//     console.log(`${i} this is odd number`);
//   }
// }
