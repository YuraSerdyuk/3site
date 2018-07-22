//ПОЧАТОК ПЕРШОГО КОНТЕЙНЕРА
function addition() {
	var num_1_plus = parseInt(document.getElementById('num_1_plus').value);
	var num_2_plus = parseInt(document.getElementById('num_2_plus').value);
	var c = num_1_plus + num_2_plus;
	document.getElementById('result_plus').innerHTML = c;
}

function subtraction() {
	var num_1_minus = parseInt(document.getElementById('num_1_minus').value);
	var num_2_minus = parseInt(document.getElementById('num_2_minus').value);
	var c = num_1_minus - num_2_minus;
	document.getElementById('result_minus').innerHTML = c;
}

function multimplication() {
	var num_1_mn = parseInt(document.getElementById('num_1_mn').value);
	var num_2_mn = parseInt(document.getElementById('num_2_mn').value);
	var c = num_1_mn * num_2_mn;
	document.getElementById('result_mn').innerHTML = c;
}

function division() {
	var num_1_div = parseInt(document.getElementById('num_1_div').value);
	var num_2_div = parseInt(document.getElementById('num_2_div').value);
	var c = num_1_div / num_2_div;
	document.getElementById('result_div').innerHTML = Math.round(c);
}

function validateform() {
	var num_1_all = parseInt(document.getElementById('num_1_all').value);
	var num_2_all = parseInt(document.getElementById('num_2_all').value);
	var element = document.forms["all_form"]["num_0_all"].value;
	var c = num_1_all + num_2_all;
	
	if (element == "+") {
		var c = num_1_all + num_2_all;
		document.getElementById('result_all').innerHTML = c;
	} else if (element == "-") {
		var c = num_1_all - num_2_all;
		document.getElementById('result_all').innerHTML = c;
	} else if (element == "*") {
		var c = num_1_all * num_2_all;
		document.getElementById('result_all').innerHTML = c;
	} else if (element == "/") {
		var c = num_1_all / num_2_all;
		document.getElementById('result_all').innerHTML = Math.round(c);
	} else {
		alert("Я не розумію такої команди");
	}
}

//ЗАКІНЧЕННЯ ПЕРШОГО КОНТЕЙНЕРА







//ПОЧАТОК ДРУГОГО КОНТЕЙНЕРА 


function name_button() {
	var name = document.forms["name"]["text_1_name"].value;
	var last_name = document.forms["last_name"]["text_1_lastName"].value;
	var age = document.forms["age"]["text_1_age"].value;
	var sex = document.forms["sex"]["text_1_sex"].value;
	var mood = document.forms["mood"]["text_1_mood"].value;
	var result = name + last_name + age + sex + mood;

	var text = "Привіт, "+ name.charAt(0).toUpperCase() + name.substr(1) + " " + last_name.charAt(0).toUpperCase() + last_name.substr(1) + ", мене звати JavaScript, мої можливості настільки широкі що я розумію що твоя стать " + sex + ", та тобі " + age + " років. З тобою цікаво спілкуватись коли твій настрій " + mood + ". До скорої зустрічі, не забудь заглянути нижче.";

	if (name == "" || last_name == "" || age == "" || sex == "" || mood == "") {
		alert("Будь ласка заповніть всі вільні поля")
	} else {
		document.getElementById('result_text_aboutMe').innerHTML = text;
	}
}

//КІНЕЦЬ ДРУГОГО КОНТЕЙНЕРА






//ПОЧАТОК ТРЕТЬОГО КОНТЕЙНЕРА

function moreForm() {
	var element = document.forms["more"]["num_1_more"].value;
	var element2 = document.forms["more"]["num_2_more"].value;

	if (element > element2) {
		document.getElementById("result_more").innerHTML = "Так";
	}
	if (element < element2) {
		document.getElementById("result_more").innerHTML = "Ні";
	}
}

function lessForm() {
	var element = document.forms["less"]["num_1_less"].value;
	var element2 = document.forms["less"]["num_2_less"].value;
	var result = element < element2;

	document.getElementById("result_less").innerHTML = result;
}

function equalsForm() {
	var element = document.forms["equals"]["num_1_equals"].value;
	var element2 = document.forms["equals"]["num_2_equals"].value;
	var result = element == element2;

	if (result == true) {
		document.getElementById("result_equals").innerHTML = "Так";
	} else {
		document.getElementById("result_equals").innerHTML = "Ні";
	}
}

function all_comparisonForm() {
	var element0 = document.forms["all_comparison"]["num_0_all_comparison"].value;
	var element = document.forms["all_comparison"]["num_1_all_comparison"].value;
	var element2 = document.forms["all_comparison"]["num_2_all_comparison"].value;
	var result_more = element > element2;
	var result_less = element < element2;
	var result_equals = element == element2;

	if (element0 == ">") {
		document.getElementById("result_all_comparison").innerHTML = result_more;
	} else if (element0 == "<") {
		document.getElementById("result_all_comparison").innerHTML = result_less;
	} else if (element0 == '=') {
		document.getElementById("result_all_comparison").innerHTML = result_equals;
	}
}

function num_lettersForm() {
	var element0 = document.forms["num_letters"]["num_0_num_letters"].value;
	var element = document.forms["num_letters"]["num_1_num_letters"].value;
	var element2 = document.forms["num_letters"]["num_2_num_letters"].value;
	var result_more = element.length > element2.length;
	var result_less = element.length < element2.length;
	var result_equals = element.length == element2.length;

	if (element0 == ">") {
		document.getElementById("result_num_letters").innerHTML = result_more;
	} else if (element0 == "<") {
		document.getElementById("result_num_letters").innerHTML = result_less;
	} else if (element0 == '=') {
		document.getElementById("result_num_letters").innerHTML = result_equals;
	}
}

//КІНЕЦЬ ТРЕТЬОГО КОНТЕЙНЕРА






//ПОЧАТОК ЧЕТВЕРТОГО КОНТЕЙНЕРА

function numbersForm() {
	var element = document.forms["num_numbers"]["num_1_numbers"].value;

	var i = 1;
	var k = '';
	while (i < 100) {
		k += (i / element);
		i++;
    }
    document.getElementById("result_numbers").innerHTML += k + '<br />';
} 



function calculationForm() {
	var inputString = document.getElementById('inputString').innerHTML,
		operationsArray = [
			{
				sign: '+',
				priority: 1,
				fun: sum
			},
			{
				sign: '-',
				priority: 1,
				fun: substruct
			},
			{
				sign: '*',
				priority: 2,
				fun: multiply
			},
			{
				sign: '/',
				priority: 2,
				fun: divide
			}
		],
		dataArray = genarateArrayDataArray(inputString, operationsArray),
		pairsArray = generatePairsArray(dataArray),
		result;
	console.log('dataArrayResult:', pairsArray);

	defineOperationsData(pairsArray, operationsArray);
	result = executeHighestPriorityOperation(pairsArray);
	console.log('final:', result);
}

function executeHighestPriorityOperation(pairsArray) {
	var highestPriorityOperationIndex = getIndexOfHighestPriorityOperation(pairsArray),
		left,
		right,
		calculationResult;

	left = pairsArray[highestPriorityOperationIndex].left;
	right = pairsArray[highestPriorityOperationIndex].right;

	if (pairsArray[highestPriorityOperationIndex].operation) {
		calculationResult = pairsArray[highestPriorityOperationIndex].fun(left, right);
		
		if (highestPriorityOperationIndex == 0) {
			pairsArray[highestPriorityOperationIndex + 1].left  = calculationResult;
		} else {
			pairsArray[highestPriorityOperationIndex - 1].right = calculationResult
			pairsArray[highestPriorityOperationIndex + 1].left  = calculationResult;
		}
	}

	if (pairsArray[highestPriorityOperationIndex].operation) {
		pairsArray.splice(highestPriorityOperationIndex, 1);
		return executeHighestPriorityOperation(pairsArray);
	} else {
		return left;
	}
}

function getIndexOfHighestPriorityOperation(pairsArray) {
	var highestPriorityIndex = null;

	for (var i = 0, length = pairsArray.length; i < length; i++) {
		if (highestPriorityIndex == null) {
			highestPriorityIndex = i;
		} else {
			if (pairsArray[i].priority > pairsArray[highestPriorityIndex].priority) {
				highestPriorityIndex = i;
			}
		}
	}

	return highestPriorityIndex;
}

function sum(a, b) {
	var result = parseFloat(a) + parseFloat(b);

	return result;
}

function substruct(a, b) {
	var result = parseFloat(a) - parseFloat(b);

	return result;
}

function multiply(a, b) {
	var result = parseFloat(a) * parseFloat(b);
	
	return result;
}

function divide(a, b) {
	var result = parseFloat(a) / parseFloat(b);
	
	return result;
}

function defineOperationsData(inputObj, operationsArray) {
	var operationData;
	for (var i = 0, length = inputObj.length; i < length; i++) {
		operationData = getOperationData(inputObj[i].operation, operationsArray);

		if (operationData) {
			inputObj[i].priority = operationData.priority;
			inputObj[i].fun = operationData.fun;
		}
	}
}

function getOperationData(operation, operationsArray) {
	var result = false;

	for (var i = 0, length = operationsArray.length; i < length; i++) {
		if (operationsArray[i].sign == operation) {
			result = {
				priority: operationsArray[i].priority,
				fun: operationsArray[i].fun
			};
		}
	}

	return result;
}

function generatePairsArray(dataArray) {
	var pairsArray = [];

	for (var i = 0, length = dataArray.length; i < length; i++) {
		var object = {};

		object.left = dataArray[i].string;

		object.operation = dataArray[i].operation;

		if (i + 1 < length) {
			object.right = dataArray[i + 1].string;
		} else {
			object.right = false;
		}

		pairsArray.push(object);
	}

	return pairsArray;
}

function genarateArrayDataArray(inputString, operationsArray, arrayOfObjects) {
	var inputString = inputString,
		operationsArray = operationsArray,
		firstPart,
		stringWithoutFistPart,
		operation,
		arrayOfObjects = arrayOfObjects || [],
		object = {};

	for (var i = 0, length = inputString.length; i < length; i++) {
		if (thisCaracterIsOperation(operationsArray, inputString[i])) {
			firstPart = inputString.substring(0, i);
			stringWithoutFistPart = inputString.replace(firstPart, '');

			operation = stringWithoutFistPart.charAt(0);

			object.operation = operation;
			object.string = firstPart;

			arrayOfObjects.push(object);
			inputString = stringWithoutFistPart.replace(operation, '');
			break;
		} else {
			if (!ifInputStringHasSomeOperationsLeft(inputString, operationsArray)) {
				object.operation = false;
				object.string = inputString;
				arrayOfObjects.push(object);
				inputString = '';

				break;
			}
		}	
	}

	if (inputString.length > 0) {
		return genarateArrayDataArray(inputString, operationsArray, arrayOfObjects);
	} else {
		return arrayOfObjects;
	}
}

function thisCaracterIsOperation(operationsArray, character) {
	var result = false;

	for (var i = 0, length = operationsArray.length; i < length; i++) {
		if (operationsArray[i].sign == character) {
			result = true;
		}
	}

	return result;
}

function ifInputStringHasSomeOperationsLeft(inputString, operationsArray) {
	var result = false;

	for (var i = 0, length = operationsArray.length; i < length; i++) {
		if (inputString.indexOf(operationsArray[i].sign) != -1) {
			result = true;
		}
	}

	return result;
}


function oneForm() {
	var one = "1";
	document.getElementById("inputString").innerHTML += one;
}

function twoForm() {
	var two = "2";
	document.getElementById("inputString").innerHTML += two;
}

function threeForm() {
	var three = "3";
	document.getElementById("inputString").innerHTML += three;
}

function fourForm() {
	var four = "4";
	document.getElementById("inputString").innerHTML += four;
}

function fiveForm() {
	var five = "5";
	document.getElementById("inputString").innerHTML += five;
}

function sixForm() {
	var six = "6";
	document.getElementById("inputString").innerHTML += six;
}

function sevenForm() {
	var seven = "7";
	document.getElementById("inputString").innerHTML += seven;
}

function eightForm() {
	var eight = "8";
	document.getElementById("inputString").innerHTML += eight;
}

function nineForm() {
	var nine = "9";
	document.getElementById("inputString").innerHTML += nine;
}

function zeroForm() {
	var zero = "0";
	document.getElementById("inputString").innerHTML += zero;
}

function plusForm() {
	var plus = "+";
	document.getElementById("inputString").innerHTML += plus;
}

function minusForm() {
	var minus = "-";
	document.getElementById("inputString").innerHTML += minus;
}

function mnForm() {
	var mn = "*";
	document.getElementById("inputString").innerHTML += mn;
}

function divForm() {
	var div = "/";
	document.getElementById("inputString").innerHTML += div;
}