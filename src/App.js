import React, { useState } from 'react';

import './App.css';

const App = () => {

    const[ username , setUserName ] =useState('');
    const[ password , setPassword ] =useState('');
    const[ showPassword , setShowPassword ] =useState(false);
    return(

        <div>
            <input 
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e)=> setUserName(e.target.value)
            }/>
            <input 
            type={showPassword ? 'text' : 'password' }
            placeholder="Enter Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)
            }/>
            <h2>{username}</h2>
            <h2>{showPassword?password:'*'.repeat(password.length)}</h2>
            <button onClick={(e)=> {setShowPassword(!showPassword)}}>Show/Hide Password</button>
        </div>
    
    )
}

export default App;
