import React, { useState } from 'react'
import Path from './paths/Path'
import { NavLink } from 'react-router-dom'

const App = () => {
  const [theme, setTheme] = useState('sunset')
  const [isChecked, setIsChecked] = useState(true)
  const handleChange = (e) => {
    setIsChecked(e.target.checked)
    if (e.target.checked) {
      setTheme('sunset')
    } else {
      setTheme('emerald')
    }
  }
  return (
    <div className=' min-w-screen min-h-screen flex justify-center items-center flex-col' data-theme={theme}>
      <div className=' w-full shadow-xl mb-5'>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <NavLink to="/">
              <p className="btn btn-ghost text-xl">GSAP TEST</p>
            </NavLink>
          </div>
          <div className="flex-none gap-2">
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                value="synthwave"
                checked={isChecked}
                onChange={handleChange}
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                  d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="/pfp.jpg" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Path />
    </div>
  )
}

export default App
