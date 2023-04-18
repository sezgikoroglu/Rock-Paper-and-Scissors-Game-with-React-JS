import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className='names'>
                <p>rock</p>
                <p>paper</p>
                <p>scissors</p>
            </div>
            <div className='score'>
                <p className='title'>Score</p>
                <p className='number'>0</p>
            </div>

        </div>
    )
}

export default Header;
