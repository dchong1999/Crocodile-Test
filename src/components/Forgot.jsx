import React, { useState } from 'react';

const Forgot = ({setPage}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handle = (e) => {
    e.preventDefault();
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (email !== '' && password !=='' && regex.test(password)) {
      setPage(3);
    } else {
      window.alert('Try Again. Remember to enter both email and password. Password must be 8+ characters and include letters and numbers');
      setPage(2);
    }
  }
  return (
    <div className='page'>
      <h1>Forgot</h1>
      <form onSubmit={(e) => {handle(e)}}>
        <div><input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}></input></div>
        <div><input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}></input></div>
        <div><button className='square'>Change</button></div>
      </form>
    </div>
  );
}

export default Forgot;