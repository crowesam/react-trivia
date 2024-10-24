// components/HistoryTrivia.tsx
import React from 'react';

const HistoryTrivia: React.FC = () => {
  const playSillyNoise = () => {
    const audio = new Audio('/KeyboardTypingFastClose.mp3'); // Path to your silly noise file
    audio.play();
  };

  return (
    <div>
      <h2>History Trivia</h2>
      <button onClick={playSillyNoise} className="silly-noise-button">
        Press for a Silly Noise
      </button>
    </div>
  );
};

export default HistoryTrivia;

