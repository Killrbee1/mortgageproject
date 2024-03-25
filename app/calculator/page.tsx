'use client'

import { useState } from 'react';

function MortgageCalculator() {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const discountFactor =
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1) /
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments));
    const monthlyPayment = (principal / discountFactor);
    setMonthlyPayment(monthlyPayment);
  };

  return (
    <div>
      <h1>Mortgage Calculator</h1>
      <div>
        <label>
          Principal Amount:
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Interest Rate (%):
          <input
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Loan Term (years):
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <button onClick={calculateMonthlyPayment}>Calculate</button>
      </div>
      {monthlyPayment > 0 && (
        <div>
          <h2>Monthly Payment:</h2>
          <p>${monthlyPayment.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default MortgageCalculator;
