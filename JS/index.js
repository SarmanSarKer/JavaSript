// // using function calling
// function square() {
//     var num = 16;
//     document.write("<br/> Result is: " + num + num);
//   }
//   square();
//   //using parmetarized function calling
//   function square_p(num) {
//     document.write("<br/> Parmetarized function's result is: " + num + num);
//   }
 // using function addition
  function Intotal() {
      let num1 = 4;
      let num2 = 5;
      let num3 = 6;
      document.write("<br/> Addition function's Result is: " + num1+num2+num3);
      document.write("<br/> Substraction function's Result is: " + num3-num2-num1);
      document.write("<br/> Multiplication function's Result is: " + num1*num2*num3);
      document.write("<br/> Division function's Result is: " + num1/num2/num3);
  }
  Intotal();
  //using parametarized function calling
  function Total(Num1,Num2,Num3){
    document.write("<br/> Addition value is: " + (Num1+Num2+Num3));
    document.write("<br/> Substraction value is: " + (Num1-Num2-Num3));
    document.write("<br/> Multiplication value is: " + (Num1*Num2*Num3));
    document.write("<br/> Division value is: " + (Num1/Num2/Num3));
  }
let num1 = Number(prompt("Enter a Number"));
let num2 = Number(prompt("Enter a Number"));
let num3 = Number(prompt("Enter a Number"));
Total(4,5,6);
  