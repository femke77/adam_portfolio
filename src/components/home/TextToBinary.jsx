import React, { useEffect, useRef, useState } from 'react';

const useTextScramble = (chars = '0101') => {
  const [text, setText] = useState('');
  const queueRef = useRef([]);
  const frameRef = useRef(0);
  const frameRequestRef = useRef(null);
  const resolveRef = useRef(null);

  const randomChar = () => {
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const update = (el) => {
    let output = '';
    let complete = 0;

    for (let i = 0, n = queueRef.current.length; i < n; i++) {
      let { from, to, start, end, char } = queueRef.current[i];
      if (frameRef.current >= end) {
        complete++;
        output += to;
      } else if (frameRef.current >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar();
          queueRef.current[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    el.innerHTML = output;

    if (complete === queueRef.current.length) {
      resolveRef.current();
    } else {
      frameRequestRef.current = requestAnimationFrame(() => update(el));
      frameRef.current++;
    }
  };

  const setTextScramble = (newText, el) => {
    const oldText = el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => {
      resolveRef.current = resolve;
    });

    queueRef.current = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queueRef.current.push({ from, to, start, end });
    }

    cancelAnimationFrame(frameRequestRef.current);
    frameRef.current = 0;
    update(el);

    return promise;
  };

  return { setTextScramble };
};

const TextScrambleComponent = (props) => {
  const elRef = useRef(null);
  const { setTextScramble } = useTextScramble();

  const phrases = props.phrases;

  useEffect(() => {
    let counter = 0;

    const next = () => {
      setTextScramble(phrases[counter], elRef.current).then(() => {
        setTimeout(next, 800);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();

    return () => {
      cancelAnimationFrame(next); // Clean up the animation frame on unmount
    };
  }, [setTextScramble]);

  return <div className="text" ref={elRef}></div>;
};

export default TextScrambleComponent;
