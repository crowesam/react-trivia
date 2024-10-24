// components/SplashScreen.tsx
import React, { useEffect, useState } from "react";
import "./SplashScreen.css"; // We'll add styles separately

const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  // Play the video and transition out after it's done or on timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(false);
      onFinish();
    }, 5000); // Adjust this duration as needed based on your video length

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`splash-screen ${!isPlaying ? "fade-out" : ""}`}>
      <video className="splash-video" autoPlay muted playsInline onEnded={onFinish}>
        <source src="/Sequence 03_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="splash-title">Welcome to the Trivia App</h1>
    </div>
  );
};

export default SplashScreen;
