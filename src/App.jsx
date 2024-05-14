import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { db } from './firebase/config';
import { addDoc, collection } from 'firebase/firestore';

function App() {
  const [email, setEmail] = useState('');

  const handleJoin = async () => {
    try {
      await addDoc(collection(db, 'waitlist'), {
        wait_email : email,
      });
      console.log('Email added to waitlist successfully');
    } catch (error) {
      console.error('Error adding email to waitlist:', error);
    }
  };
  return (
    <>
      <div className='text-2xl font-bold pt-14'>
        <h1>Please Login or </h1>
        <div className="waitlist">
          <h1 className='text-3xl'>Join the Waitlist</h1>
          <label htmlFor="email" className='flex gap-3 items-center'>
            <span>Email</span>
            <input
              type='email' 
              className='rounded-md border-black border my-3 py-1 px-4 text-lg font-normal text-black'
              placeholder='email@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button onClick={(email)=> handleJoin(email)} className='rounded-md border border-black py-1 px-4'>Join</button>
        </div>
      </div>
    </>
  )
}

export default App
