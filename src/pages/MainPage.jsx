import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../components/Card'

const MainPage = () => {
  return (
    <div className=' grid grid-cols-3 gap-6'>

      <Card to="/gunText" src="/gunText.jpg" description="Gun Text" btnText="Gun Text" title="Gun Text" />
      <Card to="/typingText" src="/typingText.jpg" description="Typing Text" btnText="Typing Text" title="Typing Text" />
    </div>
  )
}

export default MainPage
