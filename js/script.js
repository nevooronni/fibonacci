//custom js file
$(document).ready(function() {
	//back-end/business Logic
	var fibonacciLoop = function(userInput) {
		if((userInput >= 1) && (userInput <= 25))
		return "Number " + userInput + " in the Fibonacci sequence is " +
		calcFibonNth(userInput);
		else {
			return "Error enter a number between 1 and 25!"
		}		

	}

	function calcFibonNth(userInput) {
		if(userInput > 2) {
			return calcFibonNth(userInput - 2) + calcFibonNth(userInput - 1);
		} else {
			return 1;
		}
	}

	//front-end/user-interface
	$("#go").click(function(event) {
  	event.preventDefault();
  	var userInput = parseInt($("#input").val());
  	var resultOfFibonacci = fibonacciLoop(userInput);
  	$("#output").text(resultOfFibonacci);

	});
});