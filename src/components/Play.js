import React from 'react'
import { Link } from 'react-router-dom'

const Play = () => {
  return (
    <div className='play'>
        <svg xmlns="http://www.w3.org/2000/svg" width="305" height="277"><path fill="none" stroke="#000" stroke-width="15" d="M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z" opacity=".2"/></svg>
        <div className='items'>
            <Link to="/game">
                <div
                    data-id='paper'
                    className='icon icon--paper'
                >
                </div>
            </Link>
            <Link to="/game">
                <div
                    data-id='scissors'
                    className='icon icon--scissors'
                >
                </div>
            </Link>
            <Link to="/game">
                <div
                    data-id='rock'
                    className='icon icon--rock'
                >
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Play