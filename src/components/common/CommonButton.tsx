import React from 'react'

export default function CommonButton({btnName,width}:{btnName:string,width?:string}) {
  return (
    <button
    style={{
      background: "linear-gradient(180deg, #A0DBF6 0%, #2B9AE6 100%",
    }}
    className={`text-black ${width ? width :"w-[237px]"}   sm:block h-[60px] rounded-[13px] text-[21px] font-bold shadow-md hover:opacity-90`}
  >
   {btnName}
  </button>
  )
}
