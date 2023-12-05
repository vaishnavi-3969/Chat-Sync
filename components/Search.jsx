import React from 'react'

const Search = () => {
    return (
        <div className='search'>
            <div className='searchForm'>
                <input type='text'placeholder='Find a user'/>
            </div>
            <div className='userChat'>
                <img src='https://img.lovepik.com/free-png/20210923/lovepik-cute-girl-avatar-png-image_401231841_wh1200.png' alt='' />
                <div className='userChatInfo'>
                    <span>Vaishnavi</span>
                </div>
            </div>
        </div>
    )
}

export default Search