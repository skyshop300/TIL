// form을 가져오기
const form = document.querySelector(".js-form"),
	input = form.querySelector("input"),
	greeting = document.querySelector(".js-greetings");


// input 가져오기

const USER_LS = "currentUser",
	SHOWING_CN = "showing";		// Class Name

function paintGreeting(text) {
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello ${text}`
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	if(currentUser === null) {

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
localStorage.setItem("Park", true);				// localStorage.setItem(Key, Value);
// => 브라우저 - Application탭 - Local Storage - 값 확인
console.log(localStorage.getItem("Park"));		// => true
console.log(localStorage.getItem("username"));	// => null