import Trivia from "./Trivia";

const historyQuestions = [
  {
    question: "Who was the first president of the United States?",
    options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
    answer: "George Washington",
  },
  // Add more history questions...
];

const HistoryTrivia = () => {
  return <Trivia category="History" questions={historyQuestions} />;
};

export default HistoryTrivia;
