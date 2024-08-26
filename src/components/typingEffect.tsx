import React, { useState, useEffect, useMemo } from "react";

const TypingEffect = ({ text }: { text: string }) => {
  const typingSpeed = 100; // Speed of typing in ms
  // const delayBeforeTypingNext = 500; // Delay before starting to type the next text in

  const [currentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const handleTyping = () => {
      const currentText = text;

      if (displayedText.length < currentText.length) {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, currentTextIndex, typingSpeed, text]);

  return (
    <div className="text-lg  text-center">
      {displayedText}
      {displayedText.length < text.length && (
        <span className="animate-blink">|</span>
      )}
    </div>
  );
};

export default TypingEffect;
