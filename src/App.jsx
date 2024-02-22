import React, { useState } from 'react';
import TransactionInput from './Comps/TransactionInput';
import TransactionDetails from './Comps/TransactionDetails';
import Header from './Comps/Header'

const App = () => {
  // create tx state
  const [txId, setTxId] = useState('');
// handle input to set new state and use as paramenter for TransactionDetails
  const handleTxIdSubmit = (id) => {
    setTxId(id);
  };

  return (
    <div>
      <Header />
      <TransactionInput onTxIdSubmit={handleTxIdSubmit} />
      <TransactionDetails txId={txId} />
    </div>
  );
};

export default App;

