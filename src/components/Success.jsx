import React, { useState } from 'react';

import success from '../media/success.png';

const Success = () => {
  return (
    <div className='page success'>
      <img src={success}/>
      <h3>Password was changed!</h3>
    </div>
  );
}

export default Success;