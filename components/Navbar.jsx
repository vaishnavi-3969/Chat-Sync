import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Chat Sync</span>
            <div className='user'>
                <img src='https://img.lovepik.com/free-png/20210923/lovepik-cute-girl-avatar-png-image_401231841_wh1200.png' alt='' />
                <span>Vaishnavi</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar