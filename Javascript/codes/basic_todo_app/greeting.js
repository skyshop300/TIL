// form을 가져오기
const form = document.querySelector(".js-form"),
	input = form.querySelector("input"),
	greeting = document.querySelector(".js-greetings");


// input 가져오기

const USER_LS = "currentUser",
	SHOWING_CN = "showing";		// Class Name

	
function saveName(text) {
	localStorage.setItem(USER_LS, text);
}

// 3-4 Saving the User Name
function handleSubmit(event) {
	event.preventDefault();		// 다음과 같이 막으면 input 입력이 되지 않는다.
	const currentValue = input.value;
	console.log(currentValue);
	paintGreeting(currentValue);
	saveName(currentValue);		// localStorage에 저장한다.
}

function askForName() {
	form.classList.add(SHOWING_CN);
	form.addEventListener("submit", handleSubmit)
}

// form을 지우고 greeting을 보여줄것.
function paintGreeting(text) {
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello ${text}`
}

// 3-4 Bubble: form을 저장하는 event가 발생하면 위로 올라간다.
function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	if(currentUser === null) {
		askForName();
	} else {
		paintGreeting(currentUser)
	}
}

function init() {
	loadName();
	console.log(input)
}

init();

/************ Local Storage ************/
// 
localStorage.setItem("Park", true);				// localStorage.setItem(Key, Value);
localStorage.setItem("background", 5)
// => 브라우저 - Application탭 - Local Storage - 값 확인
console.log(localStorage.getItem("Park"));		// => true
console.log(localStorage.getItem("username"));	// => null


