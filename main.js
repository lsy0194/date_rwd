// const [hr, m, s] = document.querySelectorAll('h1 span');

const now = new Date();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

// hr.innerText = setHours(setHours(hours));
// m.innerText = setNumbers(min);
// s.innerText = setNumbers(sec);
function setNumbers(num) {
	num < 10 && (num = '0' + num);
	return num;
}

// function setHours(num) {
// 	num > 12 && (num = num - 12);
// 	return num;
// }
//const setNumbers = (num) => num < 10 && (num = '0' + num);
