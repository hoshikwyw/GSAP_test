import gsap from 'gsap';
import { EasePack, TextPlugin } from 'gsap/all';
import React, { useEffect, useRef } from 'react'
import "../styles/gunText.css"
import "../assets/gunText.js"

// gsap.registerPlugin(TextPlugin, EasePack)

const GunText = () => {
  // const containerRef = useRef(null)
  // const _sentenceEndExp = /[\.|\?|!]$/g;

  // const machineGun = (text) => {
  //   const words = text.split('')
  //   const tl = gsap.timeline({ delay: 0.6, repeat: 2, repeatDelay: 4 })
  //   const wordCount = words.length
  //   let time = 0

  //   words.forEach((word) => {
  //     const isSentenced = _sentenceEndExp.test(word)
  //     const ele = document.createElement('h3')
  //     ele.innerHTML = word
  //     containerRef.current.appendChild(ele)

  //     let duration = Math.max(0.5, word.length * 0.08)
  //     if (isSentenced) {
  //       duration += 0.6
  //     }

  //     gsap.set(ele, { autoAlpha: 0, scale: 0, z: 0.01 })

  //     tl.to(ele, {
  //       duration,
  //       scale: 1.2,
  //       ease: 'slow(0.25, 0.9 , true)',
  //     }, time)

  //     time += duration - 0.05
  //     if (isSentenced) {
  //       time += 0.6
  //     }
  //   })
  // }

  // useEffect(() => {
  //   const text = "These words are constantly animating in your face to suck you in and leave you hanging for what comes next. Can you handle the awesomeness? Or are you left quivering in fear? It's only text, silly. Longer words stay on the screen for a greater duration. Each sentence ends with a dramatatic pause. Yes, that pause. The End"
  //   machineGun(text)
  // }, [])
  return (
    <div className=' min-w-screen min-h-screen'>
      <div id='textContainer' >
    
      </div>
    </div>
  )
}

export default GunText
