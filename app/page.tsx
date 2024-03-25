import Image from "next/image";

"use client"

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
    const monthlyPayment = principal / discountFactor;
    setMonthlyPayment(monthlyPayment);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Mortgage Calculator</h1>
      <div className="mb-4">
        <label className="block mb-1">Principal Amount:</label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Interest Rate (%):</label>
        <input
          type="number"
          step="0.01"
          className="w-full border rounded px-3 py-2"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Loan Term (years):</label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={loanTerm}
          onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={calculateMonthlyPayment}
        >
          Calculate
        </button>
      </div>
      {monthlyPayment > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Monthly Payment:</h2>
          <p className="text-gray-800">${monthlyPayment.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default MortgageCalculator;
