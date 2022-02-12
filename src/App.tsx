import React, { useState, useEffect } from 'react';
import './App.css';
import Signup from './components/Signup';


function App() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [sessionToken, setSessionToken] = useState<string | null>("");
  const [role, setRole] = useState('member')

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const updateToken = (newToken:any) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
}


  return (
    <div className="App">
      <Signup email={email} setEmail={setEmail}
               username= {username} setUsername={setUsername}
               password= {password} setPassword={setPassword} 
               updateToken = {updateToken}
               />
    </div>
  );
}

export default App;
