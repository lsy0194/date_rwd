const now = new Date();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();
console.log(setNumbers(hours));

function setNumbers(num) {
	/*
	if (num < 10) num = '0' + num;	
	*/
	//조건식 ? true일때 실행할 구문 : false일때 실행할 구문
	//삼항연산자 구문안에는 대입연산자가 들어올수 없기 때문에 괄호로 묶어서 표현식으로 변경
	//특정값이 else 일때 굳이 실행할 코드가 없다면 &&연산자 활용
	//num < 10 ? (result = '0' + num) : (result = num);
	num < 10 && (num = '0' + num);

	return num;
}

/*