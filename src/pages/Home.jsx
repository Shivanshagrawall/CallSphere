import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate=useNavigate();
    let [input,setInput]=useState('');
    function handleJoin(){
        navigate(`/room/${input}`);
    }
  return (
    <div id='home'>
        <input type="text" placeholder='Enter your room Id...' onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handleJoin}>Join Now</button>
    </div>
  )
}

export default Home