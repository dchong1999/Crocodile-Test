import React, { useState } from 'react';

const Signin = ({setPage}) => {
  return (
    <div className='page'>
      <h1>Signin</h1>
      <form>
        <div><input type="text" placeholder="Username"></input></div>
        <div><input type="text" placeholder="Password"></input></div>
        <div><button className='square'>Login</button></div>
        <div><button className='round' onClick={(e) => setPage(2)}>Forgot Password</button></div>
      </form>
    </div>
  );
}

export default Signin;