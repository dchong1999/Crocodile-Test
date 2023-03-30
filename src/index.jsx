import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

//Individual pages
import Signin from './components/Signin.jsx';
import Forgot from './components/Forgot.jsx';
import Success from './components/Success.jsx';

import './index.css';

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <div id='main'>
        {(page == 1) && <Signin setPage={setPage}/>}
        {(page == 2) && <Forgot setPage={setPage}/>}
        {(page ==3) && <Success/>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);