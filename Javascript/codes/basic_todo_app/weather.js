const COORDS = 'coords'; 
const weather = document.querySelector(".js-weather");

function getWeather(lat, lon) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
	// then:  함수가 끝나길 기다리는 방법
	.then(function(response) {		
		// 성공시 실행		
		return response.json();
	}).then(function(json) {
		// 성공시 실행
		const temperature = json.main.temp;
		const place = json.name;
		weather.innerText = `${temperature} @ ${place}`

	});
	// fetch를 기다리지 않고 다음 작업을 지시하면 
	// 다음 작업은 fetch가 완료 되기를 기다리지 않고, 원하지 않는 결과가 나올 수 있다.
	// 서버로 부터 데이터가 들어올때까지 기다려야한다.
}

// localStorage를 사용하지 않고 DNC
function saveCoords(coordsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	// const coordsObj = {
	// 	latitude: latitude,
	// 	longitude: longitude
	// };
	// 변수명이 동일할 때에는 아래와 같이 변수명을 따로 명시하지 않아도 된다.
	const coordsObj = {
		latitude,		// 	latitude: latitude,
		longitude		// 	longitude: longitude
	};
	saveCoords(coordsObj);
	getWeather(latitude, longitude);
}
function handleGeoError(position) {
	console.log('Cant access geo location');
}

function askForCoords() {
	// 현재 위치를 요청한다.
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
	const loadedCoords = localStorage.getItem(COORDS);
	// 현재 위치가 존재하는지 여부 확인
	if(loadedCoords === null){
		askForCoords();
	} else {
		const parsedCoords = JSON.parse(loadedCoords);
		getWeather(parsedCoords.latitude, parsedCoords.longitude);
	}
}

function init(){
	loadCoords();
}

init();