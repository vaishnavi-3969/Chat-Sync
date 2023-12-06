import React, { useContext, useEffect, useState } from 'react'
import Message from './Message'
import { ChatContext } from '../context/ChatContext'
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../src/firebase';

const Messages = () => {
    const [messages, setMessages] = useState([]);

    const {data} = useContext(ChatContext);


    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "chats", data.chatId),(doc)=>{
            doc.exists() && setMessages(doc.data().messages)
        })
        return () => {
            unsubscribe()
        }
    },[data.chatId])
    return (
        <div className='messages'>
           {
            messages.map(m => (
                <Message key={m.id} message={m}/>
            ))
           }
        </div>
    )
}

export default Messages