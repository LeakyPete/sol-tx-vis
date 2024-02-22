import React, { useState, useEffect } from 'react';
import { Connection } from '@solana/web3.js';

//with saved input from Transaction Input
const TransactionDetails = ({ txId }) => {
    //create state for detail
  const [details, setDetails] = useState(null);
  //establish connection
  const connection = new Connection('https://api.devnet.solana.com');
//fetch transaction details based on input if not returned or does not exist send error.
  useEffect(() => {
    const fetchTransactionDetails = async () => {
      try {
        const txDetails = await connection.getTransaction(txId);
        setDetails(txDetails);
      } catch (error) {
        console.error('Error fetching transaction details:', error);
      }
    };

    if (txId) {
      fetchTransactionDetails();
    }
  }, [txId, connection]);
// should be an easier way to do this but extract and stringify important details and later parsed them via JSX below
  function getSender() {
    return(
        JSON.stringify(details.transaction.message.accountKeys[0])
    )
  }

  function getReciever() {
    return(
        JSON.stringify(details.transaction.message.accountKeys[1])
    )
  }

  function getTxSig() {
    return(
        JSON.stringify(details.transaction.signatures[0])
    )
  }

  function getFee() {
    return(
        JSON.stringify(details.meta.fee)
    )
  }

  function getHash() {
    return(
        JSON.stringify(details.transaction.message.recentBlockhash)
    )
  }

  return (
    <div className='render--container'>
      <div className='render--box'>
        {details ? (
            <pre>
                <div className='render--content'>
                    <h4><span>Tx Sig:</span><br/> {JSON.parse(getTxSig())}</h4>
                    <h4><span>Sender:</span><br/> {JSON.parse(getSender())}</h4>
                    <h4><span>Reciever:</span><br/> {JSON.parse(getReciever())}</h4>
                    <h4><span>Fee:</span><br/> {JSON.parse(getFee() * .000000001)}</h4>
                    <h4><span>Recent Block:</span><br/> {JSON.parse(getHash())}</h4>
                </div>
            </pre>
        ) : (
            <p>No transaction details available</p>
        )}
      </div>
    </div>
  );
};

export default TransactionDetails;
