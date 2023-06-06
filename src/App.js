import React, { useState } from 'react';
import Leadership  from './components/Leadership.jsx';
import Skaters  from './components/Skaters.jsx';
import logo from './logo.png'
import './App.css';

function App() {

  const [menu, setMenu] = useState(null);
  const [password, setPassword] = useState('');
  const [isLeader, setIsLeader] = useState(false)

  function authenticate(){
    const correctPassword = 'MHBMVP'
    if(password.toUpperCase() === correctPassword){
      setIsLeader(true)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-zone">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>2023 MHBPS Hub</h1>
        </div>
        {menu==='skater' &&<Skaters/>}
        {menu==='leader'? isLeader ?<Leadership/>:
        <div>
          <h3>Password?</h3>
          <input
            label = 'Password'
            onChange={(e)=>setPassword(e.target.value)}
            onKeyDownCapture={authenticate}/>
            <button onClick={authenticate}>Go!</button>
            <br/>
            <br/>
        </div>
        :''}
        {menu == null ?
        <div>
          <h2> I am a:</h2>
          <div className="choice-buttons">
            <button onClick={()=>setMenu('skater')}>Skater</button>
            <button onClick={()=>setMenu('leader')}>Coach/Captain</button>
          </div>
        </div>: 
        <div className="choice-buttons">
          <button onClick={()=>setMenu(null)}>Back</button>
        </div>
        }
      </header>
    </div>
  );
}

export default App;
