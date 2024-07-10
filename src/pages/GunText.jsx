import gsap from 'gsap'
import { EasePack, TextPlugin } from 'gsap/all'
import React, { useEffect, useRef } from 'react'


gsap.registerPlugin(TextPlugin, EasePack)

const GunText = () => {

  const textContainer = useRef(null)
  const _sentenceEndExp = /(\.|\?|!)$/g

  useEffect(() => {
    function machineGun(text) {
      const container = textContainer.current;
      const words = text.split(" ");
      const tl = gsap.timeline({ delay: 0.8, repeat: 3, repeatDelay: 5 });
      const wordCount = words.length;
      let time = 0;

      words.forEach((word, i) => {
        const isSentenceEnd = _sentenceEndExp.test(word);
        const element = document.createElement("h3");
        element.textContent = word;
        element.className = ' absolute font-bold w-[900px] text-center text-[60px] top-[35%] invisible';
        container.appendChild(element);

        let duration = Math.max(0.7, word.length * 0.1);
        if (isSentenceEnd) {
          duration += 0.6;
        }

        gsap.set(element, { autoAlpha: 0, scale: 0, z: 0.01 });

        tl.to(element, { duration, scale: 1.2, ease: "slow(0.25, 0.9)" }, time)
          .to(element, { duration, autoAlpha: 1, ease: "slow(0.25, 0.9, true)" }, time)
          .to(element, { duration: 0.5, autoAlpha: 0, ease: "slow(0.25, 0.9, true)" }, time + duration);

        time += duration - 0.05;
        if (isSentenceEnd) {
          time += 0.6;
        }
      });
    }

    machineGun("These words are constantly animating in your face to suck you in and leave you hanging for what comes next. Can you handle the awesomeness? Or are you left quivering in fear? It's only text, silly. Longer words stay on the screen for a greater duration. Each sentence ends with a dramatatic pause. Yes, that pause. The End Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi est, nesciunt culpa rem iure nihil aliquam vitae dolorum provident obcaecati quos tempore corporis nisi officia cum beatae itaque, quis unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi est, nesciunt culpa rem iure nihil aliquam vitae dolorum provident obcaecati quos tempore corporis nisi officia cum beatae itaque, quis unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi est, nesciunt culpa rem iure nihil aliquam vitae dolorum provident obcaecati quos tempore corporis nisi officia cum beatae itaque, quis unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi est, nesciunt culpa rem iure nihil aliquam vitae dolorum provident obcaecati quos tempore corporis nisi officia cum beatae itaque, quis unde.");
  }, []);

  return (
    <div className=' min-h-screen min-w-screen'>
      <div ref={textContainer} className=" w-[900px] h-[500px] mx-auto relative">

      </div>
    </div>
  )
}

export default GunText
