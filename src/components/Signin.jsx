import React, { useState } from 'react';

const Signin = ({setPage, username, password}) => {
  const [usernameAttempt, setUsernameAttempt] = useState('');
  const [passwordAttempt, setPasswordAttempt] = useState('');
  const [error, setError] = useState(false);
  const handle = (e) => {
    e.preventDefault();
    if (usernameAttempt === username && passwordAttempt === password) {
      setError(false);
      window.alert("Successful Login");
    } else {
      setError(true);
    }
  }
  return (
    <div className='page'>
      <h1>Signin</h1>
      <form onSubmit={(e) => {handle(e)}}>
        <div><input type="text" placeholder="Username" onChange={(e) => {setUsernameAttempt(e.target.value)}}></input></div>
        <div><input type="password" placeholder="Password" onChange={(e) => {setPasswordAttempt(e.target.value)}}></input></div>
        {error ? <h4>Your account or password is incorrect. If you don't remember your password reset it now.</h4>: null}
        <div><button className='square' type='submit'>Login</button></div>
        <div><button className='round' type='button' onClick={(e) => setPage(2)}>Forgot Password</button></div>
      </form>
    </div>
  );
}

export default Signin;