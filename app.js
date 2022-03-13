//data type//
console.log("string"); //text//
console.log(2); //number//
console.log(true, false); //booleans - true or false//
console.log(null);
// null- 아무것도 없는것으로 채워짐, 자연적으로 생기지 않음,의도적으로 var이 비어있음을 알림//
let something; //undefined - 정의되지 않음//

//variable//
const a = 5; //const - 바꾸지 않을 변수 //
const myName = "Choi";

let b = 3; // let - 변경 할 가능성이 있는 변수//

b = 2; //한번 정의된 변수는 다시 정의해줄 필요 없음//

//array//
const daysOfWeek = ["mon", "tue", "wen"]; //list of data in one var//
console.log(daysOfWeek[1]); //tue - 데이터를 0부터 셈함//
daysOfWeek[2] = "wensday"; // 데이터를 변경//
daysOfWeek.push("thur"); //list에 항목을 추가함//

//object//
const player = {
  name: "Choi",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false; // object 안에있는 걸 바꿈//
player.lastName = "tomato"; //object 안에 항목을 추가함//

//function -- 반복해서 쓰는 코드조각//
function sayHello(nameOfPerson, age) {
  console.log(
    "Hello my name is " + nameOfPerson + " I am " + age + " years old"
  );
}
sayHello("Choi", 25);
sayHello(); // function을 실행 시키는 법//
alert("hi"); //function에 데이터를 보내는 방법//

function plus(a, b) {
  console.log(a + b);
}
plus(8, 60);

//object and function//
const gamer = {
  name: "Choi",
  sayHi: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you");
  },
};
console.log(gamer.name);
gamer.sayHi("kim");

//return//  //function의 결과값을 저장함//

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  times: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 2);
const divideResult = calculator.divide(minusResult, 2);

console.log(plusResult);

//parseInt()//

console.log(typeof "15", typeof parseInt("15")); //string을 number로 변경함//

//isNaN()//
const age = parseInt(prompt("how old are you?"));

console.log(isNaN(age)); // boolean값을 반환함

//condition//
/*
if(condition){ codition 은 boolean 이여아함
    condition ==true
}
else{
    condition ==false
}
*/
if (isNaN(age)) {
  console.log("please write a number");
} else if (age < 18) {
  console.log("you are too young");
} else {
  console.log("you can drink");
}

// && and//
// || or//

// html에서 자바로 요소를 불러오는법
const h1 = document.querySelector(".title h1"); //querySelector 은 css 셀럭터로 지정할수 있음

console.log(h1);

//events 모든 상태변화 클릭이나 hover 드래그
//css 와 javascript 의 상호작용
/*function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
*/

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
