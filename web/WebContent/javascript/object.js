let car = {
    name: 'Sonata',
    model: 'Hybrid',
    weight: 1200,
    color: 'black',
    start: function() {
        console.log('출발합니다.');
    },
    stop: function() {
        console.log('정지합니다.');
    }
};
car.name = 'Sonota II';
car.model = 'Electronic';
car['weight'] = 2200; 
car['color'] = 'blue';
car.start();
car.stop();

for(field in car) {
    console.log(field + ' ' + car[field]);
} // object의 필드 가져오기 (for ... in)

let fruits = ['Apple', 'Banana', 'Cherry'];
for(let i=0; i<fruits.length; i++) {
    fruits[i];
}       
for(fruit of fruits) {
    console.log(fruit);
} // 확장for 배열 가져오기 (for ... of)

let elem = document.getElementById('list');
for(fruit of fruits) {
    let liTag = document.createElement('li');
    let text = document.createTextNode(fruit);
    liTag.appendChild(text);
    elem.appendChild(liTag);
}


let m1 = {
    name:'Hong',
    score: 80
}
let m2 = {
    name:'Hwang',
    score: 90
}
let m3 = {
    name:'Pack',
    score: 70
}
let memList = document.getElementById('members');
let members = [m1, m2, m3];
for(let member of members) {
        let liTag = document.createElement('li');
    for(let field in member) {
        console.log(field, member[field]); // field : object의 필드명, member[field] : 값
        let text = document.createTextNode(member[field]);
        liTag.appendChild(text);
        memList.appendChild(liTag);
    }
}