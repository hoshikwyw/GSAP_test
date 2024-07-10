import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({ to, src, description, btnText, title }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={src}
                    alt="Shoes"
                    className="rounded-xl brightness-50 w-full h-56" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <NavLink to={to}>
                        <button className="btn btn-primary">{btnText}</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card
