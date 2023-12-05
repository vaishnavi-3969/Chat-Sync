import React from 'react'
import Image from '../images/image.png';
import Attach from '../images/attach-file.png';

const Input = () => {
    return (
        <div className='input'>
            <input type='text' placeholder='Type something....' />
            <div className='send'>
                <img src={Image} style={{height:'24px',height:'24px'}}  alt='' />
                <input type='file' style={{ display: 'none' }} id='file' />
                <label htmlFor='file' alt="">
                    <img src={Attach} style={{height:'24px',height:'24px'}}  alt='' />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input