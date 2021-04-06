// javascript/basic.js

var num1; // undefined
num1 = 10; // number
num1 = 'Hello'; // String
num1 = false; // boolean
num1 = null; // object
num1 = {
    name: 'Hong',
    age: 20
} // object
num1 = []; // object
num1[0] = 10;
num1[1] = 20;
num1[2] = 'Hello';
num1 = function() {
    window.alert('Hello');
} // function

// console.log(num1()); : function을 실행
// console.log(typeof num1); : 타입확인

// var num1; var : 변수 중복선언 O
let num2; // let : 변수 중복선언 X 
num2 = 10;

{
    let num2;
    num2 = 20;
    console.log('{ num2: } ' + num2);
} // {} 안의 변수는 로컬변수
num2 = 15;
console.log('{ num2: } ' + num2);

const num3 = 77;
// num3 = 78; const : 상수선언


