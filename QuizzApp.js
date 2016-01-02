var quiz = {
	name: "Quentin Tarintino Films",
	questions: [
	{
		question: "What was Quentin Tarintino's first movie?",
		answers: ["Pulp Fiction", "Kill Bill", "Inglorious Basterds", "Reservoir Dogs"], 
	},
	{
		question: "What was Uma Thurman\'s name in Pulp Fiction?",
		answers: ["Beatrix Kiddo", "The Bride", "Mia Wallace", "Elsa Quinn"],
	},
	{
		question: "What is Christopher Waltz' role in Inglorious Basterds?",
		answers: ["Dentist", "Bounty Hunter", "American Soilder", "Col. Hans Landa"],
	},
	{	
		question: "What was Leonardo Di Caprio's name in Django?",
		answers: ["Dr.King Schultz", "Billy Crash", "Calvin Candie", "Stephen"],
	},
	{
		question: "Broomhilda was a character in which movie?",
		answers: ["Inglorious Basterds", "Pulp Fiction", "Django Unchained", "Kill Bill"],
	}
	]
}

// Keeping count of the score is not working at the moment
var userScore = 0;
var result = userScore;

	var begin = prompt('This is the Quentin Tarintino Quizz! Would you like to start? yes/no');
		if (begin === 'yes'){
			console.log(quiz.name + " quizz game has started!");
			questionOne();
		} else {
			console.log('You chose not to start the game');
		}

function questionOne(userAnswer){
	console.log("Question 1: " + quiz.questions[0].question + "\n" + "Answers are: " + quiz.questions[0].answers)
	userAnswer = prompt("What is the answer?");	
		if (userAnswer === quiz.questions[0].answers[3]) {
			console.log("You got it right!");
			result = userScore + 1
			questionTwo();
		} else {
			console.log("The answer is wrong!");
			questionTwo();
		}
}

function questionTwo(userAnswer){
	console.log("Question 2: " + quiz.questions[1].question + "\n" + "Answers are: " + quiz.questions[1].answers)
	userAnswer = prompt("What is the answer?");	
		if (userAnswer === quiz.questions[1].answers[2]) {
			console.log("You got it right!");
			result = userScore + 1
			questionThree();
		} else {
			console.log("The answer is wrong!");
			questionThree();
		}
}

function questionThree(userAnswer){
	console.log("Question 3: " + quiz.questions[2].question + "\n" + "Answers are: " + quiz.questions[2].answers)
	userAnswer = prompt("What is the answer?");	
		if (userAnswer === quiz.questions[2].answers[3]) {
			console.log("You got it right!");
			result = userScore + 1
			questionFour();
		} else {
			console.log("The answer is wrong!");
			questionFour();
		}
}

function questionFour(userAnswer){
	console.log("Question 4: " + quiz.questions[3].question + "\n" + "Answers are: " + quiz.questions[3].answers)
	userAnswer = prompt("What is the answer?");	
		if (userAnswer === quiz.questions[3].answers[2]) {
			console.log("You got it right!");
			result = userScore + 1
			questionFive();
		} else {
			console.log("The answer is wrong!");
			questionFive();
		}
}

function questionFive(userAnswer){
	console.log("Question 4: " + quiz.questions[4].question + "\n" + "Answers are: " + quiz.questions[4].answers)
	userAnswer = prompt("What is the answer?");	
		if (userAnswer === quiz.questions[4].answers[2]) {
			result = userScore + 1
			console.log("You got it right! You scored " + result + "/5");
		} else {
			console.log("The answer is wrong! You scored " + result + "/5");
		}
}