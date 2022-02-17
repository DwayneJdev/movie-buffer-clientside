import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Sitebar from './components/Navbar';
import ReviewIndex from './components/Reviews/ReviewIndex';


function App() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [sessionToken, setSessionToken] = useState<string | null>("");
  // const [role, setRole] = useState('member')

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const updateToken = (newToken: any) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token'))
  }


  return (
    <div className="App">
      {protectedViews() ?
        <Fragment>
<ReviewIndex sessionToken = {sessionToken} />
        </Fragment>
        :
        <Fragment>
          <Signup email={email} setEmail={setEmail}
            username={username} setUsername={setUsername}
            password={password} setPassword={setPassword}
            updateToken={updateToken}
          />
          <Login email={email} setEmail={setEmail}
            username={username} setUsername={setUsername}
            password={password} setPassword={setPassword}
            updateToken={updateToken}
          />
        </Fragment>
      }
      <Sitebar clearToken={clearToken} />
    </div>
  );
}

export default App;
