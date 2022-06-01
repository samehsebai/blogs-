import React, {Component, useState} from "react";
import ReactDOM from "react-dom";
import "./quiz.css"

export default function Quiz() {
  
  const questions = [
		{
			questionText: 'What is a correct syntax to output "Hello World" in Python?',
			answerOptions: [
				{ answerText: 'echo(`hello world`)', isCorrect: false },
				{ answerText: 'p(`hello world`)', isCorrect: false },
				{ answerText: 'print(`hello world`)', isCorrect: true },
				{ answerText: 'echo`hello world`', isCorrect: false },
			],
		},
		{
			questionText: 'How do you insert COMMENTS in Python code?',
			answerOptions: [
				{ answerText: '/this is a comment/', isCorrect: false },
				{ answerText: '#this is a comment', isCorrect: true },
				{ answerText: '//this is a comment', isCorrect: false },
				{ answerText: '/*this is a comment*/', isCorrect: false },
			],
		},
		{
			questionText: 'Which one is NOT a legal variable name in python?',
			answerOptions: [
				{ answerText: 'My_var', isCorrect: true },
				{ answerText: '_MyVar', isCorrect: false },
				{ answerText: 'Myvar', isCorrect: false },
				{ answerText: 'My-var', isCorrect: false },
			],
		},
		{
			questionText: 'What is the correct file extension for Python files?',
			answerOptions: [
				{ answerText: '.pt', isCorrect: false },
				{ answerText: '.pyt', isCorrect: false },
				{ answerText: '.pyth', isCorrect: false },
				{ answerText: '.py', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
    <>
    <h1 className="titre"> Test your knowledge </h1>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="button" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    </>
	
	);

  
ReactDOM.render(<Quiz/>, document.getElementById("root"));}