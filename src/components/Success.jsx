import React, { useState } from 'react';

import success from '../media/success.png';

const Success = ({setPage}) => {
  const handle = (e) => {
    setPage(1);
  }
  return (
    <div className='page success'>
      <img src={success}/>
      <h3>Password was changed!</h3>
      <button onClick={(e) => {handle(e)}}>OK</button>
    </div>
  );
}

export default Success;