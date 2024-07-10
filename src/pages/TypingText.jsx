import gsap from 'gsap'
import React, { useEffect } from 'react'

const TypingText = () => {
  useEffect(() => {
    gsap.to("h1", {
      duration: 3,
      repeat: Infinity,
      repeatDelay: 5,
      text: {
        value: "This is a to tween text blah blah blah >>>>>>>",

      }
    })
    gsap.from("h2", { duration: 3, text: "", repeat: Infinity, repeatDelay: 5 })

  }, [])
  return (
    <div className=' min-h-screen min-w-screen'>
      <h1></h1>
      <h2>This is a from tween text blah blah blah</h2>
    </div>
  )
}

export default TypingText
