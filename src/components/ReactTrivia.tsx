// components/ReactTrivia.tsx
import Trivia from "./Trivia";

const reactQuestions = [
  {
    question: "What is a React component?",
    options: [
      "A function or class that optionally accepts inputs and returns a React element",
      "A built-in HTML element",
      "A global variable in React",
      "A server-side rendered element"
    ],
    answer: "A function or class that optionally accepts inputs and returns a React element",
  },
  {
    question: "What hook is used to manage state in functional components?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    answer: "useState",
  },
  {
    question: "What is the purpose of the useEffect hook?",
    options: [
      "To manage the component's state",
      "To perform side effects in function components",
      "To create context for global state management",
      "To memoize functions"
    ],
    answer: "To perform side effects in function components",
  },
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A direct representation of the real DOM",
      "A copy of the browser's DOM that gets updated directly",
      "A lightweight JavaScript representation of the real DOM",
      "A library for managing the real DOM"
    ],
    answer: "A lightweight JavaScript representation of the real DOM",
  },
  {
    question: "How do you pass data from a parent component to a child component?",
    options: ["Props", "State", "useEffect", "Context"],
    answer: "Props",
  },
  {
    question: "Which method in class components is used to handle lifecycle events like mounting and unmounting?",
    options: ["componentDidMount", "useState", "render", "useEffect"],
    answer: "componentDidMount",
  },
  {
    question: "How do you handle forms in React?",
    options: [
      "Using the HTML form's onsubmit attribute only",
      "Using controlled components",
      "By using external JavaScript event handlers",
      "By directly accessing the DOM elements"
    ],
    answer: "Using controlled components",
  },
  {
    question: "What is JSX?",
    options: [
      "A syntax extension that allows writing HTML within JavaScript",
      "A CSS library for styling React components",
      "A special API in React for rendering server-side",
      "A programming language built on top of JavaScript"
    ],
    answer: "A syntax extension that allows writing HTML within JavaScript",
  },
  {
    question: "What is the use of the key prop in React?",
    options: [
      "To create a new component instance",
      "To trigger re-renders",
      "To uniquely identify elements in lists for efficient updates",
      "To pass dynamic props to a component"
    ],
    answer: "To uniquely identify elements in lists for efficient updates",
  },
  {
    question: "What is Context in React?",
    options: [
      "A way to pass props through multiple levels of components directly",
      "A lifecycle method for initializing the state",
      "A method for fetching data from a server",
      "A way to modify the DOM directly"
    ],
    answer: "A way to pass props through multiple levels of components directly",
  }
];

const ReactTrivia = () => {
  return <Trivia category="React" questions={reactQuestions} />;
};

export default ReactTrivia;
