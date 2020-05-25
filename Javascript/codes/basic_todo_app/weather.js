
const COORDS = 'coords'; 

// localStorage를 사용하지 않고 DNC
function saveCords(coordsObj) {
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
		latitude,
		longitude
	};
	saveCords(coordsObj);
}
function handleGeoError(position) {
	console.log('Cant access geo location');
}

function askForCords() {
	// 현재 위치를 요청한다.
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCords() {
	const loadedCords = localStorage.getItem(COORDS);
	if(loadedCords === null){
		askForCords();
	} else {
		//getWeather;
	}
}

function init(){
	loadCords();
}

init();