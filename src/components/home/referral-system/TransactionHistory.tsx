'use client';

import React from 'react';
import { formatEther } from 'viem';

const TransactionHistory = ({historyTable}:{historyTable?:any}) => {
  const dateTime = (timestamp:any)=>{
    const numericTimestamp = Number(timestamp);
    const date = new Date(numericTimestamp * 1000)
    const formattedDate = date.toLocaleString();
    return formattedDate
  }
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
            {historyTable && historyTable?.map((item:any,index:number)=>{
              return(
                <>
                 <tr key={index+1} className="border-b border-gray-700">
              <td className="px-4 py-2">{dateTime(item?.at) || "--"}</td>
              <td className="px-4 py-2">{item?.coin || "--"}</td>
              <td className="px-4 py-2">{item?.user || "--"}</td>
              <td className="px-4 py-2">
                <p>
                {Number(formatEther(BigInt(item?.amount))).toFixed(6) || "--"}
                </p>
                <p>
                {Number(formatEther(BigInt(item?.volume))).toFixed(4) || "--"}
                </p>
                
                
                 </td>
              <td className="px-4 py-2">--</td>
            </tr>
                </>
              )
            })}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;