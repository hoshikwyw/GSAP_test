import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import TypingText from '../pages/TypingText'
import GunText from '../pages/GunText'

const Path = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/typingText' element={<TypingText />} />
                <Route path='/gunText' element={<GunText />} />
            </Routes>
        </div>
    )
}

export default Path
