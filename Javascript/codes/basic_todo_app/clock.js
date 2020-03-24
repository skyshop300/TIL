const	clockContainer = document.querySelector(".js-clock"),
		clockTitle = clockContainer.querySelector("h1");

function getTime() {
	const date = new Date();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	clockTitle.innerText = `
	${hour < 10 ? `0${hour}` : hour}:${
		minute < 10 ? `0${minute}` : minute}:${
			second < 10 ? `0${second}` : second}`;
	
}

function init() {
	getTime();
	// 1초에 한번 갱신되는 실시간 시계 구현
	setInterval(getTime, 1000);
	
}

init();






























