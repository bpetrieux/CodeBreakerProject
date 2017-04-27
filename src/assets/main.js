function guess() {
let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');


    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer == '' || attempt == ''){
    	setHiddenFields();
    }
    if (!validateInput(input)){
    	return;
    }
    attempt++;
}

//implement new functions here
function setHiddenFields(){
	answer = Math.floor((Math.random())*1000).toString();
	while (answer.length <4){
		answer = "0"+answer;
	}
	attempt = "0";
}
function setMessage(message){
	let answer = document.getElementById('answer').value;
}

function validateInput(input){
	if (input.length !=4){
		setMessage('Guesses must be exactly 4 characters long.');
		return false;
	}
	return true;
}

