import React, { useContext, useState } from 'react'
import Image from '../images/image.png';
import Attach from '../images/attach-file.png';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { Timestamp, arrayUnion, doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../src/firebase';
import { updateProfile } from 'firebase/auth';
import { db } from '../src/firebase';

const Input = () => {
    const [text, setText] = useState('');
    const [img, setImg] = useState(null)
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                'state_changed',
                null,
                (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.id,
                                date: Timestamp.now(),
                                img: downloadURL,
                            })
                        })
                    });

                }
            );
        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.id,
                    date: Timestamp.now(),
                })
            })
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + '.date']: serverTimestamp(),
        })
        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + '.date']: serverTimestamp(),
        })
        setText('')
        setImg(null)
    }
    return (
        <div className='input'>
            <input
                type='text'
                placeholder='Type something....'
                onChange={e => setText(e.target.value)}
                value={text}
            />
            <div className='send'>
                <img
                    src={Image}
                    style={{ height: '24px', height: '24px' }}
                    alt='' />
                <input
                    type='file'
                    style={{ display: 'none' }}
                    id='file'
                    onChange={e => setImg(e.target.files[0])}
                />
                <label htmlFor='file' alt="">
                    <img
                        src={Attach}
                        style={{ height: '24px', height: '24px' }}
                        alt='' />
                </label>
                <button
                    style={{ cursor: 'pointer' }}
                    onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    )
}

export default Input