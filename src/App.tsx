import React, { useState } from 'react';
import Send from './components/Send';
import Review from './components/Review';
import Confirm from './components/Confirm'
import './App.css';

function App() {

  const [validFormSent, setValidFormSent] = useState(false)
  const [transactionConfirmed, setTransactionConfirmed] = useState(false)

  return (
    <>
    <Confirm />
    </>
  );
}

export default App;
