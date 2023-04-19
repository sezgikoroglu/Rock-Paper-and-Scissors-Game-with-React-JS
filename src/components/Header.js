import React from 'react'

const Header = ({score}) => {
    return (
        <div className='header'>
            <div className='names'>
                <p>rock</p>
                <p>paper</p>
                <p>scissors</p>
            </div>
            <div className='score'>
                <p className='title'>Score</p>
                <p className='number'>{score}</p>
            </div>

        </div>
    )
}

export default Header;
