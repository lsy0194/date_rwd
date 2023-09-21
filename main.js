const [hr, m, s] = document.querySelectorAll('h1 span');

const now = new Date();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

//hours값을 setHours가 조건에 12를 뺀겂으로 반환
//반환된 결과 값을 다시바로 setNumbers에 집어넣어서 0을 붙이도록 처리

hr.innerText = setNumbers(setHours(hours));
m.innerText = setNumbers(min);
s.innerText = setNumbers(sec);

//다음과 같이 코드를 줄일수 있다.
/*
const values = [setHours(hours), min, sec];
spans.forEach((el, idx) => {
	el.innerText = setNumbers(values[idx]);
});
*/

function setNumbers(num) {
	num < 10 && (num = '0' + num);
	return num;
}

function setHours(num) {
	num > 12 && (num = num - 12);
	return num;
}

//const setNumbers = (num) => num < 10 && (num = '0' + num);
