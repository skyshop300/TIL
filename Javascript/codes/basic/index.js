var a = "aa";
var a = 23;
let b = 33;
let c = 1;

const test = { 
    name: "민수",
    age: 27,
    gender: "M"
}
console.log("!!");

/********** Array **********/
const daysOfWeek = [
    "MON", "TUE", "WED", "THU", "FRI", true
]
console.log(daysOfWeek[2]);



/********** Object **********/
const objectTest = {
    name: "test",
    age: 13,
    gender: "M",
    favFood: [
        {
            name: "Cheese burger",
            price: 3700
        },
        {
            name: "chocolate",
            price: 1200
        }
    ]
}
console.log(objectTest);
// {name: "test", age: 13, gender: "M"}

objectTest.name = "아이언맨";
objectTest.age = 40;
console.log(objectTest);
// {name: "아이언맨", age: 40, gender: "M"}



/********** Function ***********/
console.log(test, console);
    // console { debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, … }
    // assert: ƒ assert()
    // clear: ƒ clear()
    // context: ƒ context()
    // count: ƒ count()
    // countReset: ƒ countReset()
    // debug: ƒ debug()
    // dir: ƒ dir()
    // dirxml: ƒ dirxml()
    // error: ƒ error()
    // group: ƒ group()
    // groupCollapsed: ƒ groupCollapsed()
    // groupEnd: ƒ groupEnd()
    // info: ƒ info()
    // log: ƒ log()
    // memory: (...)
    // profile: ƒ profile()
    // profileEnd: ƒ profileEnd()
    // table: ƒ table()
    // time: ƒ time()
    // timeEnd: ƒ timeEnd()
    // timeLog: ƒ timeLog()
    // timeStamp: ƒ timeStamp()
    // trace: ƒ trace()
    // warn: ƒ warn()
    // Symbol(Symbol.toStringTag): "Object"
    // get memory: ƒ()
    // set memory: ƒ()
    // __proto__: Object

    
function testFunc(a) {
    console.log(a);
}
testFunc("test입니다.");



/********** 백틱 : `` **********/
function backTick(name, age) {
    let comment =`Hello I'm ${name}. I like ${age}.`;
    console.log(`backTick() 내부:: ${comment}`);
    return comment;
}

let callFunc = backTick("Iron man", "cheese burger") ;
console.log(callFunc);


/********* Object 안에 Function *********/
// 객체 안에 함수를 구현할 수 있다.
let calc = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    }
}

const plusTest = calc.plus(2,5)
console.log(calc.plus(1,3));
console.log(calc.minus(1,3));
console.log("변수형태의 function: " + plusTest);


/*********** DOM functions **********/
// Document Object Model
// HTML의 모든 요소를 가지고 와서 조작할 수 있도록 객체로 변형
// HTML document 전체를 출력.
console.log(document);

let idTest = document.getElementById("testId");
let classTest = document.getElementsByClassName("test_class");
let idQuerySelectorTest = document.querySelector("#testId");
console.log(idTest);
console.dir(idTest);        // dir(): 모든 객체 속성을 출력한다.
console.log(classTest);
console.log(idQuerySelectorTest);        // dir(): 모든 객체 속성을 출력한다.
idTest.innerHTML = "NO!!";

/******************** Event ********************/
// 자바스크립트는 이벤트를 위해 존재한다.
// 이벤트가 발생하면 intercept하여 그에 관련된 기능을 실행시켜준다.
function handleResize() {
    console.log("I have been resized");
}

// window vs document
// https://ohgyun.com/531
console.log(window);

// 두 개의 차이를 알아라!
// 함수의 괄호: 함수를 선언할 때에만 사용, 함수를 사용할 때에는 괄호를 사용하지 않는다.
// "resize" 이벤트가 발생하면 function을 작동시킨다.
window.addEventListener("resize", handleResize());      // function 즉시 호출
window.addEventListener("resize", handleResize);        // 


// Trick Tip
// event는 자바스크립트의 이벤트 객체.
// 이벤트 객체를 호출한다.
// form을 만들 때 꽤 유용하게 사용된다.
function handleResize2(event) {
    console.log(event);         // event의 모든 값이 출력된다.
}
window.addEventListener("resize", handleResize2);


// Click Event test
const TITLE = document.querySelector("#title");
function handleClick() {
    TITLE.style.color = "red";
}
TITLE.addEventListener("click", handleClick);


/**************** setInterval *****************/
// function을 특정 시간 간격으로 실행한다.

/**************** 사용자 정보 컴퓨터에 저장 ****************/
// localStorage 
const FORM = document.getElementById("testForm");
const INPUT = FORM.querySelector("#testInput");
const GREETING_P = document.getElementById("greeting");
console.log(INPUT);

const USER_LS = "currentUser",
    SHOWING_CLASS = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

// event
// event는 상위 요소로 계속 올라가서 document까지 간다.
// event.preventDefault(): 초기 설정을 막는다. // submit시 새로고침이 되지 않는다.
function handleSubmit(event) {
    event.preventDefault();
    INPUT.placeholder = "fifi";
    const currentValue = INPUT.value;
    printGreeting(currentValue);
    saveName(currentValue);
}

function printGreeting(text) {
    FORM.classList.remove(SHOWING_CLASS);
    GREETING_P.classList.add(SHOWING_CLASS);
    GREETING_P.innerText = `HELLO ${text}`;
}

function askForName() {
    FORM.classList.add(SHOWING_CLASS);
    FORM.addEventListener("submit", handleSubmit);      //addEventListener() => event => function handleSubmit(event) 
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        printGreeting(currentUser);
    }
}

function init() {
    loadName();
    // askForName();
}
init();