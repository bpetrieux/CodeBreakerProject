let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (setHiddenFields() == ''){
    	setHiddenFields();
    	validateInput();
    }
}

//implement new functions here
function setHiddenFields(){
	attempt = 0;
	let answer = Math.floor((Math.random())*1000);
	answer = answer.toString();

	while (answer.length<4){
		var zero = '0';
		answer = zero+answer;
	}
	console.log(answer);
}
function setMessage(message){
	$( "#answer" ).html(message);
}

function validateInput(userguess){
	if (userguess.length=4){
		return true
	} else {
		setMessage('Guesses must be exactly 4 characters long.');
	}
}