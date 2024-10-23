import { useState } from 'react';

const PokerTrivia = () => {
  const questions = [
    {
      question: "What is the best possible hand in Texas Hold'em?",
      options: ["Full House", "Royal Flush", "Straight Flush", "Four of a Kind"],
      answer: "Royal Flush",
    },
    {
      question: "In poker, what is the term for a bet that is all of a player's chips?",
      options: ["Call", "Fold", "Raise", "All-In"],
      answer: "All-In",
    },
    {
      question: "What is the minimum number of cards a player needs to have a straight?",
      options: ["4", "5", "6", "7"],
      answer: "5",
    },
    {
      question: "Which card is known as the 'Bullet' in poker slang?",
      options: ["Ace", "King", "Queen", "Jack"],
      answer: "Ace",
    },
    {
      question: "How many suits are there in a standard deck of cards?",
      options: ["2", "4", "3", "5"],
      answer: "4",
    },
    {
      question: "What is a 'Gutshot' in poker?",
      options: [
        "A type of bluff",
        "A type of poker hand",
        "A draw that needs one specific card for a straight",
        "A losing hand",
      ],
      answer: "A draw that needs one specific card for a straight",
    },
    {
      question: "In a standard poker game, which hand is better: a Flush or a Straight?",
      options: ["Straight", "Flush", "Full House", "Three of a Kind"],
      answer: "Flush",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option: string) => {
    if (option === questions[currentQuestion].answer) {
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
    <div classname="category-card">
    <h2>Poker Trivia</h2> {/* This is the heading added to the component */}
    {showScore ? (
      <div className="score-section">
        You scored {score} out of {questions.length}
      </div>
    ) : (
      <div className="question-section">
        <div className="question-text">{questions[currentQuestion].question}</div>
        <div className="answer-section">
          {questions[currentQuestion].options.map((option) => (
            <button onClick={() => handleAnswerOptionClick(option)} key={option}>
              {option}
            </button>
          ))}
        </div>
      </div>
    )}
  </div></>
  );
};

 

export default PokerTrivia;

