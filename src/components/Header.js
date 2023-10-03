import React from 'react'

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className='header'>
      <h1>Tasks</h1>
      <button
        onClick={() =>
          handleToggleDarkMode(previousDarkMode => !previousDarkMode)
        }
        className='btn-toggle'
      >
        Switch mode
      </button>
    </div>
  )
}

export default Header;
