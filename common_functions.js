function getNumber(length) {
	var highestUnit = Math.pow(10, length - 1);
	var firstNum = Math.floor(Math.random * 9 + 1) * highestUnit;// (1~9)
	var laterNum = Math.floor(Math.random * highestUnit);
	var val = firstNum + laterNum;

	return val;
}
