import { useEffect, useState } from 'react';

const useTextScramble = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let timeout: NodeJS.Timeout;

    const scramble = (index: number) => {
      if (index >= text.length) {
        setDisplayText(text);
        setIsComplete(true);
        return;
      }

      const scrambledText = text.split('').map((char, i) => {
        if (i < index) return text[i];
        return characters[Math.floor(Math.random() * characters.length)];
      }).join('');

      setDisplayText(scrambledText);
      timeout = setTimeout(() => scramble(index + 1), speed);
    };

    scramble(currentIndex);

    return () => clearTimeout(timeout);
  }, [text, speed, currentIndex]);

  return { displayText, isComplete };
};

export default useTextScramble;
