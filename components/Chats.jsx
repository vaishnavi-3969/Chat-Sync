import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../src/firebase';

const Chats = () => {
    const [chats, setChats] = useState([]);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const getChats = () => {
            const unsubscribe = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
                setChats(doc.data() || {}); // Use an empty object if doc.data() is falsy
            });
            return () => {
                unsubscribe();
            };
        };

        currentUser.uid && getChats();

    }, [currentUser.uid]);

    console.log(Object.entries(chats));

    return (
        <div className='chats'>
            {Object.entries(chats).map((chat) => (
                <div className='userChat' key={chat[0]}>
                    <img src={chat[1].userInfo.photoURL} alt='' />
                    <div className='userChatInfo'>
                        <span>{chat[1].userInfo.displayName}</span>
                        <p>{chat[1].userInfo.lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chats;
