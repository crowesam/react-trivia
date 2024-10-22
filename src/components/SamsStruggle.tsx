// components/SamsStruggle.tsx
import Trivia from "./Trivia";

const samsStruggleQuestions = [
  {
    question: "What is a common cause of the error 'Cannot find module' when importing a component in React?",
    options: [
      "Incorrect path or case sensitivity in the import statement",
      "Incorrect JSX syntax",
      "Hooks used outside of functional components",
      "Mismatched TypeScript version"
    ],
    answer: "Incorrect path or case sensitivity in the import statement",
  },
  {
    question: "How can you fix the error 'Cannot find module' in TypeScript when importing a file?",
    options: [
      "Install the missing module via npm",
      "Check the file extension and correct path in the import statement",
      "Restart the server",
      "Refactor the component"
    ],
    answer: "Check the file extension and correct path in the import statement",
  },
  {
    question: "When does the error 'Invalid hook call' typically occur in React?",
    options: [
      "When hooks are called inside nested functions",
      "When hooks are used outside of functional components or inside class components",
      "When state is initialized incorrectly",
      "When props are passed incorrectly to child components"
    ],
    answer: "When hooks are used outside of functional components or inside class components",
  },
  {
    question: "How can you resolve the issue of a React component not re-rendering when expected?",
    options: [
      "Ensure the state is being updated properly using the setState function",
      "Manually re-render the component using forceUpdate",
      "Wrap the component in a setTimeout call",
      "Remove all hooks and use plain JavaScript"
    ],
    answer: "Ensure the state is being updated properly using the setState function",
  },
  {
    question: "In TypeScript, what is a common reason for 'TS2307: Cannot find module' error?",
    options: [
      "Missing or incorrect type declarations",
      "Incorrect use of hooks",
      "Incorrect component lifecycle methods",
      "Invalid JSX syntax"
    ],
    answer: "Missing or incorrect type declarations",
  },
  {
    question: "What is a potential fix for TypeScript errors related to missing types when importing a third-party library?",
    options: [
      "Install the library's type declarations with npm",
      "Manually add types to tsconfig.json",
      "Ignore the error and continue development",
      "Convert the entire project to JavaScript"
    ],
    answer: "Install the library's type declarations with npm",
  },
  {
    question: "What might be the cause if your Vite app is failing to build or run properly after adding new components?",
    options: [
      "Incorrect import paths or file extensions in newly added components",
      "Missing React hooks in the new components",
      "Using the wrong React version",
      "Adding too many components at once"
    ],
    answer: "Incorrect import paths or file extensions in newly added components",
  },
  {
    question: "What is the purpose of the 'useState' hook in React?",
    options: [
      "To manage and track state in functional components",
      "To fetch data from an API",
      "To add event listeners to the DOM",
      "To prevent re-renders of a component"
    ],
    answer: "To manage and track state in functional components",
  },
  {
    question: "Why might a favicon added in the index.html file of a Vite React app show up on the main screen instead of in the browser tab?",
    options: [
      "The favicon tag is placed in the body instead of the head",
      "A non-standard HTML tag like <author> was used, causing it to render",
      "The favicon path is incorrect",
      "The project is misconfigured in tsconfig.json"
    ],
    answer: "A non-standard HTML tag like <author> was used, causing it to render",
  },
  {
    question: "What could cause a TypeScript error when using JSX in a Vite project?",
    options: [
      "tsconfig.json is missing a proper JSX configuration",
      "State is not initialized correctly",
      "Hooks are called in the wrong order",
      "JSX is not allowed in functional components"
    ],
    answer: "tsconfig.json is missing a proper JSX configuration",
  }
];

const SamsStruggle = () => {
  return <Trivia category="Sam's Struggles" questions={samsStruggleQuestions} />;
};

export default SamsStruggle;
