import React from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../src/firebase'
import { doc, setDoc } from "firebase/firestore";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL
} from 'firebase/storage'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)

            console.log(response)

            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                null,
                (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        console.log('File available at', downloadURL);
                        await updateProfile(response.user, {
                            displayName,
                            photoURL: downloadURL
                        });
                        await setDoc(doc(db, "users", response.user.uid), {
                            uid: response.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL
                        })
                        await setDoc(doc(db, "userChats", response.user.uid), {})
                        navigate('/')
                    });

                }
            );

        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Chat Sync</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='display name' />
                    <input type='email' placeholder='email' />
                    <input type='password' placeholder='password' />
                    <input style={{ display: 'none' }} type='file' id='file' />
                    <label htmlFor='file'>
                        <i className='fas fa-upload'></i>
                        <span>Upload an avatar</span>
                    </label>
                    <button type='submit'>Sign Up</button>
                </form>
                <p>Don't have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register


