import React from 'react'

export default function CommonButton({btnName}:{btnName:string}) {
  return (
    <button
    style={{
      background: "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%",
    }}
    className="text-black w-[237px] hidden sm:block h-[60px] rounded-[13px] text-[21px] font-bold shadow-md hover:opacity-90"
  >
   {btnName}
  </button>
  )
}
