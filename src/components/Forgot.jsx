import React, { useState } from 'react';

const Forgot = ({setPage, username, setPassword}) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const handle = (e) => {
    e.preventDefault();
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    if (email !== '' && newPassword !=='' && regex.test(newPassword)) {
      setError(false);
      if (email === username) {
        setError1(false);
        setPage(3);
        setPassword(newPassword);
      } else {
        setError1(true);
      }
    } else {
      setError(true);
      setPage(2);
    }
  }
  return (
    <div className='page'>
      <h1>Forgot</h1>
      <form onSubmit={(e) => {handle(e)}}>
        <div><input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}></input></div>
        <div><input type="password" placeholder="Password" onChange={(e) => {setNewPassword(e.target.value)}}></input></div>
        {error ? <h4>'Try Again. Remember to enter both email and password. Password must be 8+ characters and include letters, numbers, and symbols: !@#$%^&*'</h4> :null}
        {error1 ? <h4>The username was not registered in the system. Try again.</h4>: null}
        <div><button className='square'>Change</button></div>
      </form>
    </div>
  );
}

export default Forgot;