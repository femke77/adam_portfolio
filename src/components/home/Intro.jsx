import React, { useEffect, useState, useRef } from 'react';


const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const { top, bottom } = textRef.current.getBoundingClientRect();
        const isInView = top < window.innerHeight && bottom >= 0;
        if (isInView) {
          setIsVisible(true);
          // Stop observing once text is visible
          observer.disconnect();
        }
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    // Adding scroll event listener as fallback
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible && textRef.current) {
      const textContent = textRef.current.innerText;
      let newHtml = '';
      const animationDelay = 15; // alter this to speed it up

      textContent.split('').map((char, index) => {
        newHtml += `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`;

      })

      textRef.current.innerHTML = newHtml;

      const children = textRef.current.children;
  
      Array.from(children).map((child, index) => {
        child.style.animationDelay = `${animationDelay * index}ms`;
      });
  
      
    }
  }, [isVisible]);

  return (
    <div className="center">
      <p
        ref={textRef}
        className={`text-draw ${isVisible ? 'reveal' : 'hidden'}`}
      >
        Hey! I'm Adam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt praesentium, rerum voluptatem in reiciendis officia harum repudiandae tempore suscipit ex ea, adipisci ab porro.
      </p>
    </div>
  );
};


export default Intro;

