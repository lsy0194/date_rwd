/*
	특정 시간을 주기로 코드를 반복할때{
	set.Interval(반복실행함수,반복간격실행(ms))
	}
*/

const [hr, m, s] = document.querySelectorAll('h1 span');

setInterval(setTime, 1000);
//함수추가

//원하는 시간마다 body에 morning, afternoon, evening, night
//주의 밤은 특성시간이상 혹은 일정시간이하 (&&가 아닌 ||으로 표현 가능)

function changeClass(hr) {
	if (hr >= 6 && hr < 12) document.body.classList.add('morning');
	if (hr >= 12 && hr < 16) document.body.classList.add('afternoon');
	if (hr >= 16 && hr < 20) document.body.classList.add('evening');
	if (hr >= 20 || hr < 2) document.body.classList.add('night');
}

function setTime() {
	const now = new Date();
	const hours = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();

	changeClass(hours);

	hr.innerText = setNumbers(setHours(hours));
	m.innerText = setNumbers(min);
	s.innerText = setNumbers(sec);
}

function setNumbers(num) {
	num < 10 && (num = '0' + num);
	return num;
}

function setHours(num) {
	num > 12 && (num = num - 12);
	return num;
}
