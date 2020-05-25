const toDoForm = document.querySelector(".js-toDoForm"),
	toDoInput = toDoForm.querySelector("input"),
	toDoList = document.querySelector(".js-toDoList");
// 자바스크립트 모듈화 공부

const TODO_LS = 'toDos';
const toDos = [];

function saveToDos() {
	localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
	console.log(text);
	const li = document.createElement("li");
	// JS의 특징: 함수를 변수에 저장할 수 있다.
	const deleteButton = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length + 1;
	deleteButton.innerText = "DEL ❌";
	span.innerText = text;
	li.appendChild(span);
	li.appendChild(deleteButton);
	li.id = newId;
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: newId
	};
	toDos.push(toDoObj);
	saveToDos();
}
// localStorage에도 저장해야하므로
// localstorage에는 String만 저장할 수 있다.

function handleSubmit(event) {
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value = "";
}

function loadToDos() {
	const loadedToDos = localStorage.getItem(TODO_LS);
	// 처음 페이지에 진입 했을 떄에
	if(loadedToDos !== null){
		console.log(loadToDos);
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function(toDo) {
			console.log(toDo.text + "!!!!!!!!");
			paintToDo(toDo.text);
		})
	}
}

function init() {
	loadToDos();
	toDoForm.addEventListener("submit", handleSubmit)

}

init();