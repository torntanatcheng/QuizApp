var quiz = {
	name: "Quentin Tarintino Films",
	questions: [
	{
		question: "What was Quentin Tarintino's first movie?",
		answers: ["Pulp Fiction", "Kill Bill", "Inglorious Basterds", "Reservoir Dogs"], 
		correct: 3
	},
	{
		question: "What was Uma Thurman\'s name in Pulp Fiction?",
		answers: ["Beatrix Kiddo", "The Bride", "Mia Wallace", "Elsa Quinn"],
		correct: 2
	},
	{
		question: "What is Christopher Waltz' role in Inglorious Basterds?",
		answers: ["Dentist", "Bounty Hunter", "American Soilder", "Col. Hans Landa"],
		correct: 3
	},
	{	
		question: "What was Leonardo Di Caprio's name in Django?",
		answers: ["Dr.King Schultz", "Billy Crash", "Calvin Candie", "Stephen"],
		correct: 2
	},
	{
		question: "Broomhilda was a character in which movie?",
		answers: ["Inglorious Basterds", "Pulp Fiction", "Django Unchained", "Kill Bill"],
		correct: 2
	}
	]
}

// Keeping count of the score is not working at the moment
var userScore = 0;
var result = userScore;
var currentQuestion = 0;

while (currentQuestion < quiz.questions.length) {
	console.log(quiz.questions[currentQuestion].question);
	for (var i = 0; i < quiz.questions[currentQuestion].answers.length; i ++) {
		console.log((i+1) + " " + quiz.questions[currentQuestion].answers[i]);
		var guess = parseInt(prompt('Enter your answer:'));
		if quess === quiz.questions[currentQuestion].correct {
			userScore++;
		}
	}
}

