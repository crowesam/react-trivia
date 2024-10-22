// components/Trivia.tsx
import { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface TriviaProps {
  category: string;
  questions: Question[];
}

const Trivia = ({ category, questions }: TriviaProps) => {
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
    <div>
      <h2>{category} Trivia</h2>
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
    </div>
  );
};

export default Trivia;
