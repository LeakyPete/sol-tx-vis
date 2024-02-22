import React, { useState } from 'react';

const TransactionInput = ({ onTxIdSubmit }) => {
    //create state for input
  const [txId, setTxId] = useState('');
//on click event save input set to txId
  const handleInputChange = (event) => {
    setTxId(event.target.value);
  };
// report back to app
  const handleSubmit = () => {
    onTxIdSubmit(txId);
  };

  return (
    <div className='tx--container'>
      <div className='tx--input-box'>    
        <input
            className='tx--input'
            type="text"
            value={txId}
            onChange={handleInputChange}
            placeholder="Enter Transaction ID"
        />
        <button className='tx--input-btn' onClick={handleSubmit}>Fetch Transaction</button>
      </div>
    </div>
  );
};

export default TransactionInput;
