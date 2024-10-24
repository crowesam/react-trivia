// App.tsx
import React, { useState } from "react";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import PokerTrivia from "./components/PokerTrivia";
import HistoryTrivia from "./components/HistoryTrivia";
import ReactTrivia from "./components/ReactTrivia";
import SamsStruggle from "./components/SamsStruggle";

const App = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const renderActiveCategory = () => {
    switch (activeCategory) {
      case "Poker":
        return <PokerTrivia />;
      case "History":
        return <HistoryTrivia />;
      case "React":
        return <ReactTrivia />;
      case "Sam's Struggles":
        return <SamsStruggle />;
      default:
        return <h2 className="select-bg">Select a category to start the trivia!</h2>;
    }
  };

  return (
    <>
    <div className="category-container">
      <h1>Trivia App</h1>
      <div>
        <button className="category-button" onClick={() => setActiveCategory("Poker")}>Poker Trivia</button>
        <button className="category-button" onClick={() => setActiveCategory("History")}>History Trivia</button>
        <button className="category-button" onClick={() => setActiveCategory("React")}>React Trivia</button>
        <button className="category-button" onClick={() => setActiveCategory("Sam's Struggles")}>Sam's Struggles</button>
      </div>
      {renderActiveCategory()}
    </div>
    </>
  );
};

export default App;
