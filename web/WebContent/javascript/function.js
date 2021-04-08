let result = square(3); // function문은 호이스팅 적용(호출문이 먼저 나와도 된다)
// 정의문
function square(num) {
    if (num == null) {
        return 0;
    } else if (isNaN(num)) { // 숫자가 아닐때
        return 0;
    }
    return num * num;
} // 타입 선언될 수 없음. 변수만 선언


// console.log(fnc(3)); : 변수에 담으면 호이스팅 적용X
// 표현식
let fnc = function (num) {
    if (num == null) {
        return 0;
    } else if (isNaN(num)) {
        return 0;
    }
    return num * num;
} // fuc변수에 function 정의구문
console.log(fnc(3));

//
let count = 0;
function myFnc() {
    let cnt = 0;
    count++;  // function 안에서 전역변수(count) 점근가능
    cnt++;
    document.write(cnt + '<br>');
    // document.write(count + '<br>'); : 1
}
myFnc();

let theFnc = function () {
    let cnt = 0; // 로컬변수(cnt) 호출할때마다 초기화 됨
    count++;
    cnt++;
    document.write(cnt + '<br>');
    // document.write(count + '<br>'); : 누적되어 2
}
theFnc();

let colors = ['yellow', 'red', 'blue', 'aqua'];
let i = 0;
function changeColor() {
    let bdy = document.getElementById('bdy'); // body태그의 아이디 적용 (id하나만)
    console.log(bdy);
    bdy.style.backgroundColor = colors[i % 4]; // i로만 하면 값이 없으면 색이안바뀜 나머지로 해야 0,1,2,3 계속 돌아감
    i++;

    // bdy = document.getElementsByTagName('body'); : body태그 자체에 적용 (여러건)
    // console.log(bdy[0]);
    // bdy[0].style.backgroundColor = 'yellow';
}

// function이 매개값으로 쓰일수 있다 
function map(func, ary) {
    let result = [];
    for (let i = 0; i < ary.length; i++) {
        result[i] = func(ary[i]);
    }
    return result;
}

let fun = function (x) {
    return x * x;
}
let arr = [0, 1, 2, 4];

let result = map(fun, arr);
console.log(result);

// 매개값이 가변적일때
function callFunc() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]; // 매개값을 처리해주는 object : arguments
    }
    return sum;
}
console.log(callFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 매개값에 선언된 배열이 들어오는 것과 같다
function callArySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // 매개값을 처리해주는 object : arguments
    }
    return sum;
}
let arry = [1, 2, 3, 4, 5]; // 매개값이 되는 배열
console.log(callArySum(arry));

// 재귀함수 : 함수안에서 자기자신을 계속 호출
let factorial = function fac(num) {
    return num < 2 ? 1 : num * fac(num - 1);
}
result = factorial(4);
console.log(result);

//
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside; // function 정의구문을 리턴가능
}
let fn_inside = outside(2);
let res = fn_inside(3); // =outside(2)(3);
console.log(res);

res = outside(2)(3);
console.log(res);

// 메소드의 매개값으로 function정의
let numbers = [23, 45, 33, 56, 12];
let sum = 0;
let list = document.getElementById('list');
numbers.forEach(function (a, b, c) { // 배열 메소드 forEach : 배열 각각의 요소들에 대해서
    // console.log(a, b, c);
    sum += a;
    let li = document.createElement('li'); // 배열의 각각 요소에 li태그를 만들어서
    let text = document.createTextNode(a);
    li.appendChild(text);
    list.appendChild(li);
});
console.log(sum);

//
class Student {
    constructor(sno, name, score) {
        this.sno = sno;
        this.name = name;
        this.score = score;
    }
}

let student = {
    sno: '1111',
    name: 'Hong',
    score: 80
}
let students = [];
students.push(student);
students.push(new Student('2222', 'Hwang', 90));
students.push(new Student('3333', 'Park', 70));

// <tr><td>1111</td><td>Hong</td></tr>
function createTr(std) {
    let trTag = document.createElement('tr');
    trTag.onmouseover = function () {
        this.style.backgroundColor = 'yellow';
    }
    trTag.onmouseout = function () {
        this.style.backgroundColor = '';
    }
    let td = document.createElement('td');
    let chk = document.createElement('input')
    chk.setAttribute('type', 'checkbox');
    td.appendChild(chk);
    trTag.appendChild(td);

    for (field in std) {
        let tdTag = document.createElement('td');
        let text = document.createTextNode(std[field]);
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);

    }

    td = document.createElement('td');
    let btn = document.createElement('button');
    btn.innerHTML = 'OK'; // =라벨값을 준다 <button onclick='clickFnc()'>OK</button>
    btn.onclick = clickFnc; // 클릭할때만 실행되게 ()붙이면안됨
    td.appendChild(btn);
    trTag.appendChild(td);

    return trTag;
}

let tb1 = document.getElementById('tb1');

students.forEach(function (val, idx, ary) {
    let newTr = createTr(val);
    tb1.appendChild(newTr);
});

function clickFnc() {
    this.parentNode.parentNode.remove();
}

