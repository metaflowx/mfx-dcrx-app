'use client';

import React from 'react';

const TransactionHistory = () => {
  return (
    <div className="bg-custom-gradient p-6 rounded-xl shadow-md border border-gray-700 w-full">
      <h2 className="text-xl font-semibold text-blue-400 mb-4">Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="px-4 py-2">Date and Time</th>
              <th className="px-4 py-2">Coin</th>
              <th className="px-4 py-2">Account</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Bonus Earned</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder for data rows */}
            <tr className="border-b border-gray-700">
              <td className="px-4 py-2">--</td>
              <td className="px-4 py-2">--</td>
              <td className="px-4 py-2">--</td>
              <td className="px-4 py-2">--</td>
              <td className="px-4 py-2">--</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;