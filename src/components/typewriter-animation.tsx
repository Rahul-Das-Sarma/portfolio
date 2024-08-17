import React, { useState, useEffect, useMemo } from "react";

const TypewriterEffect = () => {
  const texts = useMemo(
    () => [
      "Welcome to my portfolio website!",
      "I am happy that you are here.",
      "Please check my projects and my tech stack.",
      "If you think I can be of any help",
      "Please lets connect.",
      "I would love to connect with you.",
      "Happy Surfing!",
    ],
    []
  );
  const typingSpeed = 100; // Speed of typing in ms
  const deletingSpeed = 50; // Speed of deleting in ms
  const delayBeforeDeleting = 1500; // Delay before starting to delete in ms
  // const delayBeforeTypingNext = 500; // Delay before starting to type the next text in ms

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex];
      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    currentTextIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBeforeDeleting,
  ]);

  return (
    <div className="text-4xl font-mono text-center">
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypewriterEffect;
