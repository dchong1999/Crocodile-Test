import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

//Individual pages
import Signin from './components/Signin.jsx';
import Forgot from './components/Forgot.jsx';
import Success from './components/Success.jsx';

import './index.css';

const App = () => {
  const [page, setPage] = useState(1);
  //hardcoded login
  const [username, setUsername] = useState('crocodile23@gmail.com');
  const [password, setPassword] = useState('Passw0rd!');

  return (
    <div id='main'>
        {(page == 1) && <Signin setPage={setPage} username={username} password={password}/>}
        {(page == 2) && <Forgot setPage={setPage} username={username} setPassword={setPassword}/>}
        {(page ==3) && <Success setPage={setPage}/>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);